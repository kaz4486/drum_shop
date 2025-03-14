"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Product.prototype, "mainPhoto", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'float' }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Product.prototype, "photos", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 1,
    }),
    __metadata("design:type", Number)
], Product.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bool',
    }),
    __metadata("design:type", Boolean)
], Product.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 1,
    }),
    __metadata("design:type", Number)
], Product.prototype, "stars", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)({
        name: 'products',
    })
], Product);
exports.Product = Product;
//# sourceMappingURL=products.entity.js.map