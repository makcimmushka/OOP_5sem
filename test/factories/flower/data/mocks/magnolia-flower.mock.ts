import { getRandomInt } from "../../../../../src/shared/utils/random-int.util";
import { FlowersEnum } from "../../../../../src/shared/enums/flowers.enum";

export const magnoliaFlowerMock = {
  name: FlowersEnum.Magnolia,
  worth: 10,
  stemLength: getRandomInt(1, 10),
};
