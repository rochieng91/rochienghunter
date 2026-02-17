// TypeScript type definitions for ticks, predictions, volatility indices, and analysis data

// Tick definition
export interface Tick {
    symbol: string;
    price: number;
    volume: number;
    timestamp: string;
}

// Prediction definition
export interface Prediction {
    symbol: string;
    predictedPrice: number;
    confidence: number;
    timestamp: string;
}

// Volatility Index definition
export interface VolatilityIndex {
    symbol: string;
    volatility: number;
    timestamp: string;
}

// Analysis Data definition
export interface AnalysisData {
    symbol: string;
    analysis: string;
    timestamp: string;
}