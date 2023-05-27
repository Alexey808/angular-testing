import { SomeClass } from "./additional/some-class";


export function testHelperFn(): any {
  const resultSomeClass = new SomeClass();
  console.log('resultSomeClass: ', resultSomeClass);
  return resultSomeClass;
}
