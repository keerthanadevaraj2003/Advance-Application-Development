
import '../assets/Signup.css'

const Signup = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>SIGNUP</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Confirm Password" required />
                    
                </div>

                {/* <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me </label>
                    <a href="#">Forgot Password</a>
                </div> */}

                <button type="submit" className="btn">Signup</button>

                {/* <div className="register-Link">
                    <p>Do not have an account?<a href="#">Register</a></p>
                </div> */}
            </form>
        </div>
    );
};

export default Signup;
