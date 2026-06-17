import React from 'react';
import { BsCart } from "react-icons/bs";
let array=[
    {img:"./i1.png",cap:"Delicious Pizza",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$20"},
    {img:"./i2.png",cap:"Delicious Burger",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$15"},
    {img:"./f3.png",cap:"Delicious Pizza",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$17"},
    {img:"./f4.png",cap:"Delicious Pasta",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$18"},
    {img:"./f5.png",cap:"French Fries",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$10"},
    {img:"./f6.png",cap:"Delicious Pizza",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$15"},
    {img:"./f7.png",cap:"Tasty Burger",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$12"},
    {img:"./f8.png",cap:"Tasty Burger",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$14"},
    {img:"./f9.png",cap:"Delicious Pasta",content:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",cart:"<BsCart />",dol:"$10"}
]
const Cards = () => {
return <>
{ 
    array.map=(p)=>{
        let[img,cap,content,cart,dol]=p;
        return<>
        <div>
            <aside></aside>
            <aside></aside>
        </div>
        </>
    }

}

</>
};

export default Cards;