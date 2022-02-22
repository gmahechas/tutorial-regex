const str = 'gatos garrotes garra garra garrapaaatarra';
const str2 = 'gatos garrotes garragarra garrapaaatarra';

/* 

{x,y}
*
+
?

*/

console.log('1:::', str.match(/(garra){1}/g));
console.log('2:::', str2.match(/(garra){2}/g));
console.log('3:::', str.match(/(garra){1,2}/g));
console.log('4:::', str2.match(/(garra){1,2}/g));



const str3 = 'gatos garrotes galapagos';
console.log('5:::', str3.match(/gal?r?t?/g));
