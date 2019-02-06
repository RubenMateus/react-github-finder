import instance from './axiosClient';

const fetchUser = async (query) => {
  const {data: { items }} = await instance.get(`/search/users?q=${query}`);

  return items;
};

export default fetchUser;
