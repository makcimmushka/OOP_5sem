import { IFlower } from "../../interfaces/flower/flower.interface";

export interface IAbstractFlowerFactory {
  createFlower(stemLength: number): IFlower;
}
