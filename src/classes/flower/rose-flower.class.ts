import { AbstractFlower } from "@classes/flower/abstract-flower.class";
import { FlowersEnum } from "@shared/enums/flowers.enum";

export class RoseFlower extends AbstractFlower {
  protected readonly _name: FlowersEnum = FlowersEnum.Rose;
  protected readonly _worth: number = 30;

  constructor() {
    super();
  }
}
