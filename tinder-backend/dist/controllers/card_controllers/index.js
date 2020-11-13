"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCards = exports.createCard = void 0;
const carddb_1 = __importDefault(require("../../models/card_db/carddb"));
exports.createCard = (name, imgUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const card = yield new carddb_1.default({ name, imgUrl });
        card.save();
        return { name, imgUrl };
    }
    catch (error) {
        throw error;
    }
});
exports.getAllCards = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cards = yield carddb_1.default.find();
        return cards;
    }
    catch (error) {
        throw error;
    }
});
