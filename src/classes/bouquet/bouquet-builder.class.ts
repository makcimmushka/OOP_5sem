import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { IFlower } from "../../interfaces/flower/flower.interface";
import { Bouquet } from "./bouquet.class";

export class BouquetBuilder {
  constructor(
    private flowers: Array<IFlower> = [],
    private accessories: Array<IAccessory> = []
  ) {}

  public addFlower(flower: IFlower) {
    this.flowers.push(flower);
    return this;
  }

  public addAccessory(accessory: IAccessory) {
    this.accessories.push(accessory);
    return this;
  }

  public build() {
    const bouquet = new Bouquet(this.flowers, this.accessories);
    return bouquet;
  }
}
