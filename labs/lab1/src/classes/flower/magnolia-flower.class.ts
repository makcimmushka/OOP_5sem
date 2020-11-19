import { AbstractFlower } from "../../classes/flower/abstract-flower.class";
import { FlowersEnum } from "../../shared/enums/flowers.enum";

export class MagnoliaFlower extends AbstractFlower {
  protected readonly _name: FlowersEnum = FlowersEnum.Magnolia;
  protected readonly _worth: number;

  constructor(stemLength: number) {
    super(stemLength);
    this._worth = stemLength * 10;
  }
}
