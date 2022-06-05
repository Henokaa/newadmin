import React, {useState, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext"
import loginstyle from "../Styles/loginstyle.css"
function Login() {
    const { setShowProfile } = useContext(LoginContext);

    return (   
        <div>
        <div id="main-wrapper" class="oxyy-login-register" style={{backgroundColor: "#dc3545"}}>
    <div class="hero-wrap d-flex align-items-center h-100">
    <div class="hero-mask bg-primary"></div>
    <div class="hero-content mx-auto w-100 min-vh-100 d-flex flex-column">
      <div class="container pt-5">
        <div class="row">
          <div class="col-sm-6 text-uppercase text-4 text-white text-center text-sm-left" style={{fontSize: "18px"}}>Sign Up to Lesan</div>
          <div class="col-sm-6 text-2 text-white font-weight-300 text-center text-sm-right"> Already a member? <a class="text-white text-3 font-weight-600" >Sign in</a> </div>
        </div>
      </div>
      <div class="container my-auto py-5">
        <div class="row"> 
          <div class="col-md-6 col-lg-7 col-xl-8">
            <div class="row d-flex h-100 text-center text-md-left">
              <div class="col-lg-9 col-xl-8 mt-auto">
                <h1 class="text-13 font-weight-200 text-white mb-5" style={{fontWeight: "200" ,fontSize: "52px"}}>Welcome, Looks like you're new here!</h1>
              </div>
              <div class="col-lg-12 mx-auto mt-auto mb-4 mb-md-0">
                <div class="logo" style={{fontFamily: "Rampart One" ,fontSize: "52px", color: "#ffffff"}}> LESAN </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 col-xl-4">
            <div class="container my-auto py-4 bg-white shadow-lg rounded">
              <div class="row mt-2">
                <div class="col-11 col-lg-11 mx-auto">
                  <form id="registerForm" class="form-border" method="post" onSubmit= {() => {setShowProfile(true)}}>
                    <div class="form-group icon-group">
                      <input type="text" class="form-control" id="fullName" required placeholder="Full Name" />
                      <span class="icon-inside text-primary"><i class="fas fa-user"></i></span> </div>
                    <div class="form-group icon-group">
                      <input type="email" class="form-control" id="emailAddress" required placeholder="Email Address" />
                      <span class="icon-inside text-primary"><i class="fas fa-envelope"></i></span> </div>
                    <div class="form-group icon-group">
                       <input type="password" class="form-control" id="loginPassword" required placeholder="Password" />
                      <span class="icon-inside text-primary"><i class="fas fa-lock"></i></span> </div>
                    <button class="btn btn-primary btn-block text-uppercase mt-4">Sign Up</button>
                  </form>
                  <div class="d-flex align-items-center my-2">
                    <hr class="flex-grow-1"/> 
                    {/* <span class="mx-2 text-2 text-muted">OR</span> */}
                    <hr class="flex-grow-1" ></hr>
                  </div>
                  <div class="d-flex  flex-column align-items-center">
                     <ul class="social-icons social-icons-rounded">
                      <li class="social-icons-facebook"><a href="#" data-toggle="tooltip" data-original-title="Log In with Facebook"><i class="fab fa-facebook-f"></i></a></li>
                      <li class="social-icons-twitter"><a href="#" data-toggle="tooltip" data-original-title="Log In with Twitter"><i class="fab fa-twitter"></i></a></li>
                      <li class="social-icons-google"><a href="#" data-toggle="tooltip" data-original-title="Log In with Google"><i class="fab fa-google"></i></a></li>
                      <li class="social-icons-linkedin"><a href="#" data-toggle="tooltip" data-original-title="Log In with Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul> 
                  </div>
                </div>
              </div>
            </div>
            <p class="text-2 text-white font-weight-300 text-center mt-4 mb-0">Copyright © 2022 <a class="text-white font-weight-600" href="#">LESAN</a>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
      {/* <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button> */}
    </div>
    );
}

export default Login;