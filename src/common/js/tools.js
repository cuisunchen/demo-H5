module.exports = {
    sessionObj(){
        let arg = arguments;
        let sessionObj;
        if(!arg){
            throw new Error('请输入需要session缓存的对象');
        }
        if(arg.length > 1){
            sessionStorage.setItem(arg[0],arg[1])
        }else{
            sessionObj = sessionStorage.getItem(arg[0])
            return sessionObj;
        }        
    },
    localObj(){
        let arg = arguments;
        let localObj;
        if(!arg){
            throw new Error('请输入需要local缓存的对象');
        }
        if(arg.length > 1){
            localStorage.setItem(arg[0],arg[1])
        }else{
            localObj = localStorage.getItem(arg[0])
            return localObj;
        } 
    }
}