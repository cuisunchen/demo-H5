module.exports = {
    sessionObj(){
        let arg = arguments;
        let sessionObj;
        if(!arg){
            throw new Error('请输入需要缓存的对象');
        }
        if(arg.length > 1){
            sessionStorage.setItem(arg[0],arg[1])
        }else{
            sessionObj = sessionStorage.getItem(arg[0])
            return sessionObj;
        }
        
    }
}