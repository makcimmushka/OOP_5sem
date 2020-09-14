import { getRandomInt } from "../../../../../src/shared/utils/random-int.util";
import { FlowersEnum } from "../../../../../src/shared/enums/flowers.enum";

export const tulipFlowerMock = {
  name: FlowersEnum.Tulip,
  worth: 20,
  stemLength: getRandomInt(1, 10)
};
