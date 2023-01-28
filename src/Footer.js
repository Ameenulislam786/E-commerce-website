import { Component } from "react";

export default class Footer extends Component{
    render(){
        return( 
            <section className="footer">
            <div  className="container p-5">
                <div className="row">
                    <div className="col-md-3">
                            <h5>Get to Know Us</h5>
                           
                           <li> <a href='/'>About Us</a></li>
                            <li><a href='/'>Careers</a></li>
                           <li> <a href='/'>Press Release</a></li>
                           <li> <a href='/'>Amazon Cares</a></li>
                            <li><a href='/'>Gift a Smile</a></li>
                            
                    </div>
                    <div className="col-md-3">
                            <h5>Connect with Us</h5>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Twitter</a></li>
                    </div>
                    <div className="col-md-3">
                            <h5>Make Money with Us</h5>
                            <li><a href="/">Sell on Amazon</a></li>
                            <li><a href="/">Sell under Amazon Accelerator</a></li>
                            <li><a href="/">Amazon Global Selling</a></li>
                            <li><a href="/">Advertise your Product</a></li>
                            <li><a href="/">Amazon Pay on Merchant</a></li>
                    </div>
                    <div className="col-md-3">
                            <h5>Let Us Help You</h5>
                            <li><a href="/">Your Account</a></li>
                            <li><a href="/">100% Purchase Protection</a></li>
                            <li><a href="/">Amazon App Download</a></li>
                            <li><a href="/">Returns Centre</a></li>
                            <li><a href="/">Help</a></li>

                    </div>
                </div>
           
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-md-6">
                        <img src="./Amazon.jpg" alt="..." />
                    </div>
                    <div className="col-md-3">
                        <h5>Select your Language</h5>
                        <select className="form-select ">
                            <option selected>English</option>
                            <option>Hindi</option>
                            <option>Spanish</option>
                        </select>
                    </div>
                </div>
                <div className="row details">
                    <div className="col-md-3 mb-1">
                        <li><a href="/">Conditions of Use & Sale</a></li>
                    </div>
                    <div className="col-md-3">
                    <li><a href="/">Privacy Notice</a></li>

                    </div>
                    <div className="col-md-4">
                    <li><a href="/">© 1996-2022,Amazon.com, Inc. or its affliates</a></li>

                    </div>
                </div>
            </div>
            </section>
        );
    }
}

