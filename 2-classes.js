"use strict";

const str1 = "why 45 cats were sitting over 21 piramides y tal vez 273";
console.log('1:::', str1.match(/\d/));
console.log('2:::', str1.match(/\d/g));
console.log('3:::', str1.match(/\d+/g));
console.log('4:::', str1.match(/\w/));
console.log('5:::', str1.match(/\w/g));
console.log('6:::', str1.match(/\w+/g));