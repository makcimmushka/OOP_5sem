import { IFlower } from "../../../interfaces/flower/flower.interface";
import { IAbstractFlowerFactory } from "../../../interfaces/factory/abstract-flower-factory.interface";
import { TulipFlower } from "../../../classes/flower/tulip-flower.class";

export class TulipFlowerFactory implements IAbstractFlowerFactory {
  createFlower(stemLength: number): IFlower {
    const tulip = new TulipFlower(stemLength);
    return tulip;
  }
}
