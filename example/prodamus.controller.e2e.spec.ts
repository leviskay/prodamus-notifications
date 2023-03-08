import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { INestApplication } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import {
  PaymentCreatedEvent,
  PaymentErrorOccuredEvent,
  SubscriptionCreatedEvent,
  SubscriptionDeactivatedEvent,
  SubscriptionFinishedEvent,
  SubscriptionRenewedEvent,
} from '../src/events';
import { AppModule } from './app.module';

describe('/POST /prodamus/payments', () => {
  let app: INestApplication;
  let emmiter: DeepMocked<EventEmitter2>;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(EventEmitter2)
      .useValue(createMock<EventEmitter2>())
      .compile();

    app = moduleRef.createNestApplication();
    emmiter = app.get<DeepMocked<EventEmitter2>>(EventEmitter2);
    await app.init();
  });

  const expectEventWithName = (eventName: string) =>
    expect(emmiter.emit).toHaveBeenCalledWith(eventName, expect.anything());

  describe(`/POST /prodamus/payments`, () => {
    it(`should accept payment error occured event`, async () => {
      const result = await request(app.getHttpServer())
        .post('/prodamus/payments')
        .field('subscription[error]', 'Недостаточно средств.');

      expect(result.status).toBe(200);
      expectEventWithName(PaymentErrorOccuredEvent.eventName);
    });

    it(`should accept payment finished event`, async () => {
      const result = await request(app.getHttpServer())
        .post('/prodamus/payments')
        .field('subscription[type]', 'action')
        .field('subscription[action_code]', 'finish');

      expect(result.status).toBe(200);
      expectEventWithName(SubscriptionFinishedEvent.eventName);
    });

    it(`should accept subscription renewed event`, async () => {
      const result = await request(app.getHttpServer())
        .post('/prodamus/payments')
        .field('subscription[type]', 'action')
        .field('subscription[action_code]', 'auto_payment');

      expect(result.status).toBe(200);
      expectEventWithName(SubscriptionRenewedEvent.eventName);
    });

    it(`should accept subscription diactivated event`, async () => {
      const result = await request(app.getHttpServer())
        .post('/prodamus/payments')
        .field('subscription[type]', 'action')
        .field('subscription[action_code]', 'deactivation');

      expect(result.status).toBe(200);
      expectEventWithName(SubscriptionDeactivatedEvent.eventName);
    });

    it(`should accept subscription created event`, async () => {
      const result = await request(app.getHttpServer())
        .post('/prodamus/payments')
        .field('products[id]', '1')
        .field('subscription[type]', 'action');

      expect(result.status).toBe(200);
      expectEventWithName(SubscriptionCreatedEvent.eventName);
    });

    it(`should accept payment created event`, async () => {
      const result = await request(app.getHttpServer())
        .post('/prodamus/payments')
        .field('products[id]', '1');

      expect(result.status).toBe(200);
      expectEventWithName(PaymentCreatedEvent.eventName);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
