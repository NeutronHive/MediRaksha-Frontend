import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc';
import axios from "axios";  
import { useRouter } from 'next/router';



const OLogin = ()=>{
     const router = useRouter();   
     const fetchData = async (URL) => {
          const data={
               "username":"Prajwaasdasdfasdasdhblfsrasdsad1305 Shah",
               "email":"prajwalshsdada2hasdashbd1fewsf3asdasd05.2003@gmail.com",
               "password":"21223asdfad7dfadf3hbfewsferasd1305"
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
                    router.push('/');
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
                <div className="modal-content" style={{background: "linear-gradient(to bottom right,#dccf1b,#b4e30c)"}}>
                     <div className="modal-body">
                          <a href="/" className="exit">
                               <button data-dismiss="modal" className="close btn" style={{backgroundColor:"#5762da", border:"1px solid #1f5ad9"}}>&times;</button>
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
                                         <input type="text" placeholder="Metamask Address" />
                                         <input type="password" placeholder="Password" />
                                         <button className="btn" onClick={()=> fetchData(URL) } style={{backgroundColor:"#5762da", border:"1px solid #1f5ad9"}}>Sign Up</button>
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
                                         <button className="btn" style={{backgroundColor:"#5762da", border:"1px solid #1f5ad9"}} type="submit" onClick={() => {

                                         }}>Sign In</button>
                                    </form>
                               </div>
                               <div className="overlay-container">
                                    <div className="overlay2" style={{background:"linear-gradient(to right,#2c42d3, #557edb)"}}>
                                         <div className="overlay-panel overlay-left">
                                              <h1>Welcome Back!</h1>
                                              <p>To keep connected with us please login with your personal info</p>
                                              <button  className="ghost btn" style={{backgroundColor:"#5762da", border:"1px solid #1f5ad9"}} id="signIn">Sign In</button>
                                         </div>
                                         <div className="overlay-panel overlay-right">
                                              <h1>Hello Oracle !!</h1>
                                              <p>Enter your personal details and start providing support for generic medicines</p>
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

export default OLogin;