import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

const FETCH = "FETCH";
const FILTER = "FILTER";
const ERROR = "ERROR";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        cars: action.payload,
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  cars: null,
  filter: null,
  error: null,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [carModel, setCarModel] = useState(null);
  //   const [loading, setLoading] = useState(false);

  const fetchCars = async (p) => {
    console.log({ p });
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5500/api/cars?page=${p}`
      );
      console.log(response);
      setLoading(false);
      dispatch({ type: FETCH, payload: response.data.cars });
    } catch (error) {
      setLoading(false);
      dispatch({ type: ERROR, payload: error.response });
    }
  };

  const filterCars = async (text) => {
    console.log(text);
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5500/api/cars`);
      const car_model = response.data.cars.filter(
        (car) => car.car_model.toLowerCase() === text.toLowerCase()
      );
      //   console.log(car_model);
      setCarModel(car_model);
      setLoading(false);
      dispatch({ type: FILTER, payload: car_model });
    } catch (error) {
      setLoading(false);
      dispatch({ type: ERROR, payload: error.response });
    }
  };

  //   useEffect(() => {
  //     lenCars();
  //   }, []);

  return (
    <Context.Provider
      value={{
        cars: state.cars,
        error: state.error,
        filter: state.filter,
        loading,
        fetchCars,
        filterCars,
      }}
    >
      {children}
    </Context.Provider>
  );
};
