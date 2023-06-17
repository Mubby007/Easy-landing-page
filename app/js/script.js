const btnHamburger = document.querySelector("#btnHamburger")

const body = document.querySelector('body')

const header = document.querySelector(".header")

const overlay = document.querySelector(".overlay")

const fadeElems = document.querySelectorAll(".has-fade")

header.addEventListener("click",function(){

    if(header.classList.contains('open')) {//Close hamburger menu

        body.classList.add('noscroll')
        
        header.classList.remove('open')
        
        fadeElems.forEach(function(element){
            
            element.classList.add('fade-out')
            element.classList.remove('fade-in')

        })
    }

   
    else {body.classList.add('noscroll')
         header.classList.add('open')
         
         fadeElems.forEach(function(element){
            
             element.classList.add('fade-in') 
             element.classList.remove('fade-out')//open hamburger menu
             body.classList.add('noscroll')
             
            
         })

        }

        body.classList.remove('noscroll')
})