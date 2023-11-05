class Accounts{
    username = ""
    password = ""
    accountType = ""
    accountList = new Map(["Passenger", ["Password", "1"]], ["Driver", ["Password", "2"]]);
    createDriverAccount(inputUsername, inputPassword){
        if(!(this.accountList.has(inputUsername.toLowerCase()))){
            this.accountList.set(inputUsername.toLowerCase(), [inputPassword, "2"])
            this.username = inputUsername;
            this.password = inputPassword;
            this.accountType = "2";
            return "Driver Account Successfully Created!";
        }
        else{
            return "Username is already taken. Please try another";
        }
    }
    createPassengerAccount(inputUsername, inputPassword){
        if(!(this.accountList.has(inputUsername.toLowerCase()))){
            this.accountList.set(inputUsername.toLowerCase(), [inputPassword, "1"])
            this.username = inputUsername;
            this.password = inputPassword;
            this.accountType = "1";
            return "Passenger Account Successfully Created!";
        }
        else{
            return "Username is already taken. Please try another";
        }    
    }
    login(inputUsername, inputPassword){
        if(this.accountList.has(inputUsername.toLowerCase())){
            if(this.accountList.get(inputUsername.toLowerCase)[0] == inputPassword){
                this.username = inputUsername;
                this.password = inputPassword;
                this.accountType = this.accountList.get(inputUsername.toLowerCase)[1];
                return "You have logged in successfully!";
            }
            return "Incorrect Username or Password. Please try again.";
        }
        return "Incorrect Username or Password. Please try again.";
    }
    logout(){
        this.username = "";
        this.password = "";
        this.accountType = "";
        return "Successfully Logged Out!";
    }
    isLoggedIn(){
        if(this.username != "" && this.password != "" && this.accountType != ""){
            return true;
        }
        return false;
    }
    isDriver(){
        if(this.isLoggedIn() && this.accountType == "2"){
            return true;
        }
        return false;
    }
    isPassenger(){
        if(this.isLoggedIn() && this.accountType == "1"){
            return true;
        }
        return false;
    }
    getUsername(){
        if(this.isLoggedIn){
            return this.username;
        }
    }
}
module.exports.Accounts = Accounts;