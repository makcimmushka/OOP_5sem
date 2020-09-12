import { IFlower } from "../../../interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "../../../interfaces/flower/abstract-flower-factory.interface";
import { RoseFlower } from "../../../classes/flower/rose-flower.class";

export class RoseFlowerFactory implements IAbstractFlowerFactory {
  createFlower(): IFlower {
    const rose = new RoseFlower();
    return rose;
  }
}
