import { Bouquet } from "../bouquet/bouquet.class";
import { ICommand } from "../../interfaces/command/command.interface";
import {
  AddAccessoryCommand,
  AddFlowerCommand,
  ExitCommand,
  ShowBouquetCommand,
  ShowFlowerByDiapazonCommand,
  ShowInstructionsCommand,
  SortFlowersCommand,
} from "./";

import {
  getRandomAccessoryMock,
  getRandomFlowerMock,
} from "../../shared/utils/mocks-generate";
import { getRandomInt } from "../../shared/utils/random-int.util";

let flowersMocks = [];
let accessoriesMocks = [];

for (let i = 0; i < 5; i++) {
  flowersMocks.push(getRandomFlowerMock(getRandomInt(1, 3)));
  accessoriesMocks.push(getRandomAccessoryMock(getRandomInt(1, 3)));
}

export class CommandSelector {
  private command: ICommand;
  private bouquet: Bouquet = new Bouquet(flowersMocks, accessoriesMocks);

  public select(command: string) {
    switch (command) {
      case "1":
        this.command = new ShowInstructionsCommand();
        this.command.execute();
        break;

      case "2":
        this.command = new ShowBouquetCommand(this.bouquet);
        this.command.execute();
        break;

      case "3":
        this.command = new AddFlowerCommand(
          this.bouquet.getFlowers(),
          this.bouquet.getAccessories()
        );
        this.bouquet = this.command.execute() as Bouquet;
        break;

      case "4":
        this.command = new AddAccessoryCommand(
          this.bouquet.getFlowers(),
          this.bouquet.getAccessories()
        );
        this.bouquet = this.command.execute() as Bouquet;
        break;

      case "5":
        this.command = new SortFlowersCommand(this.bouquet);
        this.bouquet = this.command.execute() as Bouquet;
        break;

      case "6":
        this.command = new ShowFlowerByDiapazonCommand(this.bouquet);
        this.command.execute();
        break;

      case "7":
        this.command = new ExitCommand();
        this.command.execute();
        break;

      default:
        break;
    }
  }
}
