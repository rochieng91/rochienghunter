// src/utils/logger.ts

const debug = (message: string): void => {
    console.log(`[DEBUG] [${new Date().toISOString()}]: ${message}`);
};

const error = (message: string): void => {
    console.error(`[ERROR] [${new Date().toISOString()}]: ${message}`);
};

export { debug, error };