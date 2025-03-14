import axios from 'axios';
import { API_URL } from '../config/config';

// selectors
export const getProducts = ({ products }) => products.data;

export const getRequest = ({ products }) => products.request;

export const getProductById = ({ products }, id) => {
  return products.data.find((product) => product.id === id);
};

// export const getProductForSale = ({ products }) => {
//   return products.data.filter((product) => product.sale);
// };

// actions

const reducerName = 'products';

const createActionName = (actionName) => `app/${reducerName}/${actionName}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const UPDATE_PRODUCT_RATING = createActionName('UPDATE_PRODUCT_RATING');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = () => ({ type: ERROR_REQUEST });

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const updateProductRating = (payload) => ({
  payload,
  type: UPDATE_PRODUCT_RATING,
});

// thunks
export const updateRatingRequest = (data) => {
  return async (dispatch) => {
    dispatch(startRequest({ name: UPDATE_PRODUCT_RATING }));
    try {
      let res = await axios.patch(`${API_URL}/products`, data);
      dispatch(updateProductRating(res.data));

      dispatch(endRequest({ name: UPDATE_PRODUCT_RATING }));
    } catch (e) {
      dispatch(errorRequest({ name: UPDATE_PRODUCT_RATING, error: e.message }));
    }
  };
};

// export const createOrderRequest = (data) => {
//   return async (dispatch) => {
//     dispatch(startRequest({ name: CREATE_ORDER }));
//     try {
//       let res = await axios.post(`${API_URL}/orders`, data);
//       console.log(res.data);
//       dispatch(createOrder(res.data));

//       dispatch(endRequest({ name: CREATE_ORDER }));
//     } catch (e) {
//       dispatch(errorRequest({ name: CREATE_ORDER, error: e.message }));
//     }
//   };
// };

export const loadProductsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

// initialState

const initialState = {
  data: [],
  request: { pending: false, error: null, success: null },
};

// reducer

export default function ratingsReducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: false },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false },
      };
    case UPDATE_PRODUCT_RATING:
      return statePart.map((product) =>
        product.id === action.payload.id
          ? { ...product, stars: action.payload.stars }
          : product,
      );
    default:
      return statePart;
  }
}
