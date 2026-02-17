class DigitAnalyzer {
    constructor(data) {
        this.data = data;
        this.frequency = {};
        this.hotDigits = [];
        this.coldDigits = [];
    }

    analyzeFrequencies() {
        this.data.forEach(digit => {
            if (this.frequency[digit]) {
                this.frequency[digit]++;
            } else {
                this.frequency[digit] = 1;
            }
        });

        // Determine hot and cold digits
        const entries = Object.entries(this.frequency);
        entries.sort((a, b) => b[1] - a[1]);  // Sort by frequency

        this.hotDigits = entries.slice(0, 3).map(entry => entry[0]); // Top 3 hot digits
        this.coldDigits = entries.slice(-3).map(entry => entry[0]); // Bottom 3 cold digits
    }

    detectPatterns() {
        // Implement pattern detection logic here (e.g., consecutive numbers, etc.)
    }

    detectStreaks() {
        let currentStreak = 1;
        const streaks = [];

        for (let i = 1; i < this.data.length; i++) {
            if (this.data[i] === this.data[i - 1]) {
                currentStreak++;
            } else {
                if (currentStreak > 1) {
                    streaks.push({ digit: this.data[i - 1], length: currentStreak });
                }
                currentStreak = 1;
            }
        }

        // Add the last streak if applicable
        if (currentStreak > 1) {
            streaks.push({ digit: this.data[this.data.length - 1], length: currentStreak });
        }

        return streaks;
    }

    getStats() {
        return {
            frequency: this.frequency,
            hotDigits: this.hotDigits,
            coldDigits: this.coldDigits
        };
    }
}

module.exports = DigitAnalyzer;