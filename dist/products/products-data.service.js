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
exports.ProductsDataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const products_repository_1 = require("./db/products.repository");
let ProductsDataService = class ProductsDataService {
    constructor(productRepository) {
        this.productRepository = productRepository;
        this.products = [];
    }
    getAllProducts() {
        return this.productRepository.find();
    }
    async getProductById(id) {
        return await this.productRepository.findOneBy({ id });
    }
    async getProductsByName(name) {
        return await this.productRepository.findBy({ name: (0, typeorm_1.Like)(`%${name}%`) });
    }
    async updateProductRating(id, stars) {
        const product = await this.productRepository.findOneBy({ id });
        if (product) {
            product.stars = stars;
            await this.productRepository.save(product);
        }
        else {
            throw new common_1.NotFoundException();
        }
        return product;
    }
};
ProductsDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository])
], ProductsDataService);
exports.ProductsDataService = ProductsDataService;
//# sourceMappingURL=products-data.service.js.map