export const Login = () => {
    return (
        <section class="section-wrapper">
        <div class="wrapper-div">
            <div class="image-div">
                <img src="./images/draw2.webp" alt="Sample" />
            </div>
            <div class="form-div">
                <form>

                    
                    <div class="email-div">
                        <input type="email" id="email" class="email-input" placeholder="peter@abv.bg" />
                        <label class="form-label" for="email">Email address</label>
                    </div>

                
                    <div class="password-div">
                        <input type="password" id="password" placeholder="Enter password" />
                        <label class="form-label" for="password">Password</label>
                    </div>

                    <div class="button-div">
                        <button type="button" class="btn btn-primary btn-lg">Login</button>
                        <p>Don't have an account? <a href="#!">Register</a></p>
                    </div>

                </form>
            </div>
        </div>
    </section>
    )
}