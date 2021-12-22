import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux"
import { LoginUser } from "../../Redux/Users/UserAction"
import './Login.css'

const LogIn = ({ LoginUser }) => {

    const history = useHistory();

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    const logIn = (e) => {
        e.preventDefault();
        LoginUser(data, history)
    }
    return (
        <div className="Context">
            <div className="signup-form">
                <form onSubmit={logIn} method="post">
                    <h2>logIn</h2>
                    <div className="form-group">
                        <div className="row">
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="Email" className="form-control" name="email" onChange={onChange} placeholder="Email" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={onChange} required="required" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">LogiIn</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        LoginUser: (data, history) => dispatch(LoginUser(data, history))
    }
}

export default connect(null, mapDispatchToProps)(LogIn)