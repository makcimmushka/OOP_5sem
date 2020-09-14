import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { IFlower } from "../../interfaces/flower/flower.interface";
import { IView } from "../../interfaces/application/view.interface";

export class View implements IView {
  public printCommands(): void {
    console.log("1. Show bouquet");
    console.log("2. Show prices for flowers and accessories");
    console.log("3. Add flower to bouquet");
    console.log("4. Add accessory to bouquet");
    console.log("5. Delete flower from bouquet");
    console.log("6. Delete accessory from bouquet");
    console.log("7. Show commands");
    console.log("8. Exit");
  }

  public printFlowers(
    rosesAmount: number,
    magnoliasAmount: number,
    tulipsAmount: number
  ): void {
    console.log("Bouquet flowers :");

    console.log(`Roses : ${rosesAmount}`);
    console.log(`Magnolias : ${magnoliasAmount}`);
    console.log(`Tulips : ${tulipsAmount}\n`);
  }

  public printAccessories(
    pinsAmount: number,
    sparklesAmount: number,
    wrappersAmount: number
  ): void {
    console.log("Bouquet accessories :");

    console.log(`Pins : ${pinsAmount}`);
    console.log(`Sparkles : ${sparklesAmount}`);
    console.log(`Wrappers : ${wrappersAmount}\n`);
  }

  public printTotalWorth(totalWorth: number): void {
    console.log(`Bouquet total worth : ${totalWorth}\n`);
  }

  public printPrices(
    allFlowers: Array<IFlower>,
    allAccessories: Array<IAccessory>
  ): void {
    console.log("Flowers: ");

    for (let flower of allFlowers) {
      console.log(`${flower.name} - ${flower.worth}`);
    }

    console.log("Accessories: ");

    for (let accessory of allAccessories) {
      console.log(`${accessory.name} - ${accessory.worth}`);
    }
  }
}
