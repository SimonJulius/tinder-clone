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
const express_1 = __importDefault(require("express"));
const card_controllers_1 = require("../../controllers/card_controllers");
const router = express_1.default.Router();
router.get("/card", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cards = yield card_controllers_1.getAllCards();
        res.status(200).send(cards);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.post("/card", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, imgUrl } = req.body;
        const cardInput = yield card_controllers_1.createCard(name, imgUrl);
        res.status(201).send(cardInput);
    }
    catch (error) {
        res.status(500).send();
    }
}));
exports.default = router;
