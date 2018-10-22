import axios from 'axios';
import store from '../../store'

const localUrl = "/api/api/elm";
// axios.defaults.baseURL = localUrl;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
    //  用户登入
    userLogin(user){
        // return axios.post(localUrl+'/login',user)
        return axios({
            method: 'post',
            url: localUrl + '/user/login',
            data: user
        })
    },
    getNews(){
        return axios({
            method:'post',
            url: localUrl + '/home/news',
        })
    },
    // get_home_hots(){
    //     return axios({
    //         method:'post',
    //         url: localUrl + '/home/hots',
    //     })
    // },
    // get_home_newcpy(){
    //     return axios({
    //         method:'post',
    //         url: localUrl + '/home/newcpys',
    //     })
    // }
}