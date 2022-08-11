const nav = document.querySelectorAll('nav')
const form = document.querySelectorAll('form')[0]
const formInputs = Array.from(document.querySelectorAll('.form__input'))


console.log(formInputs)
// console.log(form)


// ---------------- FORM VALIDATION ------------------

// ---------------- FORM VALIDATION ------------------

        function removeAlert () {
            formInputs.forEach (input => {
                if (input.classList.includes('form__input--error')) {
                    input.classList.remove('form__input--error')
                }
            })
        }

        function formRedAlert(e) {
            formInputs.forEach(input => {
                
                if (input.value === "" || input.value === null) {
                    input.classList.add('form__input--error');
                    e.preventDefault();
                } else {
                    removeAlert();
                }
            })
        }

    
        form.addEventListener('submit', (e) => {
            console.log(e)
            formRedAlert(e)
        })

        
// ---------------------- DYNAMIC ADD --------------------------


// ---------------------- DYNAMIC ADD --------------------------

// const array_Container = document.querySelectorAll('.array_container')
// const dynamic_Container = array_Container.querySelectorAll('.dynamic_input_container')


const plus_btns = Array.from(document.querySelectorAll('.plus_btn'))
const minus_btns = Array.from(document.querySelectorAll('.minus_btn'))

// console.log(x)
function dynamicAdd (x, y) {

        x.forEach((x_btn) => {
            let grandparent_Container = x_btn.closest('.array_container')
            let x_counter = grandparent_Container.querySelectorAll('.plus_btn').length
            
            console.log(`X Counter = ${x_counter}`)
            if (x_counter < 6) {

                x_btn.addEventListener('click', (e) => {
                    let parent_Container = x_btn.closest('.dynamic_input_container')
                    grandparent_Container = x_btn.closest('.array_container')

                    let clone = parent_Container.cloneNode(true)
                    let cloneInputField = clone.querySelectorAll('form__input')
                    cloneInputField.value = " "

                    grandparent_Container.appendChild(clone)
                    let new_plus = clone.querySelectorAll('.plus_btn')
                    let new_minus = clone.querySelectorAll('.minus_btn')


                    console.log(cloneInputField)
                    dynamicAdd(new_plus, new_minus)
                })
            }
        })

        y.forEach((y_btn) => {
            let grandparent_Container = y_btn.closest('.array_container')
            let y_counter = grandparent_Container.querySelectorAll('.dynamic_input_container').length

            console.log(`Y Counter = ${y_counter}`)
            if (y_counter > 1) {

                y_btn.addEventListener('click', (e) => {
    
                    let parent_Container = y_btn.closest('.dynamic_input_container')
                    parent_Container.remove();
    
                    console.log(`${parent_Container} has been removed by ${y_btn}`)
                    // dynamicAdd(plus_btns, minus_btns)
                })
            }
        })
}


    dynamicAdd(plus_btns, minus_btns)