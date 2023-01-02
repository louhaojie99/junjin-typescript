/**
 * 函数类型
 * 函数的类型签名
 * - 如果说变量的类型是描述了这个变量的值类型，那么函数的类型就是描述了函数入参类型与函数返回值类型，
 * - 它们同样使用:的语法进行类型标注。我们直接看最简单的例子：
 */
function sum(sum1: number, sum2: number): number {
  return sum1 + sum2;
}

/**
 * void 类型
 * - 在 TypeScript 中，一个没有返回值（即没有调用 return 语句）的函数，
 * - 其返回类型应当被标记为 void 而不是 undefined，即使它实际的值是 undefined。
 */
// 没有调用 return 语句
function foo(): void {}

// 调用了 return 语句，但没有返回值
function bar(): void {
  return;
}

// 可选参数与 rest 参数
// 在很多时候，我们会希望函数的参数可以更灵活，比如它不一定全都必传，
// 当你不传入参数时函数会使用此参数的默认值。正如在对象类型中我们使用 ? 描述一个可选属性一样，在函数类型中我们也使用 ? 描述一个可选参数：
// 在函数逻辑中注入可选参数默认值
// 注意: 可选参数必须位于必选参数之后
function func(name: string, age?: number): number {
  const inputAge = age || 18; // 或使用 age ?? 18
  return name.length + inputAge;
}

// 对于 rest 参数的类型标注也比较简单，由于其实际上是一个数组，这里我们也应当使用数组类型进行标注
function funcRest(value: string, ...rest: any[]) {}
// 我们前面学习的元祖类型进行标注：
function funcRest2(arg1: string, ...rest: [number, boolean]) {}
funcRest2("louhaojie", 18, true);

// 函数重载签名（Overload Signature）
function oFunc(value: number, bar: true): string;
function oFunc(value: number, bar?: false): number;
function oFunc(value: number, bar?: boolean): string | number {
  if (bar) {
    return String(value);
  } else {
    return value * 599;
  }
}

// 异步函数、Generator 函数等类型签名
async function asyncFunc(): Promise<void> {}
function* genFunc(): Iterable<void> {}
async function* asyncGenFunc(): AsyncIterable<void> {}
