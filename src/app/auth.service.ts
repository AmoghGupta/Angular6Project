
export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject)=>{
                //alert("You will be logged in 5 seconds, validating your identity");
                setTimeout(()=>{
                    // resolve(this.loggedIn);
                    resolve(this.loggedIn);
                }, 800)
            }
        );
        return promise;
    }

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false; 
    }
}