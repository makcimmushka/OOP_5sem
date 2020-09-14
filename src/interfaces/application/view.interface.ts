import { IAccessory } from "../accessory/accessory.interface";
import { IFlower } from "../flower/flower.interface";

export interface IView {
  printCommands(): void;
  printPrices(flowers: Array<IFlower>, accessories: Array<IAccessory>): void;
  printFlowers(
    rosesAmount: number,
    magnoliasAmount: number,
    tulipsAmount: number
  ): void;
  printAccessories(
    pinsAmount: number,
    sparklesAmount: number,
    wrappersAmount: number
  ): void;
  printTotalWorth(totalWorth: number): void;
}
