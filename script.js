// var kalkuliyator1 = +prompt("Birinchi raqamni kiriting").trim();

// var kalkuliyator2 = prompt("Amalni kritin? Misol uchun: +, -, *, /").trim();

// var kalkuliyator3 = +prompt("Endi 2-raqamini kiriting").trim()

// var result;
// if( kalkuliyator2 === "+"){
//   result = kalkuliyator1 + kalkuliyator3;
// } else if ( kalkuliyator2 === "-"){
//   result = kalkuliyator1 - kalkuliyator3;
// } else if ( kalkuliyator2 === "*"){
//   result = kalkuliyator1 * kalkuliyator3;
// } else if( kalkuliyator2 === "/"){
//   result = kalkuliyator1 / kalkuliyator3;
// } else{
//   alert("Bu xato faqat sonlardi kiritish kerek")
// }

// if (result !== undefined) {
//   alert("Javobi: " + result);
// }


// console.log(a.charAt(a.length - 1));

// console.log(a.charCodeAt(0));

// console.log(a.codePointAt(0));

// console.log(a[-1]);
// console.log(a.concat("Hi"));
// console.log(a.substring(-2));

// console.log(a.padEnd(20, "*"));
// console.log(a.at(-2));

// console.log(a.slice(-1));
// console.log(a.replace(/word/g, "name"));
// console.log(a.isWellFormed());
// var a = "Enter word salom word word";
// console.log(a.repeat(20));



// console.log(a.split(""));


// console.log(text.length)



// let ism = prompt("Ismingizni kiriting");

// if (!ism || ism.trim() === "") {
//   alert("Ism kiriting");
// } else {
//   ism = ism.trim();

//   if (ism.length < 3) {
//     alert("Ism juda qisqa");
//   } else {
//     alert("Salom " + ism);

//     let sabab = prompt("Nima uchun institutga kirishni xohlaysiz?");

//     if (sabab && sabab.trim() !== "") {

//       let natija = sabab.replace(/universitet/gi, "alicode");

//       alert("Natija: " + natija);
//     }
//   }
// }

var type = prompt("Ismingizni kiriting").trim();
if (type === "") {   
  alert("Ismingizni kiritmadingiz")
}else{
    type = type.trim();
    if(type.length < 3){
        alert("Ismni Uzunroq qiling")
    } else{
        alert("Salom" + " " + type)

        var ins = prompt("Nima uchun institutga kirishni xohlaysiz")
        if (ins && ins.trim() !== "")
            var Ozgartirish = ins.replace(/universitet/gi, "alicode")
               alert("Natija: " + Ozgartirish);

        }
  }