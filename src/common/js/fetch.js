require('es6-promise').polyfill();
require('isomorphic-fetch');
const localUrl = "/api/api/elm";

export default async ( url = '', type = 'GET', method = 'fetch', data = {})=>{
    type = type.toUpperCase();
    url = localUrl + url;
    debugger
    //  get请求
    if( type == 'GET' ){
        let dataStr = '';   //  GET请求  在url上拼接数据
        Object.keys(data).forEach( key => {
            dataStr += key + '=' + data[key] + '&';
        })
        if(dataStr != ''){
            dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr;
        }
    }

    //  post请求
    if( type == 'POST' ){
        let headConfig = {
            method: type,
            credentials:'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',		
            },
            body: JSON.stringify(data),
            mode: 'cors',
            cache: 'default'
        }        
        try {
            let res = await fetch(url,headConfig)
            let resObj = await res.json();
            return resObj
        } catch (error) {
            throw new Error(error)
        }            
    }
}