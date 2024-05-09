#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.rgb(53, 252, 3)(`\n \t\t <<<================================>>>`));
console.log(chalk.bold.rgb(3, 152, 252)(`  \t \t      <<<Currency Converter App>>>`));
console.log(chalk.bold.rgb(53, 252, 3)(` \t\t <<<================================>>> \n`));

let condition = true;

while (condition) {
  let exchange_rate: any = {
    USD: 1,
    CAN: 1.37,
    AUS: 1.52,
    PKR: 278.7,
    UAE: 3.67,
  };

  let user_answer = await inquirer.prompt([
    {
      name: "from_currency",
      type: "list",
      message: "Select the currency to convert from : ",
      choices: ["USD", "CAN", "AUS", "PKR", "UAE"],
    },
    {
      name: "to_currency",
      type: "list",
      message: "Select the currency to convert into : ",
      choices: ["USD", "CAN", "AUS", "PKR", "UAE"],
    },
    {
      name: "amount",
      type: "input",
      message: "Enter the amount tor convert : ",
    },
  ]);

  let from_amount = exchange_rate[user_answer.from_currency];
  let to_amount = exchange_rate[user_answer.to_currency];
  let amount = user_answer.amount;

  let base_amount = amount / from_amount;
  let converted_amount = base_amount * to_amount;

  if (converted_amount) {
    console.log(
      `Converted amount = ${chalk.green.bold(converted_amount.toFixed(2))}`
    );
    let cond = await inquirer.prompt([
      {
        name: "addmore",
        type: "confirm",
        message: "Do you Want to add more ?",
        default: "false",
      },
    ]);
    condition = cond.addmore;
  } else {
    console.log(chalk.red.bold("Please enter a amount in numbers"));
  }
}

console.log(chalk.bold.rgb(53, 252, 3)(`\n \t\t <<<================================>>>`));
console.log(chalk.bold.rgb(3, 152, 252)(`  \t \t        <<<Thanks For Coming>>>`));
console.log(chalk.bold.rgb(53, 252, 3)(` \t\t <<<================================>>> \n`));
