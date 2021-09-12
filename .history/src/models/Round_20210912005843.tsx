class Round {
    round: number;
    bids: number[];
    results: number[];
    scores: number[];

    constructor(round: number) {
        this.round = round;
        this.bids = [];
        this.results = [];
        this.scores = [];
    }

    getBids() {
        return this.bids;
    }

}

export default Round;