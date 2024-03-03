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

    dialPhoneNumber(phoneNumber){
        if(this.phoneNumbers.include(phoneNumber)){
            console.log(`Dialing ${phoneNumber}`);
            this.notifyObservers(phoneNumber)
        }else{
            console.log(`${phoneNumber} is not a registered number`)
        }
    }

    addObserver(observers){
        this.observers.push(observers);
    }

    notifyObservers(phoneNumber){
        this.observers.forEach((observer) => observer.callLog(phoneNumber));
    }
}