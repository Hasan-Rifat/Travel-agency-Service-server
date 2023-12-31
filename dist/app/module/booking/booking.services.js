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
exports.bookingServices = void 0;
const prisma_1 = require("../../../shared/prisma");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.booking.findMany();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'booking not found');
    }
    return result;
});
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.booking.findUnique({
        where: {
            id: id,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'booking not found');
    }
    return result;
});
const updateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    // return result;
    const user = yield prisma_1.prisma.user.findUnique({
        where: {
            id: data.userId,
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'user not found');
    }
    const result = yield prisma_1.prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        // create a booking
        const booking = yield transactionClient.booking.update({
            where: {
                id: id,
            },
            data,
        });
        yield transactionClient.notification.create({
            data: {
                userId: user.id,
                message: 'order confirmed successfully',
                role: user.role,
                read: false,
            },
        });
        return {
            booking,
        };
    }));
    // create notification
    return result;
});
const cancelBooking = (id, booking) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.booking.update({
        where: {
            id: id,
        },
        data: Object.assign(Object.assign({}, booking), { status: 'cancel' }),
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'booking not found');
    }
    return result;
});
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.booking.delete({
        where: {
            id: id,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'booking not found');
    }
    return result;
});
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.findUnique({
        where: {
            id: data.userId,
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'user not found');
    }
    const result = yield prisma_1.prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        // create a booking
        const booking = yield transactionClient.booking.create({
            data,
        });
        yield transactionClient.notification.create({
            data: {
                userId: user.id,
                message: 'You have a new booking',
                role: user.role,
                read: false,
            },
        });
        return {
            booking,
        };
    }));
    // create notification
    return result;
});
exports.bookingServices = {
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
    insertIntoDB,
    cancelBooking,
};
