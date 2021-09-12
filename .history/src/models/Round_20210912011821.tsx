class Round {
    round: number;
    bids: number[];
    results: number[];
    cumScores: number[];

    constructor(round: number) {
        this.round = round;
        this.bids = [0, 0, 0, 0];
        this.results = [0, 0, 0, 0];
        this.cumScores = [0, 0, 0, 0];
    }

    getBids() {
        return this.bids;
    }

}

export default Round;