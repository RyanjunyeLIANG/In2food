import axios from 'axios';

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

export const addItems = (data) => {
  return axios
  .post('items', data, {
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

export const editItems = (id, data) => {
  return axios
  .put('items/'+id, data, {
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

export const deleteItems = (id) => {
  return axios
  .delete('items/'+ id)
  .then(res => {
    console.log('deleted items: '+ id);
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

export const addSuppliers = (data) => {
  return axios
  .post('suppliers', data, {
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