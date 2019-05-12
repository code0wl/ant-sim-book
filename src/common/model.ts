import { antType } from "game/actors/ant/model";
import { spiderType } from "game/actors/spider/model";

export interface IAnimal {
    isAlive: boolean;
    isMoving: boolean;
}

export type IAnimalType = antType | spiderType  

export interface Point {
    x: number;
    y: number;
}

export interface IAnimationType {
    walking: string;
    idle: string;
    attack: string;
    width: number, 
    height: number
}

export interface Sprite {
    type?: IAnimalType;
    image: HTMLImageElement;
    width: number;
    height: number;
}
