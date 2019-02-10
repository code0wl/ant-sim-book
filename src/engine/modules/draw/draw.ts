import { Engine, engine } from "engine/engine";
import { Canvas } from "engine/modules/draw/canvas";
import { AnimationLoop } from "engine/modules/animation/animation";
import { Point } from "game/common/model";

export class Draw extends Canvas {

	private logger: boolean;
	public engine: Engine;
	public animationLoop: AnimationLoop;

	constructor({x, y}: Point) {
		super({x, y});
		this.engine = engine;
		this.startEngine();
		console.log(`drawing engine enabled with dimension: ${x}px X ${y}px`);
	}

	public getContext(): CanvasRenderingContext2D {
		return super.getContext();
	}

	public startEngine() {
		this.animationLoop = new AnimationLoop(
			super.getContext(), super.getCanvas().width, super.getCanvas().height, this.logger,
			this.engine);
	}

	public update() {
		
	}
}