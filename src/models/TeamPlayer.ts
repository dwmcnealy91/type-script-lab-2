import Player from "./Player";

// child of Player (inherits name, jersey)
// add team: string property - set from constructor parameter
export default class TeamPlayer extends Player{
    // do not write the inherited properties here
    // only the new ones
    team: string;
    constructor(name: string, jersey: number, team: string) {
        super(name, jersey);
        this.team = team;
    }
    describe(): string {
        return super.describe() + ` and plays for ${this.team}`;
    }
}