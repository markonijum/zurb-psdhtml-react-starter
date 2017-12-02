export default class Testing {
    firstName = '';
    lastName = '';
    username = '';
    email = '';

    constructor(firstname = "Milos",lastname = "Dudic" ,username = "mixlabud", email = "mixlabud@gmail.com"){
        this.firstName = firstname;
        this.lastName = lastname;
        this.username = username;
        this.email = email;
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}