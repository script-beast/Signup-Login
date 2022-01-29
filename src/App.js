import './App.css';
import $ from "jquery"
function App() {

  function signup() {
    $(".message").css("transform", "translateX(100%)");
    if ($(".message").hasClass("login")) {
      $(".message").removeClass("login");
    }
    $("#login").toggle("hide");
    $("#signup").toggle("hide");
    $(".message").addClass("signup");
  };

  function login() {
    $(".message").css("transform", "translateX(0)");
    if ($(".message").hasClass("login")) {
      $(".message").removeClass("signup");
    }
    $("#signup").toggle("hide");
    $("#login").toggle("hide");
    $(".message").addClass("login");
  };

  return (
    <>
      <div class="container">
        <div class="message signup">
          <div class="btn-wrapper">
            <button class="button hide" id="signup" onClick={signup}>Sign Up</button>
            <button class="button" id="login" onClick={login}> Login</button>
          </div>
        </div>
        <div class="form form--signup">
          <div class="form--heading">Welcome! Sign Up</div>
          <form autocomplete="off">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button class="button">Sign Up</button>
          </form>
        </div>
        <div class="form form--login">
          <div class="form--heading">Welcome back! </div>
          <form autocomplete="off">
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button class="button">Login</button>
            <p>Forget Password?</p>
            <p>Quick Login with:</p>
            <div>
              <i class=" butne fab fa-facebook-f"></i> &nbsp; &nbsp;
              <i class=" butne fab fa-google"></i>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
