import { IAccessory } from "../../../../src/interfaces/accessory/accessory.interface";
import { AccessoriesEnum } from "../../../../src/shared/enums/accessories.enum";
import { getRandomInt } from "../../../../src/shared/utils/random-int.util";

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

const randomChoice = getRandomInt(1, 3);

export const randomAccessoryMock: IAccessory =
  randomChoice == 1
    ? pinsAccessoryMock
    : randomChoice == 2
    ? wrapperAccessoryMock
    : sparklesAccessoryMock;
