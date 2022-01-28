"use strict";

const str1 = "45 cats were sitting over 21 piramides y tal vez 273";
console.log(str1.match(/\d/g));
// ['4', '5', '2', '1', '2', '7', '3']
console.log(str1.match(/\d+/g));
//[ '45', '21', '273' ]
console.log(str1.match(/\w/g));
/* 
[
  '4', '5', 'c', 'a', 't', 's', 'w',
  'e', 'r', 'e', 's', 'i', 't', 't',
  'i', 'n', 'g', 'o', 'v', 'e', 'r',
  '2', '1', 'p', 'i', 'r', 'a', 'm',
  'i', 'd', 'e', 's', 'y', 't', 'a',
  'l', 'v', 'e', 'z', '2', '7', '3'
]
*/
console.log(str1.match(/\w+/g));
/* 
[
  '45',        'cats',
  'were',      'sitting',
  'over',      '21',
  'piramides', 'y',
  'tal',       'vez',
  '273'
]
*/