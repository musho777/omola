import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('@token', token);
  } catch (e) {
    return null;
  }
};

export const getUserID = async () => {
    try {
      const value = await AsyncStorage.getItem('@UserID');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return null;
    }
  };
  
  export const setUserID = async (UserID) => {
    try {
      await AsyncStorage.setItem('@UserID', UserID);
    } catch (e) {
      return null;
    }
  };


  export const getDate = async () => {
    try {
      const value = await AsyncStorage.getItem('@Date');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return null;
    }
  };
  
  export const setDate = async (Date) => {
    try {
      await AsyncStorage.setItem('@Date', Date);
    } catch (e) {
      return null;
    }
  };