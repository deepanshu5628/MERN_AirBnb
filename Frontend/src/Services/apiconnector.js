

export async function apiconnector(method,url,body,headers,params){
    let res=await fetch(url,{
        method:method,
        headers:headers? headers:{"Content-Type":"application/json"},
        body:body?JSON.stringify(body):null,
        params:params? params:null,
        
    });

    let data=await res.json();
    return data;
}


import axios from "axios";
export const axiosinstance= axios.create({});
export const  axiosapiconnector= (method,url,bodydata,headers,params)=>{
    return axiosinstance({
        method:`${method}`,
        url:`${url}`,
        data:bodydata?bodydata:null,
        headers:headers ?headers:null,
        params:params? params :null,
    })
}