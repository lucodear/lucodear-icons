// colored console output

export const red = (value: string) => `\x1b[31m${value}\x1b[0m`;
export const green = (value: string) => `\x1b[32m${value}\x1b[0m`;
export const yellow = (value: string) => `\x1b[33m${value}\x1b[0m`;
export const magenta = (value: string) => `\x1b[35m${value}\x1b[0m`;
export const blue = (value: string) => `\x1b[34m${value}\x1b[0m`;
