import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Footer extends Component{
    render(){
        return(
            <div>
                <footer>
                    <div className="row text-center fixed-bottom">
                    <div className="col-12" style={{"color":"rgb(146, 138, 138)","fontSize":"10px"}}>
                        © 2022 ООО «Иви.ру» HBO ® and related service marks are the property
                        of Home Box Office, Inс
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
}