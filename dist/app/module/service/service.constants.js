"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRelationalFieldsMapper = exports.ServiceRelationalFields = exports.ServiceFilterableFields = void 0;
exports.ServiceFilterableFields = [
    'name',
    'location',
    'category',
    'categoryId',
    'price',
    'rating',
    'description',
    'categoryId',
    'createdAt',
    'updatedAt',
    'category.name',
];
exports.ServiceRelationalFields = ['categoryId'];
exports.ServiceRelationalFieldsMapper = {
    categoryId: 'category',
};
