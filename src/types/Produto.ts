import produto from '../data/produto.json';

export type Produtos = typeof produto;

export type Celular = typeof produto.products[0];