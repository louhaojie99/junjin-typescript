/** 数组类型 */
const arr1: string[] = [];
const arr2: Array<string> = [];

/** 元组类型 */
// 适用场景：1. 一个数组中只存放固定长度的变量
const arr3: string[] = ["小酷", "小樱", "小新"];
// 替换以下元组形式更合适 ↓↓↓
const arr4: [string, string, string] = ["小酷", "小樱", "小新"];
console.log(arr4[10]); // 元组的优势：如果有越界访问情况 ts 会给出类型报错  Tuple type '[string, string, string]' of length '3' has no element at index '10'
// 元组也支持某一位置上的可选成员
const arr5: [string, string?, string?] = ["小酷" /* 成员可选填 */];
// 具名元组（> TypeScript 4.0 支持）
const person: [name: string, age: number, sex: string] = ["小樱", 18, "女"];

/** 对象类型 */
/**
 * 1️⃣ interface
 * 你可以理解为它代表了这个对象对外提供的接口结构
 * ● 每一个属性的值必须一一对应到接口的属性类型
 * ● 不能有多的属性，也不能有少的属性
 * ● 包括直接在对象内部声明，或是 person.sex = 'xxx' 这样属性访问赋值的形式
 */
interface StudentProps {
  /** 姓名 */
  name: string;
  /** 年龄 */
  age: number;
}
const student: StudentProps = { name: "小樱", age: 20 };
// 除了声明属性以及属性的类型以外，我们还可以对属性进行修饰，常见的修饰包括可选（Optional） 与 只读（Readonly） 这两种。
// - 🌈 可选（Optional）
interface StudentProps2 {
  /** 姓名 */
  name: string;
  /** 年龄 */
  age?: number; // 可选（Optional）
  /* 性别 **/
  sex: string;
}
const student2: StudentProps2 = { name: "小樱", sex: "女" };
// - 🌈 只读（Readonly）
interface StudentProps3 {
  /** 姓名 */
  readonly name: string;
  /** 年龄 */
  age?: number; // 可选（Optional）
  /* 性别 **/
  sex: string;
}
const student3: StudentProps3 = { name: "小樱", sex: "女" };
student3.name = "小酷"; // 无法分配到 "name" ，因为它是只读属性

/**
 * 2️⃣ type（Type Alias，类型别名）
 * 很多前端更喜欢用 type（Type Alias，类型别名）来代替接口结构描述对象，
 * 而我更推荐的方式是，interface 用来描述对象、类的结构，而类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型。
 */
type CodeStatus = 200 | 403 | 404;

/**
 * 3️⃣ object、Object 以及 {}
 * 这三者的使用可能感到困惑，详细介绍如下
 */
/**
 * Object 被 JavaScript 原型链折磨过的同学应该记得，原型链的顶端是 Object 以及 Function，
 *         这也就意味着所有的原始类型与对象类型最终都指向 Object，在 TypeScript 中就表现为 Object 包含了所有的类型
 */
const tmp1: Object = "louhaojie";
const tmp2: Object = 100;
const tmp3: Object = true;
// 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
const tmp4: Object = undefined;
const tmp5: Object = null;
const tmp6: Object = void 0;
const tmp7: Object = { name: "linbudu" };
const tmp8: Object = () => {};
const tmp9: Object = [];

/**
 * object 的引入就是为了解决对 Object 类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型这些
 */
// 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
const tmp10: object = undefined;
const tmp11: object = null;
const tmp12: object = void 0;

const tmp13: object = "louhaojie"; // 不成立，值为原始类型
const tmp14: object = 100; // 不成立，值为原始类型

const tmp15: object = { name: "louhaojie" };
const tmp16: object = () => {};
const tmp17: object = [];

/**
 * 最后是 {}，一个奇奇怪怪的空对象，如果你了解过字面量类型，可以认为 {} 就是一个对象字面量类型（对应到字符串字面量类型这样）。
 * 否则，你可以认为使用 {} 作为类型签名就是一个合法的，但内部无属性定义的空对象，这类似于 Object（想想 new Object()），它意味着任何非 null / undefined 的值
 */
const tmp18: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
const tmp19: {} = null;
const tmp20: {} = void 0; // void 0 等价于 undefined

const tmp21: {} = "louhaojie";
const tmp22: {} = 100;
const tmp23: {} = { name: "louhaojie" };
const tmp24: {} = () => {};
const tmp25: {} = [];

// 虽然能够将其作为变量的类型，但你实际上无法对这个变量进行任何赋值操作
const tem26: {} = { name: "louhaojie" };
tem26.age = 18; // 类型 '{}' 不存在属性 'age'。
// 这是因为它就是纯洁的像一张白纸一样的空对象，上面没有任何的属性（除了 toString 这种与生俱来的）。

/**
 * 函数类型
 */
let fun: (value: number) => void;
fun = (value) => {
  console.log("value: ", value);
};
