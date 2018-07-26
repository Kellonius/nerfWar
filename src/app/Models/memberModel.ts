export const TeamColors: string[] = ["orange", "purple", "green", "yellow"];

export class gameModeModel {
    public name: string;
    public scoreValue: number;
    public deathTimer: number; // Time in Seconds
    public description: string;
    public scoreLimit?: number;
    public timeLimit?: number; // Time in Minutes
}

export class teamModel {
    public name: string;
    public color: string;
    public members: memberModel[];
}

export class memberModel {
    public name: string;
    public image: string;
    public deaths: number = 0;
    public points: number = 0;
    public respawn: number = 0;
    public lives?: number = undefined;
    public team: number = undefined;

    constructor(name, image, lives = undefined) {
        this.name = name;
        this.image = image;
        this.lives = lives;
    }
}