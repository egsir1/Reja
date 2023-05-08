console.log("This is from trains.js");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let code = 2;

function decodedMsg(message, secret) {
  const splitInput = message.split(" ");

  console.log(splitInput);
  for (let i = 0; i >= splitInput.length; i++) {
    console.log(splitInput[i]);
  }
}
const message = "hello, how are you?";

const secret_msg = decodedMsg(message, code);

// console.log("Secret =>", secret_msg);

// setTimeout(() => {
//   code *= -1;
//   const message_encoded = decodedMsg(secret_msg, code);
//   console.log("Original =>", message_encoded);
// }, 5000);
