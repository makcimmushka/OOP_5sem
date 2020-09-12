import { AccessoriesEnum } from "@shared/enums/accessories.enum";
import { AbstractAccessory } from "@classes/accessory/abstract-accessory.class";

export class PinsAccessory extends AbstractAccessory {
  protected readonly _name: AccessoriesEnum = AccessoriesEnum.Pins;
  protected readonly _worth: number = 15;

  constructor() {
    super();
  }
}
