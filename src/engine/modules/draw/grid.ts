import { IMap } from "game/model";
import { IAnimal, Point } from "common/model";

export class Grid {
    gridSize: number = 40;
    // add interface
    rows: any = [];
    cols: any = [];
    cells: any = [];

    public cells: number[];
    constructor(public canvas: HTMLCanvasElement, dimensions: Point) {
        this.drawGrid(dimensions);
    }

    public debug() {}

    // think of better type
    public intersections(elements: IAnimal[]) {
        // pass event when actors have intersected
    }

    public getCell(map: IMap) {}

    private drawGrid({ x, y }: Point) {
        const ctx = this.canvas.getContext("2d");

        // cols
        for (let i = 0, j = 0; i < x; i += this.gridSize) {
            this.cols[j] = { cell: j, coordinates: i };
            ctx.moveTo(i, 0);
            ctx.lineTo(i, x);
            j += 1;
        }

        // rows: any
        for (let i = 0, j = 0; i < y; i += this.gridSize) {
            this.rows[j] = { cell: j, coordinates: i };
            ctx.moveTo(0, i);
            ctx.lineTo(x, i);
            j += 1;
        }
        ctx.strokeStyle = "#006400";
        ctx.stroke();

        console.log(this.rows)
        console.log(this.cols)
    }
}
