import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
    baseURL:'http://192.168.100.22:9000/api',
    // baseURL:'http://37.214.61.38:9000/api', /* my IP which doesn't work  */
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);
    

    if(response.ok){
        cache.store(url, response.data);
        // the data will be set in cache and can be get by 
        // const data = await AsyncStorage.getItem('cache/listings');
        // const value = JSON.parse(data);
        // but in our case we can't dispaly it on the screen of devicec cause our fake backend don't
        // revert us error in case of failed request so we will see eternal preloader
        return response;
    }
   
    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
}


export default apiClient;