"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFaqs = getFaqs;
const axios_1 = __importDefault(require("axios"));
async function getFaqs() {
    try {
        const faqs = await axios_1.default.get(`${process.env.CMS_ROOT}/faqs`);
        console.log(faqs);
        return faqs.data.data;
    }
    catch (err) {
        console.error(err);
        return [];
    }
}
