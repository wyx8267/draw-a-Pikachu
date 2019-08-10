!function () {
    var duration = 40

    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 70
                break
            case 'normal':
                duration = 40
                break
            case 'fast':
                duration = 10
                break
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = prefix + code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration);
    }
    let code = `
/*
* 让我们来画一只皮卡丘吧！
*
* 首先准备黄皮耗子的皮！
*/

.preview-wrapper {
    flex: 1;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
}

.preview {
    width: 100%;
    height: 165px;
    position: relative;
}

/*
* 画一个鼻子！
*/

.nose {
    border-style: solid;
    border-width: 10px 12px;
    border-radius: 11px;
    border-color: black transparent transparent;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 28px;
}

/*
* 添两只眼睛！
*/

.eye {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #2E2E2E;
    position: absolute;
    box-sizing: border-box;
    border: 2px solid black;
}

.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: #fff;
    position: absolute;
    border-radius: 50%;
    left: 7px;
    border: 2px solid black;
}

.eye.left {
    right: 50%;
    transform: translateX(-90px);
}

.eye.right {
    left: 50%;
    transform: translateX(90px);
}

/*
* 再打上腮红（x）
*/

.face {
    width: 69px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    top: 85px;
    position: absolute;
}

.face.left {
    right: 50%;
    transform: translateX(-116px);
}

.face.right {
    left: 50%;
    transform: translateX(116px);
}

/*
* 最后是嘴~~
*/

.upperLip {
    height: 25px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 52px;
    background: #FEE433;
    z-index: 1;
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}

.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}

.lowerLip-wrapper {
    bottom: -30px;
    left: 50%;
    transform: translateX(-75px);
    position: absolute;
    height: 135px;
    width: 150px;
    overflow: hidden;
}

.lowerLip {
    width: 150px;
    height: 1000px;
    border-radius: 100px/500px;
    border: 2px solid black;
    bottom: 0;
    background: #990513;
    position: absolute;
    overflow: hidden;
}

.lowerLip::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50px);
    width: 100px;
    height: 100px;
    background: #FC4A62;
    border-radius: 50%;

/*
* Pika~Pika~chu~
*/
}`
    writeCode('', code)
}.call()