import { AbstractFlower } from "@classes/flower/abstract-flower.class";
import { FlowersEnum } from "@shared/enums/flowers.enum";

export class Rose extends AbstractFlower {
  protected readonly _name: string = FlowersEnum.Rose;
  protected readonly _worth: number = 30;

  constructor() {
    super();
  }
}
