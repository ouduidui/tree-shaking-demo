const foo = () => console.log(foo)

const unusedFunc = () => console.log('unusedFunc')

// 在 rollup 和 esbuild 中，
export default {
  foo,
  unusedFunc,
}
