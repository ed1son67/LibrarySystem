import React, {Component} from 'react';
import './style.css';
import InfoForm from "./InfoForm";
import PasswordForm from "./PasswordForm";
import BaseInfo from "./BaseInfo";

class User extends Component {
    render() {
        return(
            <div>
                <BaseInfo/>
                <InfoForm/>
                <PasswordForm />
            </div>
        )
    }
}

export default User;