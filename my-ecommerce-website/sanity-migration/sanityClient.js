"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 'to5tioje', 
    dataset: 'production', 
    apiVersion: '2024-01-04', 
    useCdn: false, 
    token: "sk0oqDHOkPzGMtmmT4MkUYYX8cneeIkWCrEApdrM87eOkHHPlpQcTF4tV9M7oq2cwysN88QH6nMMao0C59UfqyHPbOu9teKcMxb65OypsPND8lszv0G7c1HQNQaATShS21GkpLvhCJM3VwO3C2BN4bSNRmLNBi5QgoE3ziSDNDdye255Fv7x"
});
