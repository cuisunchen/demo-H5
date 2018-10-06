import axios from 'axios';
import store from '../../store'

const localUrl = "http://192.168.8.48:9001/api/elm/";

axios.defaults.baseURL = localUrl;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
    //  用户登入
    userLogin(user){
        return axios.post('user/login',user)
    }
}