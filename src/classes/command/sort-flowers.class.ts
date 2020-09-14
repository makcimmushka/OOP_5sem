import { ICommand } from "../../interfaces/command/command.interface";
import { Bouquet } from "../bouquet/bouquet.class";

export class SortFlowersCommand implements ICommand {
  private readonly bouquet: Bouquet;

  constructor(bouquet: Bouquet) {
    this.bouquet = bouquet;
  }

  execute(): Bouquet {
    this.bouquet.sortFlowersByDate();
    console.log("Sorted");

    return this.bouquet;
  }
}
