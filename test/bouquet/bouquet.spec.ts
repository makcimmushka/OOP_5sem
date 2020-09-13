import { expect } from "chai";

import { Bouquet } from "../../src/classes/bouquet/bouquet.class";
import { getRandomFlowerMock, getRandomAccessoryMock } from "./data/mocks";

describe("Bouquet class tests", function () {
  const testingBouquet = Bouquet.getInstance();
  const flowerMock = getRandomFlowerMock();
  const accessoryMock = getRandomAccessoryMock();

  it("Bouquet class should be a singleton", function () {
    const firstBouquetInstance = Bouquet.getInstance();
    const secondBouquetInstance = Bouquet.getInstance();

    expect(firstBouquetInstance).to.be.equal(secondBouquetInstance);
  });

  it("Bouquet class should add flower correctly", function () {
    const oldFlowersAmount = testingBouquet.getFlowers().length;
    const isAdded = testingBouquet.addFlower(flowerMock);

    const newFlowersAmount = testingBouquet.getFlowers().length;

    expect(oldFlowersAmount + 1).to.be.equal(newFlowersAmount);
    expect(isAdded).to.be.equal(true);
  });

  it("Bouquet class should delete existing flower", function () {
    const oldFlowersAmount = testingBouquet.getFlowers().length;
    const isDeleted = testingBouquet.deleteFlower(flowerMock.name);

    const newFlowersAmount = testingBouquet.getFlowers().length;

    expect(oldFlowersAmount - 1).to.be.equal(newFlowersAmount);
    expect(isDeleted).to.be.equal(true);
  });

  it("Bouquet class shouldn't delete not existing flower", function () {
    const notExistingFlowerMock = getRandomFlowerMock();
    const oldFlowersAmount = testingBouquet.getFlowers().length;
    const isDeleted = testingBouquet.deleteFlower(notExistingFlowerMock.name);

    const newFlowersAmount = testingBouquet.getFlowers().length;

    expect(oldFlowersAmount).to.be.equal(newFlowersAmount);
    expect(isDeleted).to.be.equal(false);
  });

  it("Bouquet class should add accessory", function () {
    const oldAccessoriesAmount = testingBouquet.getAccessories().length;
    const isAdded = testingBouquet.addAccessory(accessoryMock);

    const newAccessoriesAmount = testingBouquet.getAccessories().length;

    expect(oldAccessoriesAmount + 1).to.be.equal(newAccessoriesAmount);
    expect(isAdded).to.be.equal(true);
  });

  it("Bouquet class should delete existing accessory", function () {
    const oldAccessoriesAmount = testingBouquet.getAccessories().length;
    const isDeleted = testingBouquet.deleteAccessory(accessoryMock.name);

    const newAccessoriesAmount = testingBouquet.getAccessories().length;

    expect(oldAccessoriesAmount - 1).to.be.equal(newAccessoriesAmount);
    expect(isDeleted).to.be.equal(true);
  });

  it("Bouquet class shouldn't delete not existing accessory", function () {
    const notExistingAccessoryMock = getRandomAccessoryMock();
    const oldAccessoriesAmount = testingBouquet.getAccessories().length;
    const isDeleted = testingBouquet.deleteAccessory(notExistingAccessoryMock.name);

    const newAccessoriesAmount = testingBouquet.getAccessories().length;

    expect(oldAccessoriesAmount).to.be.equal(newAccessoriesAmount);
    expect(isDeleted).to.be.equal(false);
  });
});
