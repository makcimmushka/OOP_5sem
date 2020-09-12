import { IFlower } from "@interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "@interfaces/flower/abstract-flower-factory.interface";
import { Tulip } from "@classes/flower/tulip.class";

export class TupilFactory implements IAbstractFlowerFactory {
  createFlower(): IFlower {
    const tulip = new Tulip();
    return tulip;
  }
}
