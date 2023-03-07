import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ProdamusEvent } from './events/ProdamusEvents';

@Injectable()
export class ProdamusEventService {
  constructor(private eventEmitter: EventEmitter2) {}

  async emitAsync(event: ProdamusEvent<any>) {
    return await this.eventEmitter.emitAsync(event.name, event.payload);
  }

  emit(event: ProdamusEvent<any>) {
    return this.eventEmitter.emit(event.name, event.payload);
  }
}
