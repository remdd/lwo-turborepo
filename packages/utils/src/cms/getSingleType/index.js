"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleType = getSingleType;
const axios_1 = __importDefault(require("axios"));
async function getSingleType(singleTypeSlug) {
    console.log(singleTypeSlug);
    try {
        const { data } = await axios_1.default.get(`${process.env.CMS_ROOT}/${singleTypeSlug}?populate=*`);
        return data.data;
    }
    catch (err) {
        console.warn(err);
        return null;
    }
}
