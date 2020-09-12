import { AbstractFlower } from "@classes/flower/abstract-flower.class";
import { FlowersEnum } from "@shared/enums/flowers.enum";

export class TulipFlower extends AbstractFlower {
  protected readonly _name: FlowersEnum = FlowersEnum.Tulip;
  protected readonly _worth: number = 20;

  constructor() {
    super();
  }
}
