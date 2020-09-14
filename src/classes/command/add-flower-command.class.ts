const prompt = require("prompt-sync")();

import { Bouquet } from "../bouquet/bouquet.class";
import { ICommand } from "../../interfaces/command/command.interface";
import { ProducerFlowerFactory } from "../factories/producer/producer-flower-factory.class";
import { BouquetBuilder } from "../bouquet/bouquet-builder.class";
import { IFlower } from "../../interfaces/flower/flower.interface";
import { IAccessory } from "../../interfaces/accessory/accessory.interface";
import {
  isFlowerNameValid,
  isStemLengthValid,
} from "../../shared/utils/validation/validators.util";

export class AddFlowerCommand implements ICommand {
  private readonly producerFlowerFactory: ProducerFlowerFactory = new ProducerFlowerFactory();
  private readonly bouquetBuilder: BouquetBuilder;

  constructor(flowers: Array<IFlower>, accessories: Array<IAccessory>) {
    this.bouquetBuilder = new BouquetBuilder(flowers, accessories);
  }

  execute(): Bouquet {
    let flowerName = prompt("Flower name: ").trim();
    let stemLength = prompt("Stem length: ").trim();

    while (!isStemLengthValid(stemLength) || !isFlowerNameValid(flowerName)) {
      console.log("Provided uncorrect arguments! Try again!");

      flowerName = prompt("Flower name: ");
      stemLength = prompt("Stem length: ");
    }

    const factory = this.producerFlowerFactory.getFlowerFactory(flowerName);
    const newFlower = factory.createFlower(stemLength);

    const updatedBouquet = this.bouquetBuilder.addFlower(newFlower).build();

    console.log("Flower added");

    return updatedBouquet;
  }
}
