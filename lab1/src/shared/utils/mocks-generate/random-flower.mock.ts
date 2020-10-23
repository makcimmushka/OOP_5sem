import { IFlower } from "../../../interfaces/flower/flower.interface";
import { FlowersEnum } from "../../../shared/enums/flowers.enum";
import { getRandomInt } from "../../../shared/utils/random-int.util";

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

export function getRandomFlowerMock(randomChoice: number): IFlower {
  return randomChoice == 1
    ? {
        ...magnoliaFlowerMock,
        date: new Date(),
      }
    : randomChoice == 2
    ? { ...tulipFlowerMock, date: new Date(Date.now() + getRandomInt(10000, 1000000)) }
    : { ...roseFlowerMock, date: new Date(Date.now() + getRandomInt(10000, 1000000)) };
}
