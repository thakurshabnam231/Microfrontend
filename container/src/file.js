import { mount as productsMount } from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';
console.log("container");
mount (document.querySelector('#root'));
mount (document.querySelector('#my-cart'))