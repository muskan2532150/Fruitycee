import { configureStore } from '@reduxjs/toolkit';
import ContainerSliceReducer from './Container/Containers';
import popupSliceReducer from './popup/popup';

export default configureStore({
  reducer: {
    popup: popupSliceReducer,
    container: ContainerSliceReducer,
  },
});
