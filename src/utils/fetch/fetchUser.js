import instance from './axiosClient';

const fetchUser = async (userId) => {
  const { data } = await instance.get(`/users/${userId}`);

  return data;
};

export default fetchUser;
