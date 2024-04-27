import { useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";

function Listings() {
    let data=[
        {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
    {
        "_id": "66289af76a60e790df309272",
        "title": "listing one",
        "description": "lj;saf;alj",
        "image": "https://res.cloudinary.com/dwpqblybr/image/upload/v1713937143/AirBNB/tssojxfia3a0abajscxg.png",
        "price": 888,
        "country": "india",
        "location": "ch.dadri",
        "reviews": [
            "6628ae80703b89e6a2b66114"
        ],
        "owner": {
            "_id": "662798c00948736cbcd3335f",
            "firstName": "Deepanshu",
            "lastName": "yadav",
            "email": "d2810202@gmail.com",
            "password": "$2b$10$6OKTHcgDwq6qzR0phoeX/uSXjyMj7/l86AkCmnyINuVKBhuubrnvW",
            "image": "https://ui-avatars.com/api/?name=Deepanshu+yadav",
            "__v": 0
        },
        "category": "Beach",
        "__v": 0
    },
];


    return (
        <div className="min-h-[calc(100vh-14rem)] p-8 px-20 flex gap-6 flex-wrap">
            {
                data.map((list,index)=>{
                    console.log(list);
                    return <div key={index} className="flex flex-col rounded-lg cursor-default">
                        <img src={list.image} alt="img"  className=" w-64 h-60 rounded-md cursor-pointer"/>
                        <p  className="font-semibold">{list.title}</p>
                        <p className="flex items-center"> <FaRupeeSign/> {list.price}/night</p>
                    </div>
                })
            }
        </div>
    )
}
export default Listings;