class Round {
    round: number;
    bids: number[];
    results: number[];
    scores: number[];

    constructor(round: number) {
        this.round = round;
        this.bids = [0, 0, 0, 0];
        this.results = [0, 0, 0, 0];
        this.scores = [0, 0, 0, 0];
    }

    getBids() {
        return this.bids;
    }

}

export default Round;