import instance from './axiosClient';

export const fetch = async (query) => {
  const { data: { items }} = await instance.get(`/search/users?q=${query}`);

  return items;
};

export const fetchByName = async (name) => {
  const { data } = await instance.get(`/users/${name}`);

  return data;
};
