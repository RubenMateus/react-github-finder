import instance from './axiosClient';

export const fetchByName = async (userName) => {
  const { data } = await instance.get(`/users/${userName}`);

  return data;
};

export const fetch = async (query) => {
  const {data: { items }} = await instance.get(`/search/users?q=${query}`);

  return items;
};
