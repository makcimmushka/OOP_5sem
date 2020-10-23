import { expect } from "chai";

import { ProducerFlowerFactory } from "../../../src/classes/factories/producer/producer-flower-factory.class";
import {
  MagnoliaFlowerFactory,
  RoseFlowerFactory,
  TulipFlowerFactory,
} from "../../../src/classes/factories/flower";
import { FlowersEnum } from "../../../src/shared/enums/flowers.enum";

describe("ProducerFlowerFactory tests", function () {
  const producerFlowerFactory = new ProducerFlowerFactory();

  it("ProducerFlowerFactory should return RoseFlowerFactory on 'Rose' input", function () {
    const expectedRoseFlowerFactory = producerFlowerFactory.getFlowerFactory(
      FlowersEnum.Rose
    );
    expect(expectedRoseFlowerFactory instanceof RoseFlowerFactory).to.be.equal(
      true
    );
  });

  it("ProducerFlowerFactory should return MagnoliaFlowerFactory on 'Magnolia' input", function () {
    const expectedMagnoliaFlowerFactory = producerFlowerFactory.getFlowerFactory(
      FlowersEnum.Magnolia
    );
    expect(
      expectedMagnoliaFlowerFactory instanceof MagnoliaFlowerFactory
    ).to.be.equal(true);
  });

  it("ProducerFlowerFactory should return TulipFlowerFactory on 'Tulip' input", function () {
    const expectedTulipFlowerFactory = producerFlowerFactory.getFlowerFactory(
      FlowersEnum.Tulip
    );
    expect(expectedTulipFlowerFactory instanceof TulipFlowerFactory).to.be.equal(
      true
    );
  });

  it("ProducerFlowerFactory should throw error on uncorrect input", function () {
    expect(() =>
      producerFlowerFactory.getFlowerFactory("not_correct_input")
    ).to.throw(Error);
  });
});
