import { IAccessory } from "../../../interfaces/accessory/accessory.interface";
import { IAbstractAccessoryFactory } from "../../../interfaces/accessory/abstract-accessory-factory.interface";
import { WrapperAccessory } from "../../../classes/accessory/wrapper-accessory.class";

export class WrapperAccessoryFactory implements IAbstractAccessoryFactory {
  createAccessory(): IAccessory {
    const wrapper = new WrapperAccessory();
    return wrapper;
  }
}
