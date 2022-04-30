// --------- Image hover ----------

let body = document.querySelector('body')
let mainImage = body.querySelectorAll('.main-img')
let altImageArray = Array.from(document.querySelectorAll('.alt-img'))
let holder = ""
console.log(document)
console.log(body)
console.log(mainImage)
console.log(altImageArray)

altImageArray.forEach(img => {
    img.addEventListener('mouseenter', (e) => {
        mainImage.src = e.target.src
    })
})
