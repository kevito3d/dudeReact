import { getToken } from "./session";

// variable for apiurl
const apiurl = "http://192.168.247.1:3002/api/";

export const getFeching = async (url) => {
  return fetch(`${apiurl}${url}`, {
    headers: {
      Authorization: getToken(),
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const postFeching = async (url, data) => {
  return fetch(`${apiurl}${url}`, {
    method: "POST",
    headers: {
      Authorization: getToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const putFeching = async (url, data) => {
  return fetch(`${apiurl}${url}`, {
    method: "PUT",
    headers: {
      Authorization: getToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const deleteFeching = async (url) => {
  return fetch(`${apiurl}${url}`, {
    method: "DELETE",
    headers: {
      Authorization: getToken(),
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
