/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

const URL = 'https://www.fruityvice.com/api/fruit';

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
  SUCCESS: 'success',
});

export const ContainerSlice = createSlice({
  name: 'container',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    setStatus: (state, action) => { state.status = action.payload; },
  },
});

export const { getdata, setStatus } = ContainerSlice.actions;

export default ContainerSlice.reducer;

// Thunks

export function fetchdata(query) {
  return async function fetchdataThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`${URL}/${query}`);
      const data = await res.json();
      const array = [];
      Object.values(data).forEach((records) => array.push({
        genus: records.genus,
        name: records.name,
        id: records.id,
        family: records.family,
        order: records.order,
        nutritions: records.nutritions,

      }));
      dispatch(getdata(array));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// date: records.date,
// copyright: records.copyright,
// id: records.imageid,
// technique: records.technique,
// url: records.baseimageurl,
// format: records.format,
// iiifbaseurl: records.iiifbaseuri,
// width: records.width,
// height: records.height,
//  lastupdate:records.lastupdate
