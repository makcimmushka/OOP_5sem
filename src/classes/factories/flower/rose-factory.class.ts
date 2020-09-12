import { IFlower } from "@interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "@interfaces/flower/abstract-flower-factory.interface";
import { Rose } from "@classes/flower/rose.class";

export class RoseFactory implements IAbstractFlowerFactory {
  createFlower(): IFlower {
    const rose = new Rose();
    return rose;
  }
}
