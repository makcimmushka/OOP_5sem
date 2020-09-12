import { AccessoriesEnum } from "@shared/enums/accessories.enum";
import { AbstractAccessory } from "@classes/accessory/abstract-accessory.class";

export class SparklesAccessory extends AbstractAccessory {
  protected readonly _name: AccessoriesEnum = AccessoriesEnum.Sparkles;
  protected readonly _worth: number = 5;

  constructor() {
    super();
  }
}
