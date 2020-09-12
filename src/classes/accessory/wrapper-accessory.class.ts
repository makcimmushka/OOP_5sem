import { AccessoriesEnum } from "@shared/enums/accessories.enum";
import { AbstractAccessory } from "@classes/accessory/abstract-accessory.class";

export class WrapperAccessory extends AbstractAccessory {
  protected readonly _name: AccessoriesEnum = AccessoriesEnum.Wrapper;
  protected readonly _worth: number = 10;

  constructor() {
    super();
  }
}
