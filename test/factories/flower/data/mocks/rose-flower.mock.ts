import { getRandomInt } from "../../../../../src/shared/utils/random-int.util";
import { FlowersEnum } from "../../../../../src/shared/enums/flowers.enum";

export const roseFlowerMock = {
  name: FlowersEnum.Rose,
  worth: 30,
  stemLength: getRandomInt(1, 10)
};