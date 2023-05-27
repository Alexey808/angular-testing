import { MockSomeClass } from "./additional/some-class.mock";

// важно чтобы импорт тестируемой функции был после импорта моки (MockSomeClass)
import { testHelperFn } from "./test.helper";


jest.mock("./additional/some-class", () => {
  return { SomeClass: MockSomeClass };
});

it('testHelperFn', () => {
  const mockedTestHelperResult = testHelperFn();
  expect(mockedTestHelperResult).toEqual({name: 'MockSomeClass'});
});
