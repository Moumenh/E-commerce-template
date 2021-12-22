import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import './Signup.css'
import { SignUpUser } from '../../Redux/Users/UserAction';

const SignUp = ({ SignUpUser }) => {
    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const signUp = (e) => {
        e.preventDefault();
        SignUpUser(data, history)
    }
    return (
        <div className="Context">
            <div className="signup-form">
                <form >
                    <h2>Register</h2>
                    <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-xs-6"><input type="text" className="form-control" name="name" onChange={onChange} placeholder="Name" required="required" /></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email" onChange={onChange} required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={onChange} required="required" />
                    </div>

                    <div className="form-group">
                        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="/login">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div className="form-group">
                        <button onClick={signUp} type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? <a href="/login">Sign in</a></div>
            </div>
        </div>
    );
}

const mapDispatchTpProps = (dispatch) => {
    return {
        SignUpUser: (data, history) => dispatch(SignUpUser(data, history))
    }
}
export default connect(null, mapDispatchTpProps)(SignUp);