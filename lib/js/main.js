


$(function () {

    loadAll(1);
    loadAll(2);
    loadAll(3);
    loadAll(8);
    islogin();
    changeTab();
    slider();
    setTab();
    mousehover();
    // loginRegist();

    register();
    login();
    getCartSum();
})








// 登录显示用户名
function islogin() {  
    var token = Cookies.get('u-token');
    if (token) {
        console.log(token);
        var html = `<i></i><span>${Cookies.get('u-username')}</span>
        <a class="exit" href="javascript:;">退出，请点击</a>`;
        $('.header_right> em').html(html);
 
      
        console.log(Cookies.get('u-username'));

        // 退出登录
    
        $('.header_right em a.exit').click(function () {
            var question = confirm('是否确认退出？');
            if (question) {
                Cookies.remove('u-token');
                // alert('退出成功')
                location.reload();
            }
        })

    }
}



// login/reg 转换

function loginRegist() {
    var $popup = $('.popup .gototitle .it1');
    var $itlog = $('.popup_log .gototitle .it1');
    $popup.eq(0).click(function () {
        console.log('1');
        $('.popup').show();
        $('.popup_log').hide();
    });
    $popup.eq(1).click(function () {
        console.log('2');
        $('.popup_log').show();
        $('.popup').hide();
    });

    $itlog.eq(0).click(function () {
        console.log('1');
        $('.popup').show();
        $('.popup_log').hide();
    });
    $itlog.eq(1).click(function () {
        console.log('2');
        $('.popup_log').show();
        $('.popup').hide();
    });

}


function register() {
    $('.bindusergray').click(function () {
        var username = $('.gotoregister_con #username').val();
        var psd = $('.gotoregister_con #psd').val();
        var sex = "";
        var email = $('.gotoregister_con #email').val

        var params = {
            username: username,
            password: psd
        }
        let regApi = `http://jx.xuzhixiang.top/ap/api/reg.php`;
        axios.get(regApi, {
            params: params
        }).then(res => {
            // console.log(res);
            if (res.data.code == 1) {
                alert(res.data.msg);
                location.reload();

            } else {
                alert(res.data.msg)
            }
        })
        return false;

    })
}

function login() {
    $('.btnLogin').click(function () {
        var username = $('.gotologin_con #username').val();
        var psd = $('.gotologin_con #psd').val();
        var params = {
            username: username,
            password: psd,
        }
        let loginApi = `http://jx.xuzhixiang.top/ap/api/login.php`;
        axios.get(loginApi, {
            params: params
        }).then(res => {
            // console.log(res);
            if (res.data.code == 1) {
                Cookies.set('u-token', res.data.data.id, {
                    expires: 365
                });
                Cookies.set('u-username', res.data.data.username, {
                    expires: 365
                });
                alert(res.data.msg)
                location.href = 'index.html';
            }
        })
        return false;


    })
}




// 数据加载

function loadAll(sum) {
    let url = `http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=${sum}`;
    let uid = 19650;
    // let uid = 20395;

    if (sum == 1) {
        axios.get(url, {
            params: {
                uid
            }
        }).then((result) => {
            // console.log(result.data.data);
            let arr = result.data.data.map(v =>
                `<a target="_blank" href="item.html?pid=${v.pid}">
            <div class="ad-font">
                <p class="fontover ft16 c000" title="${v.pname}">连衣裙</p>
                <p class="fontover ft14 cf40 mt5"> ${v.pdesc}</p>
            </div>
            <img src="${v.pimg}">
            </a>`
            )
            $('.bigimg1').html(arr.join(''));
        })
    }

    if (sum == 2) {
        axios.get(url, {
            params: {
                uid
            }
        }).then((result) => {
            // console.log(result.data.data);
            let arr = result.data.data.map(v =>
                `<div class="border-r bigimg2 rela">
            <a target="_blank" href="item.html?pid=${v.pid}">
            <div class="ad-font">
                <p class="fontover ft16 c000" title="${v.pdesc}">连衣裙</p>
                <p class="fontover ft14 cf40 mt5">${v.pname}</p>
            </div>
            <img src="${v.pimg}">
            </a></div>`
            )
            $('.ad-twobox').html(arr.join(''));
        })
    }

    if (sum == 3) {
        axios.get(url, {
            params: {
                uid
            }
        }).then((result) => {
            // console.log(result.data.data);
            let arr = result.data.data.map(v =>
                `<div class="bigimg3 fl border-r overflow rela">
            <a target="_blank" href="item.html?pid=${v.pid}">
            <div class="ad-font">
                <p class="fontover ft16 c000" title="${v.pname}">连衣裙</p>
                <p class="fontover ft14 cf40 mt5"> ${v.pdesc}</p>
            </div>
            <img src="${v.pimg}">
            </a></div>`
            )
            $('.ad-threebox').html(arr.join(''));
        })
    }

    if (sum == 8) {
        axios.get(url, {
            params: {
                uid
            }
        }).then((result) => {
            // console.log(result.data.data);
            let arr = result.data.data.map(v =>
            `<li class="fl"> 
                <a target="_blank" href="item.html?pid=${v.pid}">
                <div class="eight-proimg">
                <img src="${v.pimg}" class="zom">
                </div>
                <h1 class="ft12 c666 overflow">${v.pdesc}</h1>
                <div class="ft16 cred dprice mt5">￥${v.pprice}</div>
                </a> 
            </li>`
            )
            $('.eight-listpro ul').html(arr.join(''));
        })
    }

}




// dropdown
function mousehover() {
    $('.dropdown').mouseenter(function () {
        $(this).addClass('open').siblings().removeClass('open');
    });
    $('.dropdown').mouseleave(function () {
        $(this).removeClass('open');
    });
}

// 分类转换
function changeTab() {
    $('.maincates-title span').hover(function () {
        $(this).addClass('hov').siblings().removeClass();
        // $('#catefm').show();
    })
};

// 轮播图
function slider() {
    var count = 0;
    var $li = $('.slider li');
    var $a = $('.index-num a');
    $a.eq(count).addClass('active')

    // 自动轮播
    var timer = setInterval(function () {
        count++;
        if (count >= $li.length) {
            count = 0;
        }
        $li.eq(count).fadeIn().siblings('li').fadeOut();
        $a.eq(count).addClass('active').siblings().removeClass();

    }, 2000);
}



function setTab() {


    $('.lib-menu li').hover(function () {
        $(this).addClass('border-tab').siblings('li').removeClass('border-tab');
        var idx = $(this).index() + 1;
        if (idx == 1) {
            $(this).parents('.lib-menu').siblings('.lib_conbox').children('.1')
                .show().siblings().hide();
        }
        if (idx == 2) {
            $(this).parents('.lib-menu').siblings('.lib_conbox').children('.2')
                .show().siblings().hide();
        }

        if (idx == 3) {
            $(this).parents('.lib-menu').siblings('.lib_conbox').children('.3')
                .show().siblings().hide();
        }

        if (idx == 4) {
            $(this).parents('.lib-menu').siblings('.lib_conbox').children('.4')
                .show().siblings().hide();
        }
    })
}



// 计算购物车的数量在页面显示
function getCartSum() {
    var count = 0;
    var dataArr = JSON.parse(localStorage.getItem('myCart'));
    // console.log(dataArr);
    for (const i in dataArr) {
        count += parseInt(dataArr[i].n);
    }
    // console.log(count); 
    $('.cart_num').html(count);

}

