import { IAnimationType, currentState, IActorType } from "common/model";
import { Actor } from "engine/modules/actor/actor";
import { actorStore } from "engine/modules/actor/store";

export class Animal extends Actor {
    public height: number;
    public width: number;
    public currentState: currentState = currentState.idle;
    public actor: any;

    constructor(type: IActorType, imageUrls?: IAnimationType) {
        super(type, imageUrls);

        this.actor = Array.from(actorStore).find(
            x => x.actorID === this.actorID
        );

    }

    public move() {
        this.currentState = currentState.walk;
    }

    public dead() {
        this.currentState = currentState.dead;
    }

    public idle() {
        this.currentState = currentState.idle;
    }

    public attack() {
        this.currentState = currentState.attack;
    }
}
