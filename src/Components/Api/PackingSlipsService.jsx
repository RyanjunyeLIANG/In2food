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

export const addOrders = (data) => {
  return axios
  .post('orders', data, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  })
  .then(res => {
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}

export const editOrders = (id, data) => {
  return axios
  .put('orders/'+id, data, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  })
  .then(res => {
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}

export const deleteOrders = (id) => {
  return axios
  .delete('orders/'+ id)
  .then(res => {
    console.log('deleted orders: '+ id);
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

export const addCustomers = (data) => {
  return axios
  .post('customers', data, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  })
  .then(res => {
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}