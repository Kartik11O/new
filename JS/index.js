function Page1() {

    document.getElementById("page1").classList.add("Slide_left")
    document.getElementById("page2").style.visibility = "visible"
    document.getElementById("page2").classList.add("Show")


}
function Page2() {

    document.getElementById("page2").classList.remove("Show")
    document.getElementById("page2").classList.add("Slide_left")
    var P3 = document.getElementById("page3")
    P3.style.visibility = "visible"
    P3.classList.add("Show")

}

function Submit() {

    var two = document.getElementById("Fill")
    var one = document.getElementById("Fill2")
    var Warn1 = document.getElementById("warning")
    var P4 = document.getElementById("page4")

    if ((one.value.length == 0) || (two.value.length == 0)) {
        Warn1.classList.remove("W_text_hide")
        Warn1.classList.add("W_text")
        setTimeout(function(){
            Warn1.classList.add("W_text_hide")

        },3000)
    }

    else {
        P4.style.visibility = "visible"
        P4.classList.add("Show")
    }

}


    window.addEventListener("input" , function(){

        var TextS = document.getElementById("Text").value
        window.localStorage.setItem('Content', JSON.stringify(TextS))
        
    })

   

setTimeout(function () {
    var test = JSON.parse(localStorage.getItem('Content'))
    document.getElementById("Text").value = test
    
}, 1000)



window.addEventListener("focus" , function(){
    document.getElementById("container_phone").classList.add("Phone_C")
})


function Hide() {
    
   let page5 = document.getElementById("page5")

   page5.style.visibility = "visible"
   page5.classList.add("Show")

    }
