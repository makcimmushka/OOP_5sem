import { ICommand } from "../../interfaces/command/command.interface";

export class ShowInstructionsCommand implements ICommand {
  execute(): void {
    console.log("1. Show instructions"); //
    console.log("2. Show bouquet"); //
    console.log("3. Add flower to bouquet"); // 
    console.log("4. Add accessory to bouquet"); //
    console.log("5. Sort flowers by date"); // 
    console.log("6. Show flower by stem length diapazon"); //
    console.log("7. Exit"); //
  }
}
