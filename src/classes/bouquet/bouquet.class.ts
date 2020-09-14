import { brotliCompressSync } from "zlib";
import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { IFlower } from "../../interfaces/flower/flower.interface";

export class Bouquet {
  constructor(
    private flowers: Array<IFlower>,
    private accessories: Array<IAccessory>
  ) {}

  public getFlowers(): Array<IFlower> {
    return this.flowers;
  }

  public calculateTotalWorth(): number {
    const flowersWorth = this.flowers.reduce(
      (totalWorth, flower) => totalWorth + flower.worth,
      0
    );

    const accessoriesWorth = this.accessories.reduce(
      (totalWorth, accessory) => totalWorth + accessory.worth,
      0
    );

    return flowersWorth + accessoriesWorth;
  }

  public getAccessories(): Array<IAccessory> {
    return this.accessories;
  }
}
