export class PirateApiError extends Error {}

export class PirateApiHttpError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, PirateApiHttpError.prototype);
  }
}
