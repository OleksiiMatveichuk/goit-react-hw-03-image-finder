import axios from 'axios';
// const primer = '?q=cat&page=1'`search?query=${query}&page=${page}``?q=${query}&page=${page}`;

// const API_KEY = '36940250-ff22d55fc3b5b349bac83f37c';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
  key: '36940250-ff22d55fc3b5b349bac83f37c',
};

export const getImages = async (query, page) => {
  //   try {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  console.log('data :>> ', data);
  return data;
  //   } catch (err) {
  //     console.log('err.message :>> ', err.message);
  //   }
};
