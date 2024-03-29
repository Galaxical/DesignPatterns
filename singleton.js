class phone {

    //creating phone with constructor variables like phone number and observer

    constructor(){
        this.phoneNumbers = [];
        this.observers = [];
    }

    //addPhone number
    addPhoneNumber(phoneNumber){
        this.phoneNumbers.push(phoneNumber);
    }

    //remove Phone number
    removePhoneNumber(phoneNumber){
        const index = this.phoneNumbers.indexOf(phoneNumber)
        if(index !== -1){
            this.phoneNumbers.splice(index, 1);
        }
    }

    //dial phone num
    dialPhoneNumber(phoneNumber){
        if(this.phoneNumbers.includes(phoneNumber)){
            console.log(`Dialing ${phoneNumber}`);
            this.notifyObservers(phoneNumber);
        }else{
            console.log(`${phoneNumber} is not a registered number`)
        }
    }


    //Adding observer patterns to class observers
    addObserver(observers){
        this.observers.push(observers);
    }

    notifyObservers(phoneNumber){
        this.observers.forEach((observer) => observer.callLog(phoneNumber));
    }

    removeObserver(observers){
        const index = this.observers.indexOf(observers);
        if(index !== -1){
            this.observers.splice(index, 1)
        }
    }
}

//create a new phone Instance
const Phone = new phone();

//create a callLog with observer method
const observer = {
    callLog(phoneNumber){
        console.log(`Call logged, Observer notified: Dialing ${phoneNumber}`)
    }
}

//instantiate phone classes such as addNumber, dial number and add observer
Phone.addPhoneNumber(237023232);
Phone.addObserver(observer);
Phone.dialPhoneNumber(237023232)