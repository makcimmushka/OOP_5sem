import { IAccessory } from "../../../interfaces/accessory/accessory.interface";
import { IAbstractAccessoryFactory } from "../../../interfaces/factory/abstract-accessory-factory.interface";
import { SparklesAccessory } from "../../../classes/accessory/sparkles-accessory.class";

export class SparklesAccessoryFactory implements IAbstractAccessoryFactory {
  createAccessory(): IAccessory {
    const sparkles = new SparklesAccessory();
    return sparkles;
  }
}
