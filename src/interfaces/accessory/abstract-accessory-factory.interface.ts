import { IAccessory } from "../../interfaces/accessory/accessory.interface";

export interface IAbstractAccessoryFactory {
  createAccessory(): IAccessory;
}
