import { bar } from './bar.js'
import foo from './foo.js'

// unused value
const unusedVal = 'HelloWorld'

// dead code
if (false) console.log('dead code')

// 不会被shaking掉，因此被认为具有 side effect (rollup除外)
const randomNum1 = Math.random()
// 使用 PURE 注释告诉打包器该函数没有 side effect
const randomNum2 = /* @__PURE__ */Math.random()

bar()

foo.foo()
