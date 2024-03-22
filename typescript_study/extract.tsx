


// U에서 할당할 수 있는 타입은 T에서 제외
type test1 = Exclude<"a" | "b", "b">;
type FiveUnder = 1 | 2 | 3 | 4;
type typeEx = Exclude<FiveUnder , 3>;

export default function TypeScriptStudy() {

  // test1 뒤에 제네릭 <T> 가 안들어간다면 해당 펑션에서 T라는 타입을 사용할 수 없음.
  // 그래서 만약 사용한다면,
  function test1<T>(text: T): string {
    return 'string';
  }

  // 아래처럼 지정해주어야함.
  test1<string>('123');

  type FiveUnder = 1 | 2 | 3 | 4;
  type FourUnder = 1 | 2 | 3;
  type ExtractType = Extract<FiveUnder, FourUnder>

  function testExtract(): ExtractType {
    return 3;
  }

  const result: 1 | 2 | 3 = testExtract();

  type NonNullableTestType = undefined | 1 | 2;
  type NonUndefinedType = NonNullable<NonNullableTestType>;

  function testNonUndefinedType(): NonUndefinedType {
    return 1;
  }

  const result2 = testNonUndefinedType();
  type testF = () => string
  type returnTest = ReturnType<testF>;

  function returnTestF(): returnTest {
    return 'string';
  }

  return (
    <></>
  )
}
