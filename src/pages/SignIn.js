export default function SignIn() {
 return (
     <div>
        state = {
          username: "",
          password: "",
          passedusernameIndicator: false,
          IsSubmitted: false,
        };
      
        onInputFieldChange = (element) => {
          const change = element.target;
          this.setState({ [change.name]: change.value });
          if (change.name === "email") {
            this.setState({ passedusernameIndicator: this.validsuername(change.value) });
          }
        };
      
    
        handleSubmit = (e) => {
          e.preventDefault();
          let url = "";
          let formdata = {
            username: this.state.username,
            password: this.state.password,
          };
          axios.post(url, formdata).then((resp) => {
            const userData = resp.data;
            console.log("User data from server", userData);
      
            //Sotre the details in the local storage
            if (userData.token) {
              localStorage.setItem("user", JSON.stringify(userData));
              this.setState({ IsSubmitted: true });
            } else {
              console.log("User not logged in");
              alert("Unable to log in");
            }
          });
        };
      
        validusername = (yesusername) => {
          let passwordSetPattern = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]{2,5}$/i;
          return passwordSetPattern.test(yesusername);
        };
      
        render() {
          if (this.state.IsSubmitted) {
            return <Redirect to="/initial" />;
          }
          return (
            <div className="logInForm">
              
                <h1>Login Here</h1>
                <form className="login-form" onSubmit={this.handleSubmit}>
                  <div className="username">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      onChange={this.onInputFieldChange}
                      value={this.state.username}
                      required
                    ></input>
                  </div>
      
                  <div className="password">
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      onChange={this.onInputFieldChange}
                      value={this.state.password}
                      required
                    ></input>
                  </div>
      
                  <div className="login" style={{width:"180px"}}>
                    <div className="btn">
                      <button className="" type="submit">
                        Login</button>
                    </div>
                  </div>
                </form>
              
            </div>
        </div>
          );
        }
 );}
