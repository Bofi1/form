
let firstName = document.getElementById('firstName')
let titleFirstName = document.getElementById('titleFirstName')

let titleLastName = document.getElementById('titleLastName')
let lastName = document.getElementById('lastName')

let Email
let query
let msj
let check
let boton = document.getElementById('submit')




firstN = () => { // first name

        if (firstName.value != '') { // first name
    
            titleFirstName.classList.remove('text-[red]');
            titleFirstName.classList.add('text-black');
    
            firstName.classList.remove('border-[red]');
            firstName.classList.add('border-black');
    
        } else {
    
            titleFirstName.classList.remove('text-black');
            titleFirstName.classList.add('text-[red]');
    
            firstName.classList.remove('border-black');
            firstName.classList.add('border-[red]');
        }
}

lastN = () => {
    if (lastName.value != '') {

        titleLastName.classList.remove('text-[red]');
        titleLastName.classList.add('text-black');

        lastName.classList.remove('border-[red]');
        lastName.classList.add('border-black');
        
    } else {
        titleLastName.classList.remove('text-black');
        titleLastName.classList.add('text-[red]');

        lastName.classList.remove('border-black');
        lastName.classList.add('border-[red]');
    }
}


