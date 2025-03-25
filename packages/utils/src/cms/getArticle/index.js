"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticle = getArticle;
const cms_1 = require("@lwo/utils/cms");
const axios_1 = __importDefault(require("axios"));
async function getArticle(slug) {
    try {
        const articles = await (0, cms_1.getArticleList)();
        const article = articles.find((s) => s.slug === slug);
        if (!article) {
            throw new Error(`No documentId found for slug: ${slug}`);
        }
        const { data } = await axios_1.default.get(`${process.env.CMS_ROOT}/articles/${article.documentId}?populate=*`);
        return data.data;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}
