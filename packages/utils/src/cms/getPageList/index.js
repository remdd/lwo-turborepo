"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageList = getPageList;
const axios_1 = __importDefault(require("axios"));
async function getPageList() {
    try {
        const slugs = await axios_1.default.get(`${process.env.CMS_ROOT}/pages?fields=slug`);
        return slugs.data.data;
    }
    catch (err) {
        console.warn(err);
        return [];
    }
}
