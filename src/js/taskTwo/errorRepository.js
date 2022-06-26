export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(400, 'Bad Request');
    this.errors.set(401, 'Unauthorized (RFC 7235)');
    this.errors.set(402, 'Payment Required');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
