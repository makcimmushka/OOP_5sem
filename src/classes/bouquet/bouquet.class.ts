import { AccessoriesEnum } from "src/shared/enums/accessories.enum";
import { FlowersEnum } from "src/shared/enums/flowers.enum";
import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { IBouquet } from "../../interfaces/bouquet/bouquet.interface";
import { IFlower } from "../../interfaces/flower/flower.interface";

export class Bouquet implements IBouquet {
  private static instance: Bouquet;

  private flowers: Array<IFlower> = [];
  private accessories: Array<IAccessory> = [];
  private totalWorth: number = 0;

  private constructor() {}

  public static getInstance(): Bouquet {
    if (!Bouquet.instance) {
      Bouquet.instance = new Bouquet();
    }

    return Bouquet.instance;
  }

  public getFlowers(): Array<IFlower> {
    return this.flowers;
  }

  public getTotalWorth(): number {
    return this.totalWorth;
  }

  public getAccessories(): Array<IAccessory> {
    return this.accessories;
  }

  public addAccessory(accessory: IAccessory): void {
    this.accessories.push(accessory);
  }

  public addFlower(flower: IFlower): void {
    this.flowers.push(flower);
  }

  public deleteAccessory(accessoryName: AccessoriesEnum): void {
    const searchedAccessoryIndex = this.accessories.findIndex(
      (accessory) => accessory.name == accessoryName
    );

    if (searchedAccessoryIndex >= 0) {
      this.accessories.splice(searchedAccessoryIndex, 1);
    }
  }

  public deleteFlower(flowerName: FlowersEnum): void {
    const searchedFlowerIndex = this.flowers.findIndex(
      (flower) => flower.name == flowerName
    );

    if (searchedFlowerIndex >= 0) {
      this.flowers.splice(searchedFlowerIndex, 1);
    }
  }
}
