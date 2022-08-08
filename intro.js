// based on concepts of object and its like a blueprint from which we can create new objects
//  and its just a representation not actual javascript syntax and javascript does not support the real classes 



// Abstraction 
class realphone{
    charge
    volume 
    voltage
    temperature
    
    homeBtn(){}                 // we don't need low level details
    verifyBtn(){}
    vibrate(){}
    soundSperaker(){}   
}


class abstractedPhone{       // Details have been abstracted away                           
    charge
    volume
    screeen(){}

}

// #######################################################################################################################################

// Encapulation  ------ keeping some properties and methods private

// Inhertance ------ Extend properties parent to child class

// Polymorphism ----- A child class can overwrite a method it inherited from  a parent class
class user {
    user
    password 
    email
    login(password){}
    sendMessage(str){}
}

// -----------------

class isAdmin{
    user
    password 
    email
    permissions
    login(password,key){}
    deleteUser(user){}
}
// --------------

class author{
    user
    password 
    email
    posts
    login(password){}
    writePost(){}
}


// protoypal inheritance---------the prototype contains methods and properties that are accessible to all objects linked to that prototype

