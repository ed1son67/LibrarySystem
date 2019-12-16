import React, {Component} from 'react';
import './style.css';
import InfoForm from "./InfoForm";
import PasswordForm from "./PasswordForm";

class User extends Component {
    render() {
        return(
            <div>
                <InfoForm/>
                <PasswordForm />
            </div>
        )
    }
}

export default User;