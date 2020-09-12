import { IFlower } from "@interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "@interfaces/flower/abstract-flower-factory.interface";
import { Magnolia } from "@classes/flower/magnolia.class";

export class MagnoliaFactory implements IAbstractFlowerFactory {
  createFlower(): IFlower {
    const magnolia = new Magnolia();
    return magnolia;
  }
}
