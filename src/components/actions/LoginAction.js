import React from 'react';
import {useSelector, useDispatch, Provider} from 'react-redux';
import {Alert} from 'react-native';


export const AddCatData = (list) => {
  return async (dispatch) => {
    dispatch({type: 'CatListRes', payload: list});
  }
};

export const CatListArray = (catList) => {
  return async (dispatch) => {
    dispatch({type: 'CatListData', payload: catList});
  }
};