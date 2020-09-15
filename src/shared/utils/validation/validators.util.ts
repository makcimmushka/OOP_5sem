import { AccessoriesEnum } from "../../../shared/enums/accessories.enum";
import { FlowersEnum } from "../../../shared/enums/flowers.enum";

export function isStemLengthValid(stemLength: string): boolean {
  return isNaN(Number(stemLength)) || Number(stemLength) <= 0 ? false : true;
}

export function isFlowerNameValid(flowerName: string): boolean {
  for (let name in FlowersEnum) {
    if (name == flowerName) {
      return true;
    }
  }

  return false;
}

export function isAccessoryNameValid(accessoryName: string): boolean {
  for (let name in AccessoriesEnum) {
    if (name == accessoryName) {
      return true;
    }
  }

  return false;
}

export function isCommandValid(command: number): boolean {
  return (
    !isNaN(command) && Number.isInteger(command) && command >= 1 && command <= 7
  );
}
