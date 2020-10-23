import { IFlower } from "../../../interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "../../../interfaces/factory/abstract-flower-factory.interface";
import { RoseFlower } from "../../../classes/flower/rose-flower.class";

export class RoseFlowerFactory implements IAbstractFlowerFactory {
  createFlower(stemLength: number): IFlower {
    const rose = new RoseFlower(stemLength);
    return rose;
  }
}
