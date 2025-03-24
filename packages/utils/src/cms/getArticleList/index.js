"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleList = getArticleList;
const axios_1 = __importDefault(require("axios"));
async function getArticleList() {
    try {
        const slugs = await axios_1.default.get(`${process.env.CMS_ROOT}/articles?fields=slug`);
        return slugs.data.data;
    }
    catch (err) {
        console.error(err);
        return [];
    }
}
