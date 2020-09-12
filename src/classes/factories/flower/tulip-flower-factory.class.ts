import { IFlower } from "@interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "@interfaces/flower/abstract-flower-factory.interface";
import { TulipFlower } from "@classes/flower/tulip-flower.class";

export class TulipFlowerFactory implements IAbstractFlowerFactory {
  createFlower(): IFlower {
    const tulip = new TulipFlower();
    return tulip;
  }
}
