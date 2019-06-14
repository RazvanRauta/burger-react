/*
 * @author: Razvan Rauta
 * Date: 14.06.2019
 * Time: 14:24
*/

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5ae8d.firebaseio.com'
});

export default instance;