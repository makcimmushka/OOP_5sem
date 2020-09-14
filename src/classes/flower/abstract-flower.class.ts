import { IFlower } from "../../interfaces/flower/flower.interface";
import { FlowersEnum } from "../../shared/enums/flowers.enum";

export abstract class AbstractFlower implements IFlower {
  protected readonly _name: FlowersEnum;
  protected readonly _worth: number;
  protected readonly _date: Date;
  protected readonly _stemLength: number;

  constructor(stemLength: number) {
    this._date = new Date();
    this._stemLength = stemLength;
  }

  get name(): FlowersEnum {
    return this._name;
  }

  get worth(): number {
    return this._worth;
  }

  get date(): Date {
    return this._date;
  }

  get stemLength(): number {
    return this._stemLength;
  }
}
