import "./loginComponent.css"

export default function LoginComponent() {
    return (
        <div class="loginBackground">
            <div class="loginHeading">
                <span>LOGIN</span>
            </div>
            <form class="loginForm">
                <div class="loginInput">
                    <input type="text" placeholder="Username"></input>
                </div>
                <div class="loginInput">
                    <input type="password" placeholder="Password"></input>
                </div>
                <button class="loginButton" type="submit">lets goo</button>
            </form>
        </div>
    )
}