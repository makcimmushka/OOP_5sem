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

  public addAccessory(accessory: IAccessory): boolean {
    this.accessories.push(accessory);
    return true;
  }

  public addFlower(flower: IFlower): boolean {
    this.flowers.push(flower);
    return true;
  }

  public deleteAccessory(accessoryName: AccessoriesEnum): boolean {
    const searchedAccessoryIndex = this.accessories.findIndex(
      (accessory) => accessory.name == accessoryName
    );

    if (searchedAccessoryIndex >= 0) {
      this.accessories.splice(searchedAccessoryIndex, 1);
      return true;
    }

    return false;
  }

  public deleteFlower(flowerName: FlowersEnum): boolean {
    const searchedFlowerIndex = this.flowers.findIndex(
      (flower) => flower.name == flowerName
    );

    if (searchedFlowerIndex >= 0) {
      this.flowers.splice(searchedFlowerIndex, 1);
      return true;
    }

    return false;
  }
}
