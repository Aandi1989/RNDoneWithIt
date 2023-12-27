import { create } from 'apisauce';

const apiClient = create({
    baseURL:'http://192.168.100.22:9000/api',
    // baseURL:'http://37.214.61.38:9000/api', /* my IP which doesn't work  */
});


export default apiClient;