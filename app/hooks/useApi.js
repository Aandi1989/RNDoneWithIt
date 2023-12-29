import { useState } from 'react';

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

//   this func we must use only replace urls of images got from backend
  function updateUrls(items) {
    return items.map((item) => ({
      ...item,
      images: item.images.map((image) => ({
        ...image,
        url: image.url.replace("http://37.214.61.38", "http://192.168.100.22"),
        thumbnailUrl: image.thumbnailUrl.replace("http://37.214.61.38", "http://192.168.100.22"),
      })),
    }));
  }

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setError(false);
    // console.log(response.data[0]);
    //   this func we must use only replace urls of images got from backend
    const updatedListings = updateUrls(response.data);
    setData(updatedListings);
  };

  return { data, error, loading, request };
};

