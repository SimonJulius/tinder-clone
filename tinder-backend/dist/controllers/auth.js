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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = __importDefault(require("../models/users"));
const signUp = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("sign up");
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        if (!hash) {
            throw Error("Please register again");
        }
        console.log("Success");
        const user = new users_1.default({
            email: email,
            password: hash,
        });
        user.save();
    }
    catch (err) {
        return err;
    }
});
const login = (req, res, next) => {
    users_1.default.findOne({ email: req.body.email })
        .then((user) => {
        if (!user) {
            return res.status(401).json({
                error: new Error("User not found"),
            });
        }
        bcrypt_1.default
            .compare(req.body.password, user.password)
            .then((valid) => {
            if (!valid) {
                return res.status(401).json({
                    error: new Error("Incorrect password"),
                });
            }
            const token = jsonwebtoken_1.default.sign({ userId: user._id }, "SECRET_CODE", {
                expiresIn: "24h",
            });
            res.status(200).json({
                userId: user._id,
                token: token,
            });
        })
            .catch((error) => {
            res.status(500).json({
                error: error,
            });
        });
    })
        .catch((error) => {
        res.status(500).json({
            error: error,
        });
    });
};
const auth = (req, res, next) => {
    var _a;
    try {
        const token = ((_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization).split(" ")[1];
        const decodedToken = jsonwebtoken_1.default.verify(token, "SECRET_CODE");
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw "Invalid user ID";
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(401).json({
            error: new Error("Invalid request"),
        });
    }
};
exports.default = { signUp, login, auth };
