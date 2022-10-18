import promptSync from "prompt-sync";
const prompt = promptSync();
const atmDB = [
  {
    id: 1,
    pin: 1234,
    name: "Ghulam Ghaus",
    account: "Islamic Account",
    balance: 10000,
    username: "ghaus",
    email: "ghaus@gmail.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    pin: 1234,
    name: "Ervin Howell",
    account: "Current Account",
    balance: 20000,
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

const atmOprations = {
  0: "withdraw",
  1: "Tranfer",
  2: "Cancel",
};

// use [ghaus] as USERNAME or change accordingly
let userName = prompt("Enter Username:");
let user;
for (let i = 0; i < atmDB.length; i++) {
  if (userName === atmDB[i]["username"]) {
    user = atmDB[i];
  }
}
if (user) {
  console.log(`Welcome ${user.name}`);
  // use [1234] as PIN or change accordingly
  let pin: number = parseInt(prompt("Enter your PIN: "));
  if (pin === user?.pin) {
    console.log(`Welcome ${user.username} your account is ready to use!`);
    console.log(`Account Type: ${user.account}`);
    console.log(`Account Title: ${user.name}`);
    console.log(`Balance: ${user.balance}`);
    console.log(`Phone#: ${user.phone}`);
    console.log(user);

    console.log(atmOprations);
    let operation = parseInt(prompt(`Select Opration: `));
    switch (operation) {
      case 0:
        let op = parseInt(
          prompt(`Select Amount: 1: 1000 5: 5000 0: Other Amount`)
        );
        switch (op) {
          case 0:
            let amt: any = parseInt(prompt(`Enter Amount of multiple 5: `));
            if (user.balance > amt) {
              if (amt % 5 == 0) {
                console.log(`Your Withdraw amount is ${amt}`);
                console.log(
                  `Your Balance is ${(user.balance = user.balance - amt)}`
                );
                console.log("Thank you for visiting Us!");
              } else {
                console.log(`Your amount must be a multiple of 5! Try again!`);
              }
            } else {
              console.log(`You dont have enogh amount!`);
            }
            break;
          case 1:
            let amt1 = 1000;
            if (user.balance > amt1) {
              console.log(`Your Withdraw amount is ${amt1}`);
              console.log(
                `Your Balance is ${(user.balance = user.balance - amt1)}`
              );
              console.log("Thank you for visiting Us!");
            } else {
              console.log(`You dont have enogh amount!`);
            }
            break;
          case 2:
            let amt5 = 5000;
            if (user.balance > amt5) {
              console.log(`Your Withdraw amount is ${amt5}`);
              console.log(
                `Your Balance is ${(user.balance = user.balance - amt5)}`
              );
              console.log("Thank you for visiting Us!");
            } else {
              console.log(`You dont have enogh amount!`);
            }
            break;
        }
        break;

      case 1:
        let amt: any = parseInt(prompt(`Enter Amount to transfer: `));
        if (user.balance > amt) {
          console.log(`Your transfer amount is ${amt}`);
          console.log(`Your Balance is ${(user.balance = user.balance - amt)}`);
          console.log("Transaction Copmleted!");
        }
        console.log(`You dont have enogh amount!`);
        break;

      case 3:
        console.log("Allah Hafiz!");
        break;
      default:
        console.log("Input not Valid please Select valid number!");
        break;
    }
  } else {
    console.log("Wrong Pin! Becarefull you have Three tries left!");
  }
} else {
  console.log(`User Not Found!`);
}
