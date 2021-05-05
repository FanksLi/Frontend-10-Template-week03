const images = require("images");


function render (viewport, element) {
    if (element.style) {
        var img = images(element.style.width, element.style.height);
        if (element.style['background-color']) {
            var reg = /rgb\((\d+), (\d+), (\d+)\)/;
            // let arr = null;
            let color = element.style['background-color'] || 'rgb(0, 0, 0)';
            color.match(reg);
            // console.log(typeof color)
            // color = color.replace(/rgb\(/, '')
            // arr = color.split(',');
            // arr = arr.map(item => {
            //     item = item.trim();
            //     item = item.replace(/\)/, '')
            //     return item
            // });
            img.fill(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$2), 1);
            // img.fill(Number(arr[0]), Number(arr[1]), Number(arr[2]), 1);
            viewport.draw(img, element.style.left || 0, element.style.top || 0);
        }
    }
    if (element.children) {
        for (let child of element.children) {
            render(viewport, child)
        }
    }
}

module.exports = render;