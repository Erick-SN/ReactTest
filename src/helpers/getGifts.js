export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=LMZJRFlqIoXoNqXiofmZPL9LPBhW33rU`;
  const response = await fetch(URL);
  const { data } = await response.json();
  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
  return gifts;
};
