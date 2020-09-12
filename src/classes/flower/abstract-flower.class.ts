import { IFlower } from "@interfaces/flower.interface";

export abstract class AbstractFlower implements IFlower {
  protected readonly _name: string;
  protected readonly _worth: number;
  protected readonly _date: Date;

  constructor() {
    this._date = new Date();
  }

  get name(): string {
    return this._name;
  }

  get worth(): number {
    return this._worth;
  }

  get date(): Date {
    return this._date;
  }
}
