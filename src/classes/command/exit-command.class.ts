import { ICommand } from "../../interfaces/command/command.interface";

export class ExitCommand implements ICommand {
  execute(): void {
    process.exit(0);
  }
}
