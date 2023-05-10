console.log("Lack Ma maslahatlari");

const list = [
  "Yaxshi talaba boling", //0-20
  "Togri boshliq tanlash va koproq xato qiling", //20-30
  "Uzingizga ishlashni boshlang", // 30-40
  "Siz kuchli bolgan narsalarni qiling", //40-50
  "Yoshlarga investitsiya qiling", //50-60
  "Endi dam oling", //60
];

//Callback functions

function maslahat(a, callback) {
  if (typeof a !== "number") callback("Error: please insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(() => {
      callback(null, list[5]);
    }, 2000);
  }
}

maslahat(25, (err, data) => {
  if (err) console.log(err);
  else {
    console.log("Javob:", data);
  }
});

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

console.log("Passed here 0");

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

console.log("Passed here 1");

// console.log("This is from trains.js");
