// DerivAPI.ts

import WebSocket from 'ws';

class DerivAPI {
    private ws: WebSocket;
    private url: string = 'wss://ws.binaryws.com/websockets/v3';
    private apiToken: string;

    constructor(apiToken: string) {
        this.apiToken = apiToken;
        this.ws = new WebSocket(this.url);
        this.setupWebSocket();
    }

    private setupWebSocket() {
        this.ws.on('open', () => {
            console.log('WebSocket connection opened.');
            this.authenticate();
        });

        this.ws.on('message', (data: string) => {
            console.log('Message received:', data);
            this.handleMessage(JSON.parse(data));
        });

        this.ws.on('close', () => {
            console.log('WebSocket connection closed.');
        });

        this.ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
    }

    private authenticate() {
        const authMessage = {
            "authorize": this.apiToken
        };
        this.ws.send(JSON.stringify(authMessage));
    }

    public subscribeToTicks(symbol: string) {
        const tickMessage = {
            "ticks": symbol,
            "subscribe": 1
        };
        this.ws.send(JSON.stringify(tickMessage));
    }

    private handleMessage(message: any) {
        // Implement message handling logic
        if (message.msg_type === 'tick') {
            console.log('Received tick:', message);
        }
    }
}

// Example usage:
// const api = new DerivAPI('YOUR_API_TOKEN');
// api.subscribeToTicks('R_100');
