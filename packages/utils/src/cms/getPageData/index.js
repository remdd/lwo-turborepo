"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageData = getPageData;
const axios_1 = __importDefault(require("axios"));
const getPageList_1 = require("../getPageList");
async function getPageData(slug) {
    try {
        const pages = await (0, getPageList_1.getPageList)();
        console.log(pages);
        const page = pages.find((p) => p.slug === slug);
        if (!page) {
            throw new Error(`No page found with slug: ${slug}`);
        }
        const { data } = await axios_1.default.get(`${process.env.CMS_ROOT}/pages/${page.documentId}?populate=*`);
        let single_type_data = null;
        if (data.data.single_type) {
            try {
                console.log("single_type: ", data.data.single_type);
                single_type_data = await axios_1.default.get(`${process.env.CMS_ROOT}/${data.data.single_type}?populate=*`);
                console.log(single_type_data.data.data);
            }
            catch (err) {
                console.warn(err);
            }
        }
        return {
            page_data: data.data,
            single_type_data: single_type_data?.data.data || null,
        };
    }
    catch (err) {
        console.warn(err);
        return null;
    }
}
