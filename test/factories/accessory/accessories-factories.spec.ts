import { expect } from "chai";

import { PinsAccessory } from "../../../src/classes/accessory/pins-accessory.class";
import { PinsAccessoryFactory } from "../../../src/classes/factories/accessory/pins-accessory-factory.class";

describe("Accessories factories tests", function () {
  it("PinsAccessoryFactory should create Pins instance", function () {
    const pinsAccessoryFactory = new PinsAccessoryFactory();
    const createdPinsAccessory = pinsAccessoryFactory.createAccessory();

    console.log(createdPinsAccessory.name);

    expect(createdPinsAccessory instanceof PinsAccessory).to.be.equal(true);
  });
});
