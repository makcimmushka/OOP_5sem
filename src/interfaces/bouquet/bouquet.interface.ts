import { IFlower } from "@interfaces/flower/flower.interface";

export interface IBouquet {
    getFlowers(): Array<IFlower>;
    getTotalAmount(): number;
    
}