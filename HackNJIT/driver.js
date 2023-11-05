const { Accounts } = require("./accounts");

class Driver{
    openForRides = false;
    rideInProgress = false;
    constructor(account){
        if(account instanceof Accounts){
            if(account.isDriver)
            this.account = account;
        }
    }
    acceptNewRides(){
        if(!this.rideInProgress){
            this.openForRides = true;
        }
    }
    completeRide(){
        this.openForRides = true;
        this.rideInProgress = false;
    }
    notAcceptingNewRides(){
        this.openForRides = false;
    }

}