"use strict";
/* 1 search */
const search = "hello i'm gustavo pero gustavo no esta".search(/gustavo/);
console.log('1:::', search);

/* 2 replace */
const replaceFirst = "hello i'm gustavo pero gustavo no esta".replace(/gustavo/, "alexandra");
const replaceAll = "hello i'm gustavo pero gustavo no esta".replace(/gustavo/g, "alexandra");
console.log('2:::', replaceFirst);
console.log('2:::', replaceAll);

/* 3 test */
const rgx = /gustavo/g;
const test = rgx.test("hello i'm alexandra pero GUSTAVO no esta gustavo");
console.log('3:::', test)

/* 4 exec */
const rgx2 = /gustavo/gim;
const exec = rgx2.exec("hello i'm GusTavo pero gustavo no esta gustavo");
console.log('4:::', exec);