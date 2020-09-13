import { RoseFlowerFactory } from "./../flower/rose-flower-factory.class";
import { MagnoliaFlowerFactory } from "./../flower/magnolia-flower-factory.class";
import { IAbstractFlowerFactory } from "src/interfaces/factory/abstract-flower-factory.interface";
import { TulipFlowerFactory } from "../flower";
import { FlowersEnum } from "src/shared/enums/flowers.enum";

export class ProducerFlowerFactory {
  private readonly magnoliaFlowerFactory: IAbstractFlowerFactory = new MagnoliaFlowerFactory();
  private readonly roseFlowerFactory: IAbstractFlowerFactory = new RoseFlowerFactory();
  private readonly tulipFlowerFactory: IAbstractFlowerFactory = new TulipFlowerFactory();

  getAccessoryFactory(factoryName: string): IAbstractFlowerFactory | never {
    switch (factoryName) {
      case FlowersEnum.Magnolia:
        return this.magnoliaFlowerFactory;
      case FlowersEnum.Rose:
        return this.roseFlowerFactory;
      case FlowersEnum.Tulip:
        return this.tulipFlowerFactory;
      default:
        throw new Error(`Provided uncorrect name of flower factory!`);
    }
  }
}
