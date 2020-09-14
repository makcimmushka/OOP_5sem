import { Bouquet } from "../../classes/bouquet/bouquet.class";

export interface ICommand {
  execute(): Bouquet | void;
}
