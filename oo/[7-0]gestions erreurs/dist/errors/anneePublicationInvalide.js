"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnneePublicationInvalide = void 0;
class AnneePublicationInvalide extends Error {
    constructor(message = "L4année de publication encodée est invalide...") {
        super(message);
        this.name = "AnneePublicationInvalideError";
    }
}
exports.AnneePublicationInvalide = AnneePublicationInvalide;
