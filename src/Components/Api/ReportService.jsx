import axios from 'axios';

export const getOrders = () => {
  return axios
  .get('orders', {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}

export const getItems = () => {
  return axios
  .get('items', {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}

export const getSupplierList = () => {
  return axios
  .get('suppliers-list', {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}

export const getCustomerList = () => {
  return axios
  .get('customers-list', {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}