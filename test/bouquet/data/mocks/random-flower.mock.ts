import { IFlower } from "../../../../src/interfaces/flower/flower.interface";
import { FlowersEnum } from "../../../../src/shared/enums/flowers.enum";
import { getRandomInt } from "../../../../src/shared/utils/random-int.util";

const magnoliaFlowerMock = {
  name: FlowersEnum.Magnolia,
  worth: 10,
  stemLength: getRandomInt(1, 10),
};

const tulipFlowerMock = {
  name: FlowersEnum.Tulip,
  worth: 20,
  stemLength: getRandomInt(1, 10),
};

const roseFlowerMock = {
  name: FlowersEnum.Rose,
  worth: 30,
  stemLength: getRandomInt(1, 10),
};

const randomChoice = getRandomInt(1, 3);

export function getRandomFlowerMock(): IFlower {
  return randomChoice == 1
    ? {
        ...magnoliaFlowerMock,
        date: new Date(),
      }
    : randomChoice == 2
    ? { ...tulipFlowerMock, date: new Date() }
    : { ...roseFlowerMock, date: new Date() };
}
