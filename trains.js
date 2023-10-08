console.log("This is from trains.js");

// const moment = require("moment");

// // TASK_ D

// class Shop {
//   time = moment().format("HH:mm:ss");
//   constructor(bread, noodle, coke) {
//     this.bread = bread;
//     this.noodle = noodle;
//     this.coke = coke;
//   }

//   //methods

//   //sotish

//   sellProduct(product, value) {
//     if (product === "non") {
//       if (value > this.bread) {
//         console.log("Mahsulot harid uchun yetarli emas!");
//       } else {
//         this.bread -= value;
//         // console.log(`Hozir ${this.time} da ${this.bread} ta cola mavjud!`);
//       }
//     }
//     if (product === "lagmon") {
//       if (value > this.noodle) {
//         console.log("Mahsulot harid uchun yetarli emas!");
//       } else {
//         this.noodle -= value;
//         // console.log(`Hozir ${this.time} da ${this.noodle} ta cola mavjud!`);
//       }
//     }
//     if (product === "cola") {
//       if (value > this.coke) {
//         // console.log("Mahsulot harid uchun yetarli emas!");
//       } else {
//         this.coke -= value;
//         // console.log(`Hozir ${this.time} da ${this.coke} ta cola mavjud!`);
//       }
//     }
//   }

//   //qabul qilish

//   acceptProduuct(product, value) {
//     if (product === "non") {
//       this.bread += value;

//       // console.log(`Hozir ${this.time} da ${this.bread} ta non mavjud!`);
//     }
//     if (product === "lagmon") {
//       this.noodle += value;

//       // console.log(`Hozir ${this.time} da ${this.noodle} ta lagmon mavjud!`);
//     }
//     if (product === "cola") {
//       this.coke += value;
//     }
//   }

//   // qoldiq
//   remainder() {
//     console.log(
//       `Hozir ${this.time} da ${this.bread} ta non, ${this.noodle} va ${this.coke} ta cola mavjud!`
//     );
//   }
// }

// const myShop = new Shop(4, 5, 2);
// myShop.remainder();
// myShop.sellProduct("non", 1);
// myShop.acceptProduuct("cola", 4);
// myShop.remainder();

//////////////////////////////////////////////
// TASK -E
///////////////////////////
//CHALLENGE 5 SORT ME
// const detail_list = [12, null, 55, 23, null, 34, null, 32, null, null];
// let tempArr = [];
// const moveNullsKeepOrder = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == null) {
//       tempArr.push(arr[i]);
//       const filteredArr = arr.filter((ele) => ele !== null);
//       const result = filteredArr.concat(tempArr);
//       console.log("result:", result);
//     }
//   }
// };
// const result1 = moveNullsKeepOrder(detail_list);
// const detail_list = [12, null, 55, 23, null, 34, null, 32, null, null];

// const moveNullsKeepOrder = detail_list.sort((a, b) => {
//   if (a === null) {
//     return 1;
//   }
//   if (b === null) {
//     return -1;
//   }

//   if (a === b) {
//     return 0;
//   }
//   return a < b ? -1 : 1;
// });

// console.log("result:", moveNullsKeepOrder);
// const detail_list = [12, null, 55, 23, null, 34, null, 32, null, null];

// const moveNullsKeepOrder = (arr) => {
//   const newArr = arr.sort((a, b) => {
//     if (a === null) {
//       return 1;
//     }
//     if (b === null) {
//       return -1;
//     }
//     if (a === b) {
//       return 0;
//     }
//     return a < b ? -1 : 1;
//   });
//   return newArr;
// };
// const result1 = moveNullsKeepOrder(detail_list);

// console.log("result:", result1);

// const tubSon = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// const result = tubSon(9);
// console.log(result);

// Challange 4
// const arr = [2, 1, 5, 30, 1, 3, 10];

// const buyStock = (arr) => {
//   let min_value = Math.min(...arr);
//   const max_val = Math.max(...arr);
//   const max_index = arr.indexOf(max_val);
//   if (arr.indexOf(min_value) > max_index) {
//     let newArr = arr.slice(0, max_index);
//     for (let i = 0; i < newArr.length; i++) {
//       min_value = newArr[0];
//       if (min_value > newArr[i]) {
//         min_value = newArr[i];
//       }
//     }
//   }
//   const profit = max_val - min_value;

//   console.log(
//     `You should buy stock now => {index: ${arr.indexOf(
//       min_value
//     )}} (price => ${min_value})`
//   );
//   console.log(
//     `You should sell stock now => {index: ${arr.indexOf(
//       max_val
//     )}}(price => ${max_val})`
//   );
//   console.log(`Your profit: ${profit}`);
// };
// buyStock(arr);
///////////////////////////////////////////////
// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// let code = 2;

