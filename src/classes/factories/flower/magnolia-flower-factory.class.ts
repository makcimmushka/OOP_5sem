import { IFlower } from "@interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "@interfaces/flower/abstract-flower-factory.interface";
import { MagnoliaFlower } from "@classes/flower/magnolia-flower.class";

export class MagnoliaFlowerFactory implements IAbstractFlowerFactory {
  createFlower(): IFlower {
    const magnolia = new MagnoliaFlower();
    return magnolia;
  }
}
