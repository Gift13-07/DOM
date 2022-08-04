// let dom = document;
// let obj = {name: 'my name'}
// console.log(obj)
// console.log(dom)
// let h2 = document.getElementById("greet")
// h2.textContent = "Gift Chinwendu"
// console.log(h2)
// //let grtBtn = document.getElementsByClassName("grtBtn")
// let grtBt = document.getElementById("grtBt")
// grtBt.textContent = "Submit"
// //console.log(grtBtn)
// let input = document.getElementsByTagName("input")
// console.log(input)

//Creating JavaScript Element
let div = document.createElement("div")
let h1 = document.createElement("h1")
h1.textContent = "DOM Manipulation";
div.appendChild(h1)
let show = document.getElementById("demo")
show.appendChild(div)
let p = document.createElement('p')
p.textContent = "We did it"
show.append(p)
console.log(show)