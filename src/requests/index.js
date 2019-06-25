const axios = require('axios');
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';

//拦截请求
axios.interceptors.request.use( config =>{
    Indicator.open({
        text: 'Loading...',
      });
    return config
})

//拦截传回数据
axios.interceptors.response.use( resp =>{
    if(resp.status === 200 ){
        Indicator.close();
        return resp.data
    }else{
        Toast(resp.status);
    }
})
//获取列表
export const getTab = () =>{
    return axios.get('/api/tabs')
}
//获取商品数据
export const getCategories = (id, page) => {
    var start = (page-1)*20 
    return axios.get(`/api/tab/${id}/feeds?start=${start}&sort=0`)
}