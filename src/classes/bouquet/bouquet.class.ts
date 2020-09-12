import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { IBouquet } from "../../interfaces/bouquet/bouquet.interface";
import { IFlower } from "../../interfaces/flower/flower.interface";

export class Bouquet implements IBouquet {
  private flowers: Array<IFlower> = [];
  private accessories: Array<IAccessory> = [];
  private totalAmount: number = 0;

  public getFlowers(): Array<IFlower> {
    return this.flowers;
  }

  public getTotalAmount(): number {
    return this.totalAmount;
  }

  public getAccessories(): Array<IAccessory> {
    return this.accessories;
  }
}
