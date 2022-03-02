import API from './network';
//登录
export const login = params => API.request({ url: '/login', method: 'post', data: params });

//用户
export const getUserList = params => API.request({ url: 'getUserList', method: 'get', data: params });

export const addUser = params => API.request({ url: 'addUser', method: 'post', data: params });

export const deleteUser = params => API.request({ url: 'deleteUser', method: 'delete', data: params });

export const editUser = params => API.request({ url: 'editUser', method: 'post', data: params });