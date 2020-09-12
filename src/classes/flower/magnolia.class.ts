import { AbstractFlower } from "@classes/flower/abstract-flower.class";
import { FlowersEnum } from "@shared/enums/flowers.enum";

export class Magnolia extends AbstractFlower {
  protected readonly _name: FlowersEnum = FlowersEnum.Magnolia;
  protected readonly _worth: number = 10;

  constructor() {
    super();
  }
}