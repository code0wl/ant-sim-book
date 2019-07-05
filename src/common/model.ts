import { antType } from "game/actors/ant/model";
import { spiderType } from "game/actors/spider/model";
import { Animal } from "./animal";
import { Actor } from "engine/modules/actor/actor";
import { Ant } from "game/actors/ant/ant";
import { Spider } from "game/actors/spider/spider";

export type classTypes = Ant | Spider;

export type IActorType = antType | spiderType | actorType.food | actorType.nest;

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
    foodPheromone: "#edcf183d",
};

export enum Direction {
    north,
    northEast,
    northWest,

    south,
    southEast,
    southWest,

    east,
    west,
}

export interface IActor extends Animal, Actor {
    height: number;
    currentState: number;
    width: number;
    radius?: number;
    currentRotation: number;
    graphics: Sprite[];
    draw(ctx: CanvasRenderingContext2D): void;
    releaseFoodPheromone: boolean;
    releaseIntruderPhermone: boolean;
    gather(): void;
    alert(): void;
    removeFood(): void;
    deliverFood(): void;
}

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
