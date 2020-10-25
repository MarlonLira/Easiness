import { Container } from 'inversify';

// Types
import { TYPES } from './types';

// Repositories
import { ProductRepository } from '../../Data/Repositories/product.repository';

// Repositories interfaces
import { IProductRepository } from '../../../Domain/Interfaces/product-repository.interface';

// Services
import { ProductService } from '../../../Application/Services/product.service';

// Services interfaces

import { IProductService } from '../../../Application/Interfaces/product-service.interface';

// Binds
const container = new Container();

// Services Binds
container.bind<IProductService>(TYPES.IProductService).to(ProductService);

// Repositories Binds
container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository);

export { container };