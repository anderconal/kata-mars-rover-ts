import { Commands } from '../Shared/Enums/Commands';
import { Orientations } from '../Shared/Enums/Orientations';

export class Rover {
    private orientation: Orientations = Orientations.North;
    private yAxis: number = 0;
    private roverActions: any = {
        [Commands.Empty]: () => {
            this.yAxis = 0;
        },
        [Commands.Left]: () => {
            this.orientation = Orientations.West;
        },
        [Commands.Right]: () => {
            this.orientation = Orientations.East;
        },
        [Commands.Forward]: () => {
            this.yAxis++;
        },
        [Commands.Backward]: () => {
            this.yAxis--;
        }
    };
    get position(): string {
        return `0,${this.yAxis},${this.orientation}`;
    }

    public executeCommand(command: Commands): void {
        this.roverActions[command]();
    }
}
