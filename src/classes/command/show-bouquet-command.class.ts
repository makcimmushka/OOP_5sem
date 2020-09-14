import { Bouquet } from "../bouquet/bouquet.class";
import { ICommand } from "../../interfaces/command/command.interface";

export class ShowBouquetCommand implements ICommand {
  private readonly bouquet: Bouquet;

  constructor(bouquet: Bouquet) {
    this.bouquet = bouquet;
  }

  execute(): void {
    const flowers = this.bouquet.getFlowers();
    const accessories = this.bouquet.getAccessories();
    const totalWorth = this.bouquet.calculateTotalWorth();

    console.log("Flowers:");

    for (let flower of flowers) {
      console.log("Name:", flower.name);
      console.log("Worth:", flower.worth.toFixed(2));
      console.log("Date:", flower.date);
      console.log("Stem length:", flower.stemLength.toFixed(2));
      console.log("------------------------------");
    }

    console.log("\nAccessories:");

    for (let accessory of accessories) {
      console.log("Name:", accessory.name);
      console.log("Worth:", accessory.worth.toFixed(2));
      console.log("------------------------------");
    }

    console.log("\nTotal worth:");

    console.log(`${totalWorth}\n`);
  }
}
