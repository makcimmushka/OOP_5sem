const prompt = require("prompt-sync")();

import { isStemLengthValid } from "../../shared/utils/validation/validators.util";
import { ICommand } from "../../interfaces/command/command.interface";
import { Bouquet } from "../bouquet/bouquet.class";

export class ShowFlowerByDiapazonCommand implements ICommand {
  private readonly bouquet: Bouquet;

  constructor(bouquet: Bouquet) {
    this.bouquet = bouquet;
  }

  execute(): Bouquet {
    let minimumLength = prompt("Minimum length: ").trim();
    let maximumLength = prompt("Maximum length: ").trim();

    if (
      !isStemLengthValid(minimumLength) ||
      !isStemLengthValid(maximumLength)
    ) {
      console.log("Provided uncorrect arguments! Try again!");

      minimumLength = prompt("Minimum length: ");
      maximumLength = prompt("Maximum length: ");
    }

    const flower = this.bouquet.getFlowerByStemLengthDiapazon(
      Number(minimumLength),
      Number(maximumLength)
    );

    if (flower) {
      console.log("Name:", flower.name);
      console.log("Worth:", flower.worth.toFixed(2));
      console.log("Date:", flower.date);
      console.log("Stem length:", flower.stemLength.toFixed(2));
      console.log("------------------------------");
    } else {
      console.log("Flower didn't find");
    }

    return this.bouquet;
  }
}
