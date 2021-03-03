window.addEventListener("load", function (docEv) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    // config canvas

    const background = new Image()
    const scale = 0.3
    background.src = "./img/background.png"
    background.onload = () => {
        var dstWidth = background.width * scale
        var dstHeight = background.height * scale
        canvas.width = dstWidth
        canvas.height = dstHeight
        ctx.drawImage(background, 0, 0, background.width, background.height, 0, 0, dstWidth, dstHeight)
    }
    document.getElementById("overlay_source").addEventListener("change", function (inputEv) {
//        document.getElementsByClassName("overlay_text")[0].innerText = inputEv.srcElement.value
        ctx.font = "36px serif"
        ctx.fillText(inputEv.srcElement.value, 90, 140)
    })
})
