import { Animal } from "common/animal";
import { Point, AnimationType } from "common/model";
import { antType } from "game/actors/ant/model";

export class Ant extends Animal {
    readonly currentLocation: Point;
    public isAlive = true;
    public isMoving = false;
    public isSearching = false;
    public type: string;

    constructor(type: antType, imageUrls: AnimationType[]) {
        super(type, imageUrls);
        this.type = antType[type];
    }

    public move() {
        this.isMoving = true;
    }

    public idle() {
        this.isMoving = false;
    }

    public eat() {}

    public attack() {}

    public getLocation() {
        return this.currentLocation;
    }
}
