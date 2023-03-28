import axios from 'axios';

export const getPosts = async (search, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?per_page=12&q=${search}&page=${page}&key=33984923-dc45a9a53eac0b81e2d5e1fe7&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
