export abstract class ProdamusEvent<Payload> {
  protected constructor(
    public readonly name: string,
    public readonly payload: Payload,
  ) {}
}
