export const FETCH_RECOMMENDED_PRODUCTS = 'PRODUCTS/FETCH_RECOMMENDED_PRODUCTS';

export interface RecommendedProductsAction {
    type: string;
    payload: number[];
}
