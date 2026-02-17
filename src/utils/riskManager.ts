// riskManager.ts

// Stake calculator function
function calculateStake(balance: number, riskPercentage: number): number {
    return (balance * riskPercentage) / 100;
}

// Loss limit checker
function checkLossLimit(currentLoss: number, lossLimit: number): boolean {
    return currentLoss <= lossLimit;
}

// Performance tracking
interface PerformanceMetrics {
    totalTrades: number;
    winningTrades: number;
    losingTrades: number;
}

function trackPerformance(trades: PerformanceMetrics): string {
    const winRate = (trades.winningTrades / trades.totalTrades) * 100;
    return `Win Rate: ${winRate.toFixed(2)}%`;
}

export { calculateStake, checkLossLimit, trackPerformance };