export class EnvConstants {
  constructor() {}

  get NODE_ENV() {
    return process.env.PORT || 5000;
  }

  get PORT() {
    return 5000;
  }

  get JWT() {
    return 'test';
  }
}
