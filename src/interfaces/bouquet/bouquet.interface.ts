import { AccessoriesEnum } from "src/shared/enums/accessories.enum";
import { FlowersEnum } from "src/shared/enums/flowers.enum";
import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { IFlower } from "../../interfaces/flower/flower.interface";

export interface IBouquet {
  getFlowers(): Array<IFlower>;
  getTotalWorth(): number;
  getAccessories(): Array<IAccessory>;
  addAccessory(accessory: IAccessory): boolean;
  addFlower(flower: IFlower): boolean;
  deleteAccessory(accessoryName: AccessoriesEnum): boolean;
  deleteFlower(flowerName: FlowersEnum): boolean;
}
