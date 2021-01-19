export class Planet {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get xAxis() {
        return this.x;
    }

    get yAxis() {
        return this.y;
    }
}
