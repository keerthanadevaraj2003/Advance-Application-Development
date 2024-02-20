
import '../assets/login.css'

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

                <button type="submit" className="btn">Login</button>

                <div className="register-Link">
                    <p>Do not have an account?<a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
