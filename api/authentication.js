import React, { Component } from "react";
import { post } from './fetch';


export const login = (phone, password) => {
  return post('/users/login', {
        phone: phone,
        password: password,
      
  });
};

export const createAccount = (email, password) => {
  return post('/users/add', {
    user: { email, password },
  });
};