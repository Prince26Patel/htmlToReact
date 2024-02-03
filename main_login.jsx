import React from 'react'
import './style1.css'
import './style3.css'

const mainLogin =() =>{
    function toggleForm() {
        var formContainer = document.getElementById('formContainer');
        formContainer.classList.toggle('hidden');
        
        // Toggle the class for blurred background on the body element
        document.body.classList.toggle('blurry-background');
    };
    return(
        <div>
        <div className="box" id="formContainer">
            <button className="close-button" onclick={closeForm}><img src="./assets/x-button.png"/></button>
            <div class="users">
                <div class="user1">
                 <button class="user_nav">  <img src="./assets/tiffin-img.png" className="icons_" style={{backgroundColor: 'black'}}/></button> 
                </div>
                <div className="user1" >
                    <button className="user_nav">   <img src="./assets/Chef-img.png" className="icons_" /></button>
                </div><div className="user1">
                    <button className="user_nav">   <img src="./assets/vendor-img.png" className="icons_"/></button>
                </div><div class="user1">
                    <button class="user_nav"><img src="./assets/Group 12183.png" className="icons_"/></button>
                </div>
            </div>

            <div className="lowerpart">
                <div className="formbox">
                    <h1 className="heading1" >New account</h1>
                    <div className="content" style={{color: 'white'}}>
                        <p  className="hifoodie">Hii Foodie!!</p>
                        <h1 className="welcome">Welcome to Samaadhaan</h1>
                    </div>
                        <form action="">
                        
                               <div className="input-container">
                                    <input type="text" id="user1" autocomplete="off" required className="text-input" className="text-input"/>
                                    <label for="Registration Number" className="label" style={{fontSize: '1.2rem'}}/>Phone No.</label>
                                </div>
                            <h5 className ="questions">Having difficulty? Contact us at</h5>
                            <div className="link" style={{marginTop: '10px'}}>
                                <a style={{marginTop: '10px'}} href="#">+91 9508120493</a> <a href="#">sammadhaan@gmail.com</a>
                            </div>
                            
                        </form>
                        <div style= {{marginTop: '80px'}} id="nilesh">
                            <div id="icon"><img src="./assets/nileshuser.png" style={{width:'100%', height='100%'}}/></div>
                            <div id="username" >
                                <p className="questions">Continue as Nilesh Agarwal</p>
                                <p className="questions">ui22cs54@iiitsurat.ac.in</p>
                            </div>
                            <div id="google"><img src="./assets/Google__G__logo.svg.png" width="100%" height="100%"/></div>
                        </div>
                       <p className="questions">Don't have a accout yet? <a href="" style={{color: '#0038FF'}}>Create Account</a></p>
                       
                   <button className ="nextbutton">Next</button>
                    

                </div>

                <div className="imagebox">
                    <img src="./assets/Group 144.png"/>
                </div>
            </div>
    <button onclick={toggleForm}>Toggle Form</button>
    </div>
    )
}

 export default mainLogin