"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrixInvalideError = void 0;
class PrixInvalideError extends Error {
    constructor(message = "Prix invalide ❌") {
        super(message);
        this.name = "PrixInvalideError";
    }
}
exports.PrixInvalideError = PrixInvalideError;
