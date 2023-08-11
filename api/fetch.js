import React, { Component } from "react";
import { API_URL } from './secrets';
import { getToken } from './token';


const getHeaders = async () => {
  
    const headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
    };
  
   
  
    return headers;
  };

  var serializeJSON = function(data) {
    return Object.keys(data).map(function (keyName) {
      return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
    }).join('&');
  }
  
  
  export const post = async (destination, body) => {
    const headers = await getHeaders();
  
    const result = await fetch(`${API_URL}${destination}`, {
      method: 'POST',
      headers,
      body: serializeJSON(body),
    });
  
    console.log(result);
  
    if (result.ok) {
      return await result.json();
    }
    throw { error: result.status };
  };
  
  export const get = async (destination) => {
    const headers = await getHeaders();
  
    const result = await fetch(`${API_URL}${destination}`, {
      method: 'GET',
      headers,
    });

    console.log(result);
  
    if (result.ok) {
      return await result.json();
    }
  
    throw { error: result.status };
  };