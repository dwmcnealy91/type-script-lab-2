import Player from "./models/Player";
import TeamPlayer from "./models/TeamPlayer";



const david: Player = new Player("David", 47);
console.log(david);
console.log(david.describe() ); //"David wears 47"


const demetri: TeamPlayer = new TeamPlayer("Demetri", 101, "GC");
console.log(demetri);
console.log(demetri.describe() ); //"Demetri wears 101" and using teamPLayer "This Player plays for GC"
// using return super.describe() "Demetri wears 101 and plays for GC"

