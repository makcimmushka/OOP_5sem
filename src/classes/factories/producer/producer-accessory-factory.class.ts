import {
  WrapperAccessoryFactory,
  SparklesAccessoryFactory,
  PinsAccessoryFactory,
} from "../accessory";
import { IAbstractAccessoryFactory } from "../../../interfaces/factory/abstract-accessory-factory.interface";
import { AccessoriesEnum } from "../../../shared/enums/accessories.enum";

export class ProducerAccessoryFactory {
  private readonly pinsAccessoryFactory: IAbstractAccessoryFactory = new PinsAccessoryFactory();
  private readonly sparklesAccessoryFactory: IAbstractAccessoryFactory = new SparklesAccessoryFactory();
  private readonly wrapperAccessoryFactory: IAbstractAccessoryFactory = new WrapperAccessoryFactory();

  getAccessoryFactory(factoryName: string): IAbstractAccessoryFactory | never {
    switch (factoryName) {
      case AccessoriesEnum.Pins:
        return this.pinsAccessoryFactory;
      case AccessoriesEnum.Sparkles:
        return this.sparklesAccessoryFactory;
      case AccessoriesEnum.Wrapper:
        return this.wrapperAccessoryFactory;
      default:
        throw new Error(`Provided uncorrect name of accessory factory!`);
    }
  }
}
