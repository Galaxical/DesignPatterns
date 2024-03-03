class phone {

    //creating phone with constructor variables like phone number and observer

    constructor(){
        this.phoneNumbers;
        this.observers;
    }

    addPhoneNumber(phoneNumber){
        this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber){
        const index = this.phoneNumber.indexOf(phoneNumber)
        if(index !== -1){
            this.phoneNumbers.splice(index, 1);
        }
    }
}