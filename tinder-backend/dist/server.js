"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
require("express-async-errors");
const Logger_1 = __importDefault(require("./shared/Logger"));
const user_routes_1 = __importDefault(require("./routes/users/user_routes"));
const card_1 = __importDefault(require("./routes/card"));
const app = express_1.default();
const { BAD_REQUEST } = http_status_codes_1.default;
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use(user_routes_1.default);
app.use(card_1.default);
// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
    app.use(morgan_1.default("dev"));
}
// Security
if (process.env.NODE_ENV === "production") {
    app.use(helmet_1.default());
}
app.use((err, req, res, next) => {
    Logger_1.default.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});
exports.default = app;
