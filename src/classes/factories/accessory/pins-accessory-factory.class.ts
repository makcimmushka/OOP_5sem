import { IAccessory } from "@interfaces/accessory/accessory.interface";
import { IAbstractAccessoryFactory } from "@interfaces/accessory/abstract-accessory-factory.interface";
import { PinsAccessory } from "@classes/accessory/pins-accessory.class";

export class PinsAccessoryFactory implements IAbstractAccessoryFactory {
  createAccessory(): IAccessory {
    const pins = new PinsAccessory();
    return pins;
  }
}
