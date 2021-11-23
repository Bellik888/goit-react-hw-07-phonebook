import axios from 'axios';

const BASE_URL = 'https://619a1c149022ea0017a7b036.mockapi.io/api/v1/';

export const getContacts = async () => {
  let { data } = await axios.get(`${BASE_URL}Contacts`);
  console.log('mockapi', data);
  return data;
};

export const addContact = async contact => {
  let { data } = await axios.post(`${BASE_URL}Contacts`, contact);
  return data;
};

export const deleteContact = async id => {
  await axios.delete(`${BASE_URL}Contacts/${id}`);
  console.log('mockapi', id);
  return id;
};
