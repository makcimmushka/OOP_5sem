import { expect } from "chai";

import {
  PinsAccessory,
  SparklesAccessory,
  WrapperAccessory,
} from "../../../src/classes/accessory";
import {
  PinsAccessoryFactory,
  SparklesAccessoryFactory,
  WrapperAccessoryFactory,
} from "../../../src/classes/factories/accessory";
import {
  pinsAccessoryMock,
  wrapperAccessoryMock,
  sparklesAccessoryMock,
} from "./data/mocks";

describe("Accessories factories tests", function () {
  it("PinsAccessoryFactory should create Pins instance", function () {
    const pinsAccessoryFactory = new PinsAccessoryFactory();
    const createdPinsAccessory = pinsAccessoryFactory.createAccessory();

    expect(createdPinsAccessory instanceof PinsAccessory).to.be.equal(true);
    expect(createdPinsAccessory.name).to.be.equal(pinsAccessoryMock.name);
    expect(createdPinsAccessory.worth).to.be.equal(pinsAccessoryMock.worth);
  });

  it("SparklesAccessoryFactory should create Sparkles instance", function () {
    const sparklesAccessoryFactory = new SparklesAccessoryFactory();
    const createdSparklesAccessory = sparklesAccessoryFactory.createAccessory();

    expect(createdSparklesAccessory instanceof SparklesAccessory).to.be.equal(
      true
    );

    expect(createdSparklesAccessory.name).to.be.equal(
      sparklesAccessoryMock.name
    );

    expect(createdSparklesAccessory.worth).to.be.equal(
      sparklesAccessoryMock.worth
    );
  });

  it("WrapperAccessoryFactory should create Wrapper instance", function () {
    const wrapperAccessoryFactory = new WrapperAccessoryFactory();
    const createdWrapperAccessory = wrapperAccessoryFactory.createAccessory();

    expect(createdWrapperAccessory instanceof WrapperAccessory).to.be.equal(
      true
    );

    expect(createdWrapperAccessory.name).to.be.equal(
      wrapperAccessoryMock.name
    );

    expect(createdWrapperAccessory.worth).to.be.equal(
      wrapperAccessoryMock.worth
    );
  });

});
