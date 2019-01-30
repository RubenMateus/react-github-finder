import instance from './axiosClient';

const fetchUser = async (userId) => {
  const {data : { name, html_url : url  }} = await instance.get(`/users/${userId}`);

  return { name, url };
};

export default fetchUser;
