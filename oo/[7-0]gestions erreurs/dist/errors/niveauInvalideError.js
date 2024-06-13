"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiveauInvalideError = void 0;
class NiveauInvalideError extends Error {
    constructor(message = "le niveau n'est pas valide...") {
        super(message);
        this.name = "NiveauInvalideError";
    }
}
exports.NiveauInvalideError = NiveauInvalideError;
