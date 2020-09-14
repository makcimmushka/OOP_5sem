import { IAccessory } from "../../../interfaces/accessory/accessory.interface";
import { AccessoriesEnum } from "../../../shared/enums/accessories.enum";
import { getRandomInt } from "../../../shared/utils/random-int.util";

const pinsAccessoryMock = {
  name: AccessoriesEnum.Pins,
  worth: 15,
};

const wrapperAccessoryMock = {
  name: AccessoriesEnum.Wrapper,
  worth: 10,
};

const sparklesAccessoryMock = {
  name: AccessoriesEnum.Sparkles,
  worth: 5,
};

export function getRandomAccessoryMock(randomChoice: number): IAccessory {
  return randomChoice == 1
    ? pinsAccessoryMock
    : randomChoice == 2
    ? wrapperAccessoryMock
    : sparklesAccessoryMock;
}
