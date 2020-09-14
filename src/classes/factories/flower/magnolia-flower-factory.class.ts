import { IFlower } from "../../../interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "../../../interfaces/factory/abstract-flower-factory.interface";
import { MagnoliaFlower } from "../../../classes/flower/magnolia-flower.class";

export class MagnoliaFlowerFactory implements IAbstractFlowerFactory {
  createFlower(stemLength: number): IFlower {
    const magnolia = new MagnoliaFlower(stemLength);
    return magnolia;
  }
}
