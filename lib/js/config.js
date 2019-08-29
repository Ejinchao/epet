// 配置文件

//本地服务器 dev （内网地址  10.01.1   192.168）

//开发服务器 dev    117.160.136.15

// 正式服务器 线上服务器  生产服务器 生产环境 product  pro

let flag = 0;
// let obj  = {
// 	localDev:'http://jx.xuzhixiang.top',
// 	proDev:'aaaaaa',
// 	pro:''
// }
let host = null;
if(flag==0){
	host = 'http://jx.xuzhixiang.top'
}else if(flag==1){
	host = 'http://192.168.11.10'
}

//https://www.npmjs.com/package/js-cookie
// https://www.npmjs.com/package/axios

let loginApi = host+`/ap/api/login.php`

let regApi = host+`/ap/api/reg.php`

// http://jx.xuzhixiang.top/ap/api/productlist.php
let plistApi = host+`/ap/api/productlist.php`


// http://jx.xuzhixiang.top/ap/api/detail.php
let detailApi = host+`/ap/api/detail.php`


// http://jx.xuzhixiang.top/ap/api/add-product.php
let addCartApi = host+`/ap/api/add-product.php`

// http://jx.xuzhixiang.top/ap/api/cart-list.php
let CartListApi = host+`/ap/api/cart-list.php`

// http://jx.xuzhixiang.top/ap/api/cart-delete.php
let CartDelApi = host+`/ap/api/cart-delete.php`

// http://jx.xuzhixiang.top/ap/api/cart-update-num.php
let CartUpdateApiList = host+`/ap/api/cart-update-num.php`