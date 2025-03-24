"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageResolver = pageResolver;
function pageResolver(id) {
    return fetch(`http://localhost:1337/api/pages/${id}?populate=*`)
        .then((res) => res.json())
        .then((data) => data);
}
