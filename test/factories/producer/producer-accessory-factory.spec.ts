import { expect } from "chai";

import {
  PinsAccessoryFactory,
  SparklesAccessoryFactory,
  WrapperAccessoryFactory,
} from "../../../src/classes/factories/accessory";
import { ProducerAccessoryFactory } from "../../../src/classes/factories/producer/producer-accessory-factory.class";
import { AccessoriesEnum } from "../../../src/shared/enums/accessories.enum";

describe("ProducerAccessoryFactory tests", function () {
  const producerAccessoryFactory = new ProducerAccessoryFactory();

  it("ProducerAccessoryFactory should return PinsAccessoryFactory on 'Pins' input", function () {
    const expectedPinsAccessoryFactory = producerAccessoryFactory.getAccessoryFactory(
      AccessoriesEnum.Pins
    );
    expect(
      expectedPinsAccessoryFactory instanceof PinsAccessoryFactory
    ).to.be.equal(true);
  });

  it("ProducerAccessoryFactory should return SparklesAccessoryFactory on 'Sparkles' input", function () {
    const expectedSparklesAccessoryFactory = producerAccessoryFactory.getAccessoryFactory(
      AccessoriesEnum.Sparkles
    );
    expect(
      expectedSparklesAccessoryFactory instanceof SparklesAccessoryFactory
    ).to.be.equal(true);
  });

  it("ProducerAccessoryFactory should return WrapperAccessoryFactory on 'Wrapper' input", function () {
    const expectedWrapperAccessoryFactory = producerAccessoryFactory.getAccessoryFactory(
      AccessoriesEnum.Wrapper
    );
    expect(
      expectedWrapperAccessoryFactory instanceof WrapperAccessoryFactory
    ).to.be.equal(true);
  });

  it("ProducerAccessoryFactory should throw error on uncorrect input", function () {
    expect(() =>
      producerAccessoryFactory.getAccessoryFactory("not_correct_input")
    ).to.throw(Error);
  });
});
