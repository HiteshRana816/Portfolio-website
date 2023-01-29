function valdidateForm(){
    let fullName = document.querySelector('#fullName').value
    let fullNameLength = fullName.length
    
    let PhoneNumber = document.querySelector('#Phone').value
    let PhoneNumberLength = PhoneNumber.length

    
    let emailId = document.querySelector('#EmailId').value
    let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    
    let myPasword = document.querySelector('#Password').value
    let myPaswordLength = myPasword.length

if(fullNameLength <=3){
    document.querySelector('.error_message').innerText = 'Name is required with minium 4 characters!!'
}
else if(PhoneNumberLength !== 10){
    document.querySelector('.error_message').innerText = 'Minimum 10 digit required'
}else if(!emailId.match(emailFormat)){
    document.querySelector('.error_message').innerText = 'This is not valid Email'
}
else if(myPaswordLength <= 8){
    document.querySelector('.error_message').innerText = 'Minimum 8 digit required'
}
else{
    document.querySelector('.error_message').innerText = ''
    document.querySelector('.success_message').innerText = 'Created Successfully'
}
}