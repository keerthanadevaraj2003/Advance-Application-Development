
import '../assets/login.css'
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>LOGIN</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me </label>
                    <a href="#">Forgot Password</a>
                </div>

                <Link to="/Navbar"><button type="submit" className="btn">Login</button></Link>

                <div className="register-Link">
                  <Link to="/signup" ><p>Do not have an account?<a href="#">Register</a></p></Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
