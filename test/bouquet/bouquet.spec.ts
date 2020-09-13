import { expect } from "chai";
import { Bouquet } from "../../src/classes/bouquet/bouquet.class";
import { randomFlowerMock, randomAccessoryMock } from "./data/mocks";

describe("Bouquet class tests", function () {
  const testingBouquet = Bouquet.getInstance();
  const flowerMock = randomFlowerMock;
  const accessoryMock = randomAccessoryMock;

  it("Bouquet class should be a singleton", function () {
    const firstBouquetInstance = Bouquet.getInstance();
    const secondBouquetInstance = Bouquet.getInstance();

    expect(firstBouquetInstance).to.be.equal(secondBouquetInstance);
  });

  it("Bouquet class should add flower correctly", function () {
    const oldFlowersAmount = testingBouquet.getFlowers().length;
    testingBouquet.addFlower(flowerMock);

    const newFlowersAmount = testingBouquet.getFlowers().length;

    expect(oldFlowersAmount + 1).to.be.equal(newFlowersAmount);
  });

  it("Bouquet class should delete flower correctly", function () {
    const oldFlowersAmount = testingBouquet.getFlowers().length;
    testingBouquet.deleteFlower(flowerMock.name);

    const newFlowersAmount = testingBouquet.getFlowers().length;

    expect(oldFlowersAmount - 1).to.be.equal(newFlowersAmount);
  });

  it("Bouquet class should add accessory correctly", function () {
    const oldAccessoriesAmount = testingBouquet.getAccessories().length;
    testingBouquet.addAccessory(accessoryMock);

    const newAccessoriesAmount = testingBouquet.getAccessories().length;

    expect(oldAccessoriesAmount + 1).to.be.equal(newAccessoriesAmount);
  });

  it("Bouquet class should delete accessory correctly", function () {
    const oldAccessoriesAmount = testingBouquet.getAccessories().length;
    testingBouquet.deleteAccessory(accessoryMock.name);

    const newAccessoriesAmount = testingBouquet.getAccessories().length;

    expect(oldAccessoriesAmount - 1).to.be.equal(newAccessoriesAmount);
  });
});
