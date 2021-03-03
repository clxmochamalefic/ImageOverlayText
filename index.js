window.addEventListener("load", function (docEv) {
    document.getElementById("overlay_source").addEventListener("change", function (inputEv) {
        document.getElementsByClassName("overlay_text")[0].innerText = inputEv.srcElement.value
    })
})
