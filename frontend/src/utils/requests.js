export const get = (url) => {
  return fetch(`${localStorage.getItem('http_server')}${url}`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  }).then((response) => {
      if (response.status === 401) {
          throw new Error(response.status);
      }
      return response.json();
  });
};

export const post = (url, data) => {
  return fetch(`${localStorage.getItem('http_server')}${url}`, {
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
  return fetch(`${localStorage.getItem('http_server')}${url}`, {
      method: 'PUT',
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

export const del = (url, data) => {
  return fetch(`${localStorage.getItem('http_server')}${url}`, {
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