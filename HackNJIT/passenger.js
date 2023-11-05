const { Accounts } = require("./accounts");

class Passenger{
    searchingForRide = false;
    rideInProgress = false;
    constructor(account){
        if(account instanceof Accounts){
            if(account.isPassenger)
            this.account = account;
        }
    }
    beginRideSearch(){
        if(!this.rideInProgress){
            this.searchingForRide = true;
        }
    }
    completeRide(){
        if(this.rideInProgress){
            this.rideInProgress = false;
        }
    }
}