import {createStore, applyMiddleware} from 'redux';
import PropTypes from 'prop-types';

import { middlewares } from '../create_store';
import rootReducer from '../store/reducers/root_reducer';

export const configureStore = (initialState) => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
  
  return createStoreWithMiddlewares(rootReducer, initialState);
}

export const findByTestAttr = (component, attr) => {
  const element = component.find(`[data-test='${attr}']`);
  return element;
}

export const checkProps = (component, expectedProps) => {
  const propsError = PropTypes.checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
}