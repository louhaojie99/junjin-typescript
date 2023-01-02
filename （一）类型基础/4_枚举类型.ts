/**
 * 枚举并不是 JavaScript 中原生的概念，在其他语言中它都是老朋友了（Java、C#、Swift 等）。
 * 目前也已经存在给 JavaScript（ECMAScript）引入枚举支持的 proposal-enum 提案，但还未被提交给 TC39 ，仍处于 Stage 0 阶段。
 */
// 如果要和 JavaScript 中现有的概念对比，我想最贴切的可能就是你曾经写过的 constants 文件了
export const status = {
  SUCCESS: "blue",
  FAILURE: "red",
};
// 如果把这段代码替换为枚举，会是如下的形式：
enum Status {
  SUCCESS = "blue",
  FAILURE = "red",
}
// 这么做的好处非常明显。首先，你拥有了更好的类型提示。其次，这些常量被真正地约束在一个命名空间下（上面的对象声明总是差点意思）。

// 如果你没有声明枚举的值，它会默认使用数字枚举，并且从 0 开始，以 1 递增：
enum Items {
  Foo, // 0
  Bar, // 1
  Baz, // 2
}
// 枚举和对象的重要差异在于，对象是单向映射的，我们只能从键映射到键值。而枚举是双向映射的，即你可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员：
enum ItemsMap {
  Foo,
  Bar,
  Baz,
}
const fooValue = ItemsMap.Foo; // 0
const fooKey = ItemsMap[0]; // "Foo"

/**
 * 常量枚举
 * 常量枚举和枚举相似，只是其声明多了一个 const
 * - 它和普通枚举的差异主要在访问性与编译产物。
 * - 对于常量枚举，你只能通过枚举成员访问枚举值（而不能通过值访问成员）。
 * - 同时，在编译产物中并不会存在一个额外的辅助对象（如上面的 EItems 对象），对枚举成员的访问会被直接内联替换为枚举的值。
 */
const enum EItems {
  Foo,
  Bar,
  Baz,
}
const eValue = EItems.Foo;
