export default function SignUp() {
    return (
        function FormFuction (props) {

            let postSignUp =async (event) => {
              event.preventDefault();
              const formData = new FormData(document.querySelector("#registerform"))
              formData.append("Firstname", document.querySelector("#Firstname").value)
              formData.append("Lastname", document.querySelector("#Lastname").value)
              formData.append("Username", document.querySelector("#Username").value)
              formData.append("Phone", document.querySelector("#Phone").value)
              formData.append("email", document.querySelector("#email").value)
              formData.append("Confirm_email", document.querySelector("#Confirm_email").value)
              formData.append("password", document.querySelector("#password").value)
              formData.append("Confirm_password", document.querySelector("#Confirm_password").value)
              formData.append("Date_Of_Birth", document.querySelector("#Date_Of_Birth").value)
              formData.append("City", document.querySelector("#City").value)
             let data =await fetch("",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: formData
              })
              try{
                  if(data.status===200){
                      props.onSuccess({
                          requestedComponent:"login",
                          message:"Registration succesful please sign in"
                      })
      
                  }
                  if (!data.ok) {
                      let err = await data.json()
                          let errorArr = []
                          Object.keys(err).map(key =>
                              errorArr.push(key + " : " + err[key])
                          )
                          props.onErrors({ errors: errorArr })
                          // props.onFailure({message:errorArr})
                   
                  } else {
                      let d = await data.json()
                      props.onSuccess({
                          requestedComponent:"login",
                          message:"Registration succesful please sign in"
                      })
                  }
                  
                      
                  
              } catch(error){
                  props.onErrors({ errors: error.text })
                  // props.onFailure({message:error.text})
      
           }
          
           }
          return (
              <form id="registerform" className="registerform">
                  <h1 className = "upHeader">Sign Up Here</h1>
                  <input type = "text" required = "true" placeholder = "First Name *" id = "Firstname" className = "Firstname" height = "25px" width = "100px"  ></input>
                  <input type = "text" required = "true" placeholder = "Last Name *" id = "Lastname" className = "Lastname" />
                  <br/>
                      
                  <input type = "text" required = "true" placeholder = "Username *" id = "Username" className = "Username" 
                  /*ref={register({ minLength: 5 })}*/
                  />
                  <input type = "integer" required = "true" placeholder = "Phone Number *" id = "Phone" className = "Phone" /><br/>
                      
                  <input type = "email" placeholder = "Email *" id = "email" className = "email" 
                  //ref={register({pattern: {value: emailRegex, message: "This email address is invalid",},})}
                  />
      
                  <input type = "email" placeholder = "Confirm Email *" id = "Confirm_email" className = "Confirm_email" 
                  //ref={register({required: true, pattern: {value: emailRegex, message: "This email address is invalid",},})}
                  /><br/>
                  
                  <input type = "password" required = "true" placeholder = "Password *" id = "password" className = "password" 
                  //ref={register({minLength: 8, pattern:{message: "Enter a valid/strong password"}})}
                      />
                  <input type = "password" required = "true" placeholder = "Confirm Password *" id = "Confirm_password" className = "Confirm_password" 
                  //ref={register({required: true,validate: (value) => value === password.current || "Password mismatch, kindly check and try again",})}
                  /><br/>
      
                  <input type = "date" required = "true" placeholder = "Date of Birth *" id = "Date_Of_Birth" className = "Date_Of_Birth" />
                  <input type = "text" required = "true" placeholder = "City *" id = "City" className = "City" /><br/>
      
      
                  <button value = "submit" onClick={postSignUp}  className = "registerbutton" >Sign Up</button>
      
              </form>
      
        );
        );
      }
}

