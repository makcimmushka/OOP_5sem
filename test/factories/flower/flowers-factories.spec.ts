import { expect } from "chai";

import {
  magnoliaFlowerMock,
  roseFlowerMock,
  tulipFlowerMock,
} from "./data/mocks";
import {
  MagnoliaFlower,
  RoseFlower,
  TulipFlower,
} from "../../../src/classes/flower";
import {
  MagnoliaFlowerFactory,
  RoseFlowerFactory,
  TulipFlowerFactory,
} from "../../../src/classes/factories/flower";

describe("Flowers factories tests", function () {
  it("MagnoliaFlowerFactory should create Magnolia instance", function () {
    const magnoliaFlowerFactory = new MagnoliaFlowerFactory();
    const createdMagnoliaFlower = magnoliaFlowerFactory.createFlower();

    expect(createdMagnoliaFlower instanceof MagnoliaFlower).to.be.equal(true);
    expect(createdMagnoliaFlower.name).to.be.equal(magnoliaFlowerMock.name);
    expect(createdMagnoliaFlower.worth).to.be.equal(magnoliaFlowerMock.worth);
  });

  it("RoseFlowerFactory should create Rose instance", function () {
    const roseFlowerFactory = new RoseFlowerFactory();
    const createdRoseFlower = roseFlowerFactory.createFlower();

    expect(createdRoseFlower instanceof RoseFlower).to.be.equal(true);
    expect(createdRoseFlower.name).to.be.equal(roseFlowerMock.name);
    expect(createdRoseFlower.worth).to.be.equal(roseFlowerMock.worth);
  });

  it("TulipFlowerFactory should create Tulip instance", function () {
    const tulipFlowerFactory = new TulipFlowerFactory();
    const createdTulipFlower = tulipFlowerFactory.createFlower();

    expect(createdTulipFlower instanceof TulipFlower).to.be.equal(true);
    expect(createdTulipFlower.name).to.be.equal(tulipFlowerMock.name);
    expect(createdTulipFlower.worth).to.be.equal(tulipFlowerMock.worth);
  });
});
