import { expect } from "chai";

import { Bouquet } from "../../src/classes/bouquet/bouquet.class";
import { IAccessory } from "../../src/interfaces/accessory/accessory.interface";
import { IFlower } from "../../src/interfaces/flower/flower.interface";
import { getRandomInt } from "../../src/shared/utils/random-int.util";
import { getRandomAccessoryMock, getRandomFlowerMock } from "./data/mocks";

describe("Bouquet tests", function () {
  let flowersMocks: IFlower[] = [];
  let accessoriesMocks: IAccessory[] = [];
  let testingBouquet: Bouquet;

  beforeEach(function () {
    flowersMocks = [];
    accessoriesMocks = [];

    for (let i = 0; i < 5; i++) {
      flowersMocks.push(getRandomFlowerMock());
      accessoriesMocks.push(getRandomAccessoryMock());
    }

    testingBouquet = new Bouquet(flowersMocks, accessoriesMocks);
  });

  it("Bouquet should return flower by existing stemLength criteria", function () {
    const randomIndex = getRandomInt(1, 5);

    const searchedFlower = testingBouquet.getFlowerByStemLengthDiapazon(
      flowersMocks[randomIndex].stemLength - 1,
      flowersMocks[randomIndex].stemLength + 1
    );

    expect(searchedFlower).to.be.not.equal(undefined);
    expect(searchedFlower).to.be.deep.equal(flowersMocks[randomIndex]);
  });

  it("Bouquet should return undefined by not existing stemLength criteria", function () {
    const searchedFlower = testingBouquet.getFlowerByStemLengthDiapazon(
      -1000,
      -999
    );

    expect(searchedFlower).to.be.equal(undefined);
  });

  it("Bouquet should calculate total worth correctly", function () {
    const flowersMocksWorth = flowersMocks.reduce(
      (totalWorth, flowerMock) => totalWorth + flowerMock.worth,
      0
    );

    const accessoriesMocksWorth = accessoriesMocks.reduce(
      (totalWorth, accessoryMock) => totalWorth + accessoryMock.worth,
      0
    );

    expect(testingBouquet.calculateTotalWorth()).to.be.equal(
      flowersMocksWorth + accessoriesMocksWorth
    );
  });

  it("Bouquet should sort flowers by date correctly", function () {
    const sortedFlowers = testingBouquet.sortFlowersByDate();
    const flowersDates = sortedFlowers.map((flower) => flower.date.getTime());
    let isSorted = true;

    for (let i = 0; i < flowersDates.length - 1; i++) {
      if (flowersDates[i] > flowersDates[i + 1]) {
        isSorted = false;
      }
    }

    expect(isSorted).to.be.equal(true);
  });
});
