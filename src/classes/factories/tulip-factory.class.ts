import { IFlower } from "@interfaces/flower.interface";
import { IAbstractFlowerFactory } from "@interfaces/abstract-flower-factory.interface";
import { Tulip } from "@classes/flower/tulip.class";

export class TupilFactory implements IAbstractFlowerFactory {
  create(): IFlower {
    const tulip = new Tulip();
    return tulip;
  }
}
