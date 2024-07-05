
let firstName = document.getElementById('firstName')
let titleFirstName = document.getElementById('titleFirstName')
let Email
let query
let msj
let check
let boton = document.getElementById('submit')




firstN = () => {

    
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


