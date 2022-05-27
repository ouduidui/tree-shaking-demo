'use strict';

function bar() {
  console.log('bar');
}

const foo = () => console.log(foo);

const unusedFunc = () => console.log('unusedFunc');

// 在 rollup 和 esbuild 中，
var foo$1 = {
  foo,
  unusedFunc,
};

bar();

foo$1.foo();
