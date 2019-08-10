// alert('123')
//找到依赖模块   用obj接受返回的对象
define(['moudule1'], function(obj) {
    //获取节点
    var oul = obj.get('#oul')
    var nav = obj.get('#nav')
    var cur = ''
    var num = null
    var q = null
        // varnav.innerHTML = null
    var s = null
    console.log(oul)
        //添加点击事件
    oul.onclick = function(e) {
        // nav.innerHTML = ''
        var e = e || window.event
        var tar = e.target || e.srcElement
        if (tar.innerHTML == '+' || tar.innerHTML == '-' || tar.innerHTML == '*' || tar.innerHTML == '/') {
            // num = tar
            q = tar.innerHTML
            cur += tar.innerHTML
            nav.innerHTML = cur
                //nav.innerHTML = ""
                // console.log(num)
                // console.log(tar)
        } else if (tar.innerHTML == '=') {
            //nav.innerHTML = ""
            // console.log(cur)
            var w = cur.indexOf(q)
            console.log(w)
            var num = cur.slice(0, 2)
            var num1 = cur.slice(w + 1)
            switch (q) {
                case '+':
                    nav.innerHTML = cur + '=' + `${num*1+num1*1}`
                    break;
                case '-':
                    nav.innerHTML = cur + '=' + `${num*1-num1*1}`
                    break;
                case '*':
                    nav.innerHTML = cur + '=' + `${num*num1}`
                    break;
                case '/':
                    nav.innerHTML = cur + '=' + `${num/num1}`
                    break;
            }
            console.log(nav.innerHTML.slice(nav.innerHTML.length - 1))
                // nav.innerHTML = option
            if (nav.innerHTML.slice(nav.innerHTML.length - 1) == 'N') {
                alert('请输入正确的格式')
                nav.innerHTML = ''
            }
            // console.log(num1)
            // alert()
        } else if (tar.tagName == 'LI') {
            // alert()
            cur += tar.innerHTML
            nav.innerHTML = cur
                // console.log(cur)
        }

        //判断如果是LI的话
        // if (tar.tagName == 'LI') {
        //     var q = prompt('请输入第一个数字')

        //     if (typeof q == Number) { nav.innerHTML += q } else {
        //         alert('请输入数字')
        //     }
        //     var e = prompt('请输入第二个数字')
        //     if (typeof e == Number) { nav.innerHTML += '' + q } else {
        //         alert('请输入数字')
        //     }
        //     var w = prompt('请输入运算符')
        //     if (w == '+') {
        //         alert(q * e)
        //     }
        //     nav.innerHTML += w
        // alert(tar.innerHTML)
        // //把点击的内容添加到上面的文本框里边
        // if (tar.innerHTML !== 'CE' && tar.innerHTML !== 'del') {
        //     nav.innerHTML += tar.innerHTML
        //     console.log(Number(tar.innerHTML))
        //     if (Number(tar.innerHTML) == NaN) { alert('请输入正确格式') }
        //     if (Number(tar.innerHTML) / Number(0) === Number(0)) { alert() }
        //     if (tar.innerHTML == '=') {
        //         alert(nav.innerHTML)

        //     }
        // } else {
        //     //点击删除文本框内的内容
        //     nav.innerHTML = ''
        // }
        // }
    }
})