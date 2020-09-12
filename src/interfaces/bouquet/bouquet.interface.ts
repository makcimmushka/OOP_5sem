import { IAccessory } from "@interfaces/accessory/accessory.interface";
import { IFlower } from "@interfaces/flower/flower.interface";

export interface IBouquet {
    getFlowers(): Array<IFlower>;
    getTotalAmount(): number;
    getAccessories(): Array<IAccessory>
}