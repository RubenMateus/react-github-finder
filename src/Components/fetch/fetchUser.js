import instance from './axiosClient';

const FetchUser = async (userId) => {
  const { data : { name, html_url : url  }} = await instance.get(`/users/${userId}`);

  return { name, url };
};

export default FetchUser;
