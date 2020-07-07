import { combineReducers } from 'redux';
import { recommendedProductsReducer } from './recommendedProductsReducer';

export const rootReducer = combineReducers({
    recommendedProducts: recommendedProductsReducer,
});
