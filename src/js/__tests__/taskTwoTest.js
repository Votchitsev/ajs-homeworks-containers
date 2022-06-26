import ErrorRepository from '../taskTwo/errorRepository';

const error = new ErrorRepository();

test('get existed error', () => {
  expect(error.translate(400)).toBe('Bad Request');
});

test('get unknown error', () => {
  expect(error.translate(403)).toBe('Unknown error');
});
