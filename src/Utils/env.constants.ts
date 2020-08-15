export class EnvConstants {
  constructor() {}

  get NODE_ENV() {
    return process.env.NODE_ENV;
  }

  get PORT() {
    return process.env.PORT || 5000;
  }

  get JWT() {
    return 'test';
  }
}
