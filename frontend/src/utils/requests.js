import { API_URL } from "./env";

export const get = (url) => {
  return fetch(`${API_URL}${ url }`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
  }).then((response) => {
      if (response.status === 401) {
          throw new Error(response.status);
      }
      return response.json();
  });
};

export const post = (url, data) => {
  return fetch(`${API_URL}${ url }`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  }).then((response) => {
      if (response.status === 401) {
          throw new Error(response.status);
      }
      return response.json();
  });
};

export const put = (url, data) => {
  return fetch(`${API_URL}${ url }`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data),
  }).then((response) => {
      if (response.status === 401) {
          throw new Error(response.status);
      }
      return response.json();
  });
};

export const del = (url, data) => {
  return fetch(`${API_URL}${ url }`, {
      method: 'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  }).then((response) => {
      if (response.status === 401) {
          throw new Error(response.status);
      }
      return response.json();
  });
};