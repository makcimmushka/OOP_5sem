import { IFlower } from "@interfaces/flower.interface";

export interface IAbstractFlowerFactory {
  create(): IFlower;
}
