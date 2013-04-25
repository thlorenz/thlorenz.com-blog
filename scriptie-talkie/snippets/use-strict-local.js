var o = { a: 1 };
Object.freeze(o);

function f() {
  'use strict';
  o.a = 2;
}
f();
