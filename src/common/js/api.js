import axios from 'axios';
import store from '../../store'

const localUrl = "/api/api/elm/user/login";
// axios.defaults.baseURL = localUrl;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
    //  用户登入
    userLogin(user){
        // return axios.post(localUrl+'/login',user)
        return axios({
            method: 'post',
            url: localUrl,
            data: user,
            // transformRequest: [function (data) {
            //     // let ret = reData(data);
            //     alert(JSON.stringify(data))
            //     return data
            // }]
        })
    }
}