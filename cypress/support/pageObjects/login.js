///<reference types = "cypress"/>

class Login{

    goToSignup(){
        cy
          .contains('New to Flipkart? Create an account')
          .click();

       return this;
    }
}

export default Login;