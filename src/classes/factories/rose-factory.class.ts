import { IFlower } from "@interfaces/flower.interface";
import { IAbstractFlowerFactory } from "@interfaces/abstract-flower-factory.interface";
import { Rose } from "@classes/flower/rose.class";

export class RoseFactory implements IAbstractFlowerFactory {
  create(): IFlower {
    const rose = new Rose();
    return rose;
  }
}
