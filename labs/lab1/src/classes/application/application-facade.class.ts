const prompt = require("prompt-sync")();

import { isCommandValid } from "../../shared/utils/validation/validators.util";
import { CommandSelector } from "../command";

export class ApplicationFacade {
  private readonly commandSelector: CommandSelector = new CommandSelector();

  start(): void {
    this.commandSelector.select("1"); /* Print instructions */

    while (true) {
      console.log("");

      const command = Number(prompt("Enter your command: ").trim());

      console.log("");

      if (isCommandValid(command)) {
        this.commandSelector.select(command.toString());
      } else {
        console.log("Uncorrect command! Try again!");
      }
    }
  }
}
