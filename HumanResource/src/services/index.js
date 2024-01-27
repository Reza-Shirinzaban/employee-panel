import axios from "axios";

export function loginEmployee(username,password) {
    return axios({
        url:"http://127.0.0.1:8000/login",
        method:'post',
        data:{
            username:username,
            password:password
        }
    })
}
