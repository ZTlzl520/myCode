// alert('456')
//定义获取节点的模块
define(function() {
    function get(son, parent) {
        parent = parent || document
        return typeof son === 'string' ? parent.querySelector(son) : son
    }

    function gets(son, parent) {
        parent = parent || document
        return typeof son === 'string' ? parent.querySelectorAll(son) : son
    }
    // 返回对象
    return {
        get: get,
        gets: gets
    }
})