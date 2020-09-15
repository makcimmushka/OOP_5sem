import { expect } from "chai";

import { IAccessory } from "../../src/interfaces/accessory/accessory.interface";
import { IFlower } from "../../src/interfaces/flower/flower.interface";
import { BouquetBuilder } from "../../src/classes/bouquet/bouquet-builder.class";

import {
  getRandomFlowerMock,
  getRandomAccessoryMock,
} from "../../src/shared/utils/mocks-generate";
import { Bouquet } from "../../src/classes/bouquet/bouquet.class";
import { getRandomInt } from "../../src/shared/utils/random-int.util";

describe("BouquetBuilder tests", function () {
  const bouquetBuilder = new BouquetBuilder();
  let flowerMock: IFlower;
  let accessoryMock: IAccessory;

  beforeEach(function () {
    flowerMock = getRandomFlowerMock(getRandomInt(1, 3));
    accessoryMock = getRandomAccessoryMock(getRandomInt(1, 3));
  });

  it("BouquetBuilder should create bouquet correctly", function () {
    const bouquet = bouquetBuilder.build();
    expect(bouquet instanceof Bouquet).to.be.equal(true);
  });

  it("BouquetBuilder should add flower correctly", function () {
    const bouquet = bouquetBuilder.addFlower(flowerMock).build();
    const flowers = bouquet.getFlowers();

    expect(flowers.length).to.be.equal(1);
    expect(flowers[0].name).to.be.equal(flowerMock.name);
  });

  it("BouquetBuilder should add accessory correctly", function () {
    const bouquet = bouquetBuilder.addAccessory(accessoryMock).build();
    const accessories = bouquet.getAccessories();

    expect(accessories.length).to.be.equal(1);
    expect(accessories[0].name).to.be.equal(accessoryMock.name);
  });
});
