import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

// post request doesn't work with error on backend side 
/* node:fs:1868
  return binding.unlink(path);
                 ^
Error: EPERM: operation not permitted, unlink 
'D:\Studying\MoshCourses\The Ultimate React Native Series Advanced Concepts\4.Networking\2.Backend\Backend\uploads\5cdd69b4b30c0c5b030c8f65c36d0e55' */ 

const addListing = (listing, onUploadProgress) => {
    const data = new FormData();
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);

    listing.images.forEach((image, index) => 
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        }));

    if(listing.location){
        data.append('location', JSON.stringify(listing.location));
    }

    return client.post(endpoint, data, {
        onUploadProgress: (progress) => 
            onUploadProgress(progress.loaded / progress.total), 
    });
}

export default {
    addListing,
    getListings,
}
