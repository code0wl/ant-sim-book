import { actorStore } from "engine/modules/actor/store";
import { IActorType, Sprite } from "common/model";
import { Point } from "../draw/point";
import { Animal } from "common/animal";

export class Actor {
    public width?: number;
    public height?: number;
    public numberOfFrames = 5;
    public actorID: number;
    public radius?: number;
    public isActive = true;
    public coordinates: Point;
    public graphics: Sprite[] | undefined;
    public currentRotation: number = 0;
    public frameIndex = 0;
    public currentState: number;

    private tick = 0;
    private ticksPerFrame = 1;

    constructor(public type: IActorType) {
        this.addToStore();
    }

    public update() {
        if (this instanceof Animal) {
            this.tick += 1;

            if (this.tick > this.ticksPerFrame) {
                this.tick = 0;

                if (this.frameIndex < this.numberOfFrames - 1) {
                    this.frameIndex += 1;
                } else {
                    this.frameIndex = 0;
                }
            }

            this.updateActor();
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        // implemented by children instances (Food, Nest)
    }

    public animate(ctx: CanvasRenderingContext2D) {
        if (this.graphics) {
            const {
                graphics,
                frameIndex,
                width,
                currentState,
                height,
                coordinates,
                numberOfFrames,
            } = this;

            const correctedWidth = width / numberOfFrames;

            ctx.save();
            ctx.translate(
                coordinates.x + correctedWidth / 2,
                coordinates.y + height / 2
            );
            ctx.rotate(this.currentRotation);
            ctx.drawImage(
                graphics[currentState].image,
                (frameIndex * width) / numberOfFrames,
                height,
                correctedWidth,
                height,
                -width / 2 / numberOfFrames,
                -height / 2,
                correctedWidth,
                height
            );
            ctx.restore();
        } else {
            this.draw(ctx);
        }
    }

    public remove() {
        this.isActive = false;
    }

    public removeFromStore(actor: Actor): void {
        actorStore.delete(actor);
    }

    private addToStore() {
        this.actorID = actorStore.size;
        actorStore.add(this);
    }
}
