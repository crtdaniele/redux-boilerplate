import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../slices';
import initialState from './initialState';

export default configureStore({ reducer: rootReducer }, initialState);