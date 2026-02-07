var kalkuliyator1 = +prompt("Birinchi raqamni kiriting").trim();

var kalkuliyator2 = prompt("Amalni kritin? Misol uchun: +, -, *, /").trim();

var kalkuliyator3 = +prompt("Endi 2-raqamini kiriting").trim()

var result;
if( kalkuliyator2 === "+"){
  result = kalkuliyator1 + kalkuliyator3;
} else if ( kalkuliyator2 === "-"){
  result = kalkuliyator1 - kalkuliyator3;
} else if ( kalkuliyator2 === "*"){
  result = kalkuliyator1 * kalkuliyator3;
} else if( kalkuliyator2 === "/"){
  result = kalkuliyator1 / kalkuliyator3;
} else{
  alert("Bu xato faqat sonlardi kiritish kerek")
}

if (result !== undefined) {
  alert("Javobi: " + result);
}