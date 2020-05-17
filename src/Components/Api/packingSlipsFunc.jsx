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