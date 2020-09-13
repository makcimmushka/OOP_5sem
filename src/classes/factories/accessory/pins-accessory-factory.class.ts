import { IAccessory } from "../../../interfaces/accessory/accessory.interface";
import { IAbstractAccessoryFactory } from "../../../interfaces/factory/abstract-accessory-factory.interface";
import { PinsAccessory } from "../../../classes/accessory/pins-accessory.class";

export class PinsAccessoryFactory implements IAbstractAccessoryFactory {
  createAccessory(): IAccessory {
    const pins = new PinsAccessory();
    return pins;
  }
}
