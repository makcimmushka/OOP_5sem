const prompt = require("prompt-sync")();

import { Bouquet } from "../bouquet/bouquet.class";
import { ICommand } from "../../interfaces/command/command.interface";
import { BouquetBuilder } from "../bouquet/bouquet-builder.class";
import { IFlower } from "../../interfaces/flower/flower.interface";
import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import { isAccessoryNameValid } from "../../shared/utils/validation/validators.util";
import { ProducerAccessoryFactory } from "../factories/producer/producer-accessory-factory.class";

export class AddAccessoryCommand implements ICommand {
  private readonly producerAccessoryFactory: ProducerAccessoryFactory = new ProducerAccessoryFactory();
  private readonly bouquetBuilder: BouquetBuilder;

  constructor(flowers: Array<IFlower>, accessories: Array<IAccessory>) {
    this.bouquetBuilder = new BouquetBuilder(flowers, accessories);
  }

  execute(): Bouquet {
    let accessoryName = prompt("Accessory name: ").trim();

    while (!isAccessoryNameValid(accessoryName)) {
      console.log("Provided uncorrect arguments! Try again!");

      accessoryName = prompt("Accessory name: ");
    }

    const factory = this.producerAccessoryFactory.getAccessoryFactory(
      accessoryName
    );
    
    const newAccessory = factory.createAccessory();

    const updatedBouquet = this.bouquetBuilder
      .addAccessory(newAccessory)
      .build();

    console.log("Accessory added");

    return updatedBouquet;
  }
}
