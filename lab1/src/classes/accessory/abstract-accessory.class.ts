import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { AccessoriesEnum } from "../../shared/enums/accessories.enum";

export abstract class AbstractAccessory implements IAccessory {
  protected readonly _name: AccessoriesEnum;
  protected readonly _worth: number;

  get name(): AccessoriesEnum {
    return this._name;
  }

  get worth(): number {
    return this._worth;
  }
}
