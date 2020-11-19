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

  public getAccessories(): Array<IAccessory> {
    return this.accessories;
  }

  public getFlowerByStemLengthDiapazon(
    minimumLength: number,
    maximumLength: number
  ): IFlower {
    const flower = this.flowers.find(
      (flower) =>
        flower.stemLength >= minimumLength && flower.stemLength <= maximumLength
    );

    return flower;
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

  public sortFlowersByDate(): Array<IFlower> {
    this.flowers.sort((prevFlower, nextFlower) => {
      return prevFlower.date.getTime() - nextFlower.date.getTime();
    });

    return this.flowers;
  }
}
