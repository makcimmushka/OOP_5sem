import { FlowersEnum } from "../../shared/enums/flowers.enum";

export interface IFlower {
  name: FlowersEnum;
  worth: number;
  date: Date;
  stemLength: number;
}
