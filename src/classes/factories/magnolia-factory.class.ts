import { IFlower } from "@interfaces/flower.interface";
import { IAbstractFlowerFactory } from "@interfaces/abstract-flower-factory.interface";
import { Magnolia } from "@classes/flower/magnolia.class";

export class MagnoliaFactory implements IAbstractFlowerFactory {
  create(): IFlower {
    const magnolia = new Magnolia();
    return magnolia;
  }
}
