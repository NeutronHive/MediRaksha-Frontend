import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc';
import axios from "axios";  
// import { useRouter } from 'next/router';



const Login = ()=>{
     // const router = useRouter();   
     const fetchData = async (URL) => {
          const data={
               "username":"Prajwal2 Shah",
               "email":"prajwalsha2h.2003@gmail.com",
               "password":"2122373"
          }
          try {
            await axios({
              method: 'POST',
              url: URL,
              data
            }).then((res) => {
              console.log(res.data);
              if(res.data.success == "true"){
               console.log("success");
                    // router.push('/');
              }
            });
          } 
          catch (err) {
            console.log(err)
          }
     }
     const URL = "https://web-production-4516.up.railway.app/register/";
    React.useEffect(() => {

        const signUpButton = document.getElementById('signUp') as HTMLButtonElement;  
        const signInButton = document.getElementById('signIn') as HTMLButtonElement;  
        const container = document.getElementById('container') as HTMLDivElement;  

        signUpButton.addEventListener('click', () => {  
            container.classList.add("right-panel-active");  
        });  

        signInButton.addEventListener('click', () => {  
            container.classList.remove("right-panel-active");
        });    
    },[])
    return (

        <>
        <div className="bdy">
     <div id="login" className="modal fade" role="dialog">
           <div className="modal-dialog">
                <div className="modal-content">
                     <div className="modal-body">
                          <a href="/" className="exit">
                               <button data-dismiss="modal" className="close btn">&times;</button>
                          </a>
                          <div className="container1" id="container">
                               <div className="form-container sign-up-container">
                                    <form action="#" method = "post">
                                         <h1>Create Account</h1>
                                         <div className="social-container">
                                         <a href="#" className="social"><BsFacebook color="blue" fontSize={30}/></a>
                                              <a href="#" className="social"><FcGoogle fontSize={30}/></a>
                                         </div>
                                         <span>or use your email for registration</span>
                                         <input type="text" placeholder="Name" />
                                         <input type="email" placeholder="Email" />
                                         <input type="password" placeholder="Password" />
                                         <button className="btn" onClick={()=> fetchData(URL)}>Sign Up</button>
                                    </form>
                               </div>
                               <div className="form-container sign-in-container">
                                    <form action="#" method = "post">
                                         <h1>Sign in</h1>
                                         <div className="social-container">
                                              <a href="#" className="social"><BsFacebook color="blue" fontSize={30}/></a>
                                              <a href="#" className="social"><FcGoogle fontSize={30}/></a>
                                              {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                                         </div>
                                         <span>or use your account</span>
                                         <input type="email" placeholder="Email" />
                                         <input type="password" placeholder="Password" />
                                         <a href="#">Forgot your password?</a>
                                         <button className="btn" type="submit" onClick={() => {

                                         }}>Sign In</button>
                                    </form>
                               </div>
                               <div className="overlay-container">
                                    <div className="overlay2">
                                         <div className="overlay-panel overlay-left">
                                              <h1>Welcome Back!</h1>
                                              <p>To keep connected with us please login with your personal info</p>
                                              <button  className="ghost btn" id="signIn">Sign In</button>
                                         </div>
                                         <div className="overlay-panel overlay-right">
                                              <h1>Hello Rakshak !!</h1>
                                              <p>Enter your personal details and start your journey with us</p>
                                              <button  type="submit" className="ghost btn" id="signUp">Sign Up</button>
                                         </div>
                                    </div>
                               </div>
                          </div>
                     </div>
                </div>
           </div>
      </div>
      </div>
      </>
    );
}

export default Login;