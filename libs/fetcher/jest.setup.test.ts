import jestFetchMock from 'jest-fetch-mock';

jestFetchMock.enableMocks();

beforeEach(() => {
  jestFetchMock.resetMocks();
});

afterAll(() => {
  jestFetchMock.disableMocks();
});

it('Dummy', () => {
  expect(true).toBe(true);
});
