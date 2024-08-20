function register(){
 
    var userName=uname.value

    var Email=email.value

    var passWord=pswd.value

    console.log(userName,Email,passWord);
    

  user={
    uname:userName,
    email:Email,
    password:passWord
    

  }

  console.log(user);
  

  localStorage.setItem(user.uname,JSON.stringify(user))


  alert("successfully registerd")

  window.location='index.html'
  

}