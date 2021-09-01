export default class Player {
    name: string;
    jersery: number;
    constructor(name: string, jersey: number) {
        this.name = name;
        this.jersery = jersey;
    }
    describe(): string {
        return `${this.name} wears ${this.jersery}`;
    }
}