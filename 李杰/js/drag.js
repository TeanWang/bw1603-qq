
function drag() {

    title.onmousedown = function (e) {
        this.style.cursor = 'move';
        var e = e || window.event;
        // 获取鼠标当前的距离
        var x = e.clientX;
        var y = e.clientY;

        var left = box.offsetLeft + box.offsetWidth / 2;
        var top = box.offsetTop + box.offsetHeight / 2;

        document.onmousemove = function (e) {
            var e = e || window.event;
            // 获取鼠标当前的距离
            var _x = e.clientX;
            var _y = e.clientY;
            box.style.left = _x - x + left + 'px';
            box.style.top = _y - y + top + 'px';
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            box.style.cursor = 'default';
        }

        return false;

    }
}