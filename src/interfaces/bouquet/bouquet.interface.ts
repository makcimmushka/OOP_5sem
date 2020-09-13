import { AccessoriesEnum } from "src/shared/enums/accessories.enum";
import { FlowersEnum } from "src/shared/enums/flowers.enum";
import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { IFlower } from "../../interfaces/flower/flower.interface";

export interface IBouquet {
  getFlowers(): Array<IFlower>;
  getTotalWorth(): number;
  getAccessories(): Array<IAccessory>;
  addAccessory(accessory: IAccessory): void;
  addFlower(flower: IFlower): void;
  deleteAccessory(accessoryName: AccessoriesEnum): void;
  deleteFlower(flowerName: FlowersEnum): void;
}
