"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewServices = void 0;
const prisma_1 = require("../../../shared/prisma");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.review.findMany({
        include: {
            ReviewReply: true,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Review not found');
    }
    return result;
});
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.review.findUnique({
        where: {
            id: id,
        },
        include: {
            ReviewReply: true,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Review not found');
    }
    return result;
});
const updateIntoDB = (id, review) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.review.update({
        where: {
            id: id,
        },
        data: review,
        include: {
            ReviewReply: true,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Review not found');
    }
    return result;
});
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.review.delete({
        where: {
            id: id,
        },
        include: {
            ReviewReply: true,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Review not found');
    }
    return result;
});
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.review.create({
        data,
        include: {
            ReviewReply: true,
        },
    });
    return result;
});
const replayReview = (id, review) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.review.findUnique({
        where: {
            id: id,
        },
        include: {
            ReviewReply: true,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Review not found');
    }
    const replayReview = yield prisma_1.prisma.reviewReply.create({
        data: Object.assign(Object.assign({}, review), { reviewId: result.id }),
        include: {
            review: true,
        },
    });
    if (!replayReview) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Review not found');
    }
    return replayReview;
});
exports.ReviewServices = {
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
    insertIntoDB,
    replayReview,
};
