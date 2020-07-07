import { FETCH_RECOMMENDED_PRODUCTS, RecommendedProductsAction } from '../actions/recommendedProducts';

export const recommendedProductsReducer = (state = [], action: RecommendedProductsAction): number[] => {
    switch (action.type) {
        case FETCH_RECOMMENDED_PRODUCTS:
            return [0, 1, 2];
        default:
            return state;
    }
};
