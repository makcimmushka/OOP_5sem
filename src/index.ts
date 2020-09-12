import { PinsAccessory } from "./classes/accessory/pins-accessory.class";
import { PinsAccessoryFactory } from "./classes/factories/accessory/pins-accessory-factory.class";

const pinsAccessoryFactory = new PinsAccessoryFactory();
const createdPinsAccessory = pinsAccessoryFactory.createAccessory();

console.log(createdPinsAccessory instanceof PinsAccessory);
