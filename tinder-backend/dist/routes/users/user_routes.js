"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = __importDefault(require("../../controllers/auth"));
/* GET users listing. */
router.get("/", (req, res) => {
    res.send("Welcome");
});
router.post("/signup", (req, res) => {
    const { email, password } = req.body;
    auth_1.default.signUp({ email, password });
    res.send("successfull");
});
router.post("/login", auth_1.default.login);
router.get("/all", auth_1.default.auth);
exports.default = router;
