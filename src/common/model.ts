import { antType } from "game/actors/ant/model";
import { spiderType } from "game/actors/spider/model";

export type IActorType = antType | spiderType | "food" | "nest";

export enum actorType {
    ant = "ant",
    spider = "spider",
    food = "food",
    nest = "nest",
    rock = "rock",
}

export enum currentState {
    idle,
    walk,
    dead,
    attack,
}

export const Colors = {
    grass: "#228B22",
    food: "#edcf18",
    debug: "#C9B8B1",
    nest: "#000000",
};

export interface IAnimationType {
    walk?: string;
    idle: string;
    attack?: string;
    dead?: string;
}

export interface Sprite {
    type?: IActorType;
    image: HTMLImageElement;
}
