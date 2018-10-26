import axios from 'axios';
import store from '../../store'
import { localObj } from "./tools"

const localUrl = "/api/api/elm";
axios.defaults.baseURL = localUrl;

axios.interceptors.request.use(config => {
    //  dosomething
    let token = localObj('token');
    if(token && token != null){
        config.headers.authorization = token;
    }
    return config;
}, error => {
    return Promise.reject(error)
})
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
    //  用户登入
    userLogin(user){
        // return axios.post(localUrl+'/login',user)
        return axios({
            method: 'post',
            url: '/user/login',
            data: user
        })
    },
    getNews(){
        return axios({
            method:'post',
            url: '/home/news',
        })
    },
}