// function sezarCode(message, secret) {
//   let splitInput = message.split("");
//   let newMessage = " ";
//   splitInput.forEach((elm) => {
//     if (alphabet.includes(elm)) {
//       alphabet.forEach((letter, index) => {
//         if (letter === elm) {
//           let codedIndex = index + code;
//           if (codedIndex >= alphabet.length) {
//             codedIndex = codedIndex - alphabet.length;
//           }
//           newMessage += alphabet.at(codedIndex);
//         }
//       });
//     }
//     if (elm === "," || elm === "?" || elm === " ") {
//       newMessage += elm;
//     }
//   });
//   return newMessage;
// }

// const message = "hello, bro,  how are you?";

// const secret_msg = sezarCode(message, code);

// console.log("Secret =>", secret_msg);

// setTimeout(() => {
//   code *= -1;
//   const message_encoded = sezarCode(secret_msg, code);
//   console.log("Original =>", message_encoded);
// }, 5000);

///////////////////////////////////////////////
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// let code = 2;
// function decodedMsg(message, secret) {
//   let newMessage = "";
//   let loopedStr;
//   for (let i = 0; i < message.length; i++) {
//     // console.log(message[i]);
//     for (let j = 0; j < alphabet.length; j++) {
//       // console.log(alphabet[j]);

//       if (message[i] === alphabet[j]) {
//         if (j + secret >= alphabet.length) {
//           loopedStr = j + secret - alphabet.length;
//           console.log(loopedStr);
//           // console.log(j);
//           // console.log(j + (-2));
//           newMessage += alphabet[loopedStr];
//           break;
//         }
//         if (j + secret < 0) {
//           newMessage += alphabet[alphabet.length + j + secret];
//           break;
//         } else {
//           newMessage += alphabet[j + secret];

//           break;
//         }
//       }

//       if (message[i] === "," || message[i] === "?" || message[i] === " ") {
//         newMessage += message[i];
//         break;
//       }
//     }
//   }

//   // console.log(newMessage);
//   return newMessage;
// }
// const message = "hello, bro,  how are you?";

// const secret_msg = decodedMsg(message, code);

// console.log("Secret =>", secret_msg);

// setTimeout(() => {
//   code *= -1;
//   const message_encoded = decodedMsg(secret_msg, code);
//   console.log("Original =>", message_encoded);
// }, 5000);

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// const list = [
//   "Yaxshi talaba boling", //0-20
//   "Togri boshliq tanlash va koproq xato qiling", //20-30
//   "Uzingizga ishlashni boshlang", // 30-40
//   "Siz kuchli bolgan narsalarni qiling", //40-50
//   "Yoshlarga investitsiya qiling", //50-60
//   "Endi dam oling", //60
// ];

// //Callback functions

// function maslahat(a, callback) {
//   if (typeof a !== "number") callback("Error: please insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 2000);
//   }
// }

// maslahat(25, (err, data) => {
//   if (err) console.log(err);
//   else {
//     console.log("Javob:", data);
//   }
// });

////////////////////////////////////////////
//Async functions

// async function maslahat(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) return null, list[1];
//   else if (a > 30 && a <= 40) return null, list[2];
//   else if (a > 40 && a <= 50) return null, list[3];
//   else if (a > 50 && a <= 60) return null, list[4];
//   else {
//     // return null, list[5];
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// console.log("Passed here 0");

//then/catch
// maslahat(25)
//   .then((data) => {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
//////////////////////////////////////////////////

//async/await
// async function run() {
//   let javob = await maslahat(62);
//   console.log(javob);
//   javob = await maslahat(33);
//   console.log(javob);
//   javob = await maslahat(44);
//   console.log(javob);
// }
// run();

// console.log("Passed here 1");

/** CHALLANGE: MURDER CASE */

// const magazine =
//   "Lorem kill ipsum dolor sit amet, consectetur adipiscing elit, you sed do I eiusmod tempor incididut";

// const note = "dolor kill you";

// const canMurdererWrite = (note) => {
//   const splitNote = note.split(" ");
//   const splitMagazine = magazine.split(" ");
//   const commaRemoved = splitMagazine.map((word) => {
//     return word.replace(",", "");
//   });
//   const allSame = splitNote.every((item) => {
//     return commaRemoved.includes(item);
//   });
//   return allSame;
// };
// const result = canMurdererWrite(note);
// console.log("Killer yoza oladimi:", result);
// const data = "ad5we34jkf89";
// const findDigits = (data) => {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//     if (data[+i] >= 0 && data[+i] < 1000000) {
//       console.log(+data[i]);
//     }
//     console.log(typeData);
//   }
// };
// findDigits(data);
