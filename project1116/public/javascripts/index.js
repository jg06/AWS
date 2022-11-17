document.getElementById("forget_pwd").addEventListener("click", () => {
  const loginBox = document.getElementsByClassName("login-box")[0];
  const findBox = document.getElementsByClassName("find_box")[0];

  loginBox.style.transition = "all 1s linear";
  loginBox.style.transform = "scale(0.5)";
  loginBox.style.opacity = 0;
  setTimeout(() => {
    loginBox.style.display = "none";
  }, 1000);

  setTimeout(() => {
    findBox.style.display = "block";
    findBox.style.opacity = 0;
    findBox.style.transform = "scale(0.5)";
  }, 1100);

  setTimeout(() => {
    findBox.style.transition = "all 1s linear";
    findBox.style.opacity = 1;
    findBox.style.transform = "scale(1)";
  }, 1200);
});

document.getElementById("find-arrow").addEventListener("click", () => {
  const loginBox = document.getElementsByClassName("login-box")[0];
  const findBox = document.getElementsByClassName("find_box")[0];

  findBox.style.transition = "all 1s linear";
  findBox.style.transform = "scale(0.5)";
  findBox.style.opacity = 0;
  setTimeout(() => {
    findBox.style.display = "none";
  }, 1000);

  setTimeout(() => {
    loginBox.style.display = "block";
    loginBox.style.opacity = 0;
    loginBox.style.transform = "scale(0.5)";
  }, 1100);

  setTimeout(() => {
    loginBox.style.transition = "all 1s linear";
    loginBox.style.opacity = 1;
    loginBox.style.transform = "scale(1)";
  }, 1200);
});

document.getElementById("find_submit").addEventListener("click", () => {
  const submitBtn = document.getElementById("find_submit");

  submitBtn.style.transition = "transform 1s linear";

  if (document.getElementById("find_email").value) {
    document.getElementById("find_valid").style.visibility = "visible";
    submitBtn.style.transform = "translateY(-115px)";
  }

  if (document.getElementById("find_valid").value.length === 6) {
    document.getElementById("find_pwd").style.visibility = "visible";
    submitBtn.style.transform = "translateY(0px)";
  }
});

document.getElementById("sign-up").addEventListener("click", () => {
  const loginBox = document.getElementsByClassName("login-box")[0];
  const signbox = document.getElementsByClassName("signup-box")[0];

  loginBox.style.transition = "all 1s linear";
  loginBox.style.transform = "scale(0.5)";
  loginBox.style.opacity = 0;
  setTimeout(() => {
    loginBox.style.display = "none";
  }, 1000);

  setTimeout(() => {
    signbox.style.display = "block";
    signbox.style.opacity = 0;
    signbox.style.transform = "scale(0.5)";
  }, 1100);

  setTimeout(() => {
    signbox.style.transition = "all 1s linear";
    signbox.style.opacity = 1;
    signbox.style.transform = "scale(1)";
  }, 1200);
});

document.getElementById("signup-arrow").addEventListener("click", () => {
  const loginBox = document.getElementsByClassName("login-box")[0];
  const signbox = document.getElementsByClassName("signup-box")[0];

  signbox.style.transition = "all 1s linear";
  signbox.style.transform = "scale(0.5)";
  signbox.style.opacity = 0;
  setTimeout(() => {
    signbox.style.display = "none";
  }, 1000);

  setTimeout(() => {
    loginBox.style.display = "block";
    loginBox.style.opacity = 0;
    loginBox.style.transform = "scale(0.5)";
  }, 1100);

  setTimeout(() => {
    loginBox.style.transition = "all 1s linear";
    loginBox.style.opacity = 1;
    loginBox.style.transform = "scale(1)";
  }, 1200);
});

document.getElementById("signup-submit").addEventListener("click", () => {
  const submitBtn = document.getElementById("signup-submit");

  submitBtn.style.transition = "transform 1s linear";

  if (document.getElementById("sign_email").value) {
    document.getElementById("sign_valid").style.visibility = "visible";
    submitBtn.style.transform = "translateY(-240px)";
  }

  if (document.getElementById("sign_valid").value.length === 6) {
    document.getElementById("sign_pw").style.visibility = "visible";
    submitBtn.style.transform = "translateY(-175px)";

    setTimeout(() => {
      document.getElementById("sign_name").style.visibility = "visible";
      submitBtn.style.transform = "translateY(-115px)";
    }, 900);

    setTimeout(() => {
      document.getElementById("sign_nick").style.visibility = "visible";
      submitBtn.style.transform = "translateY(-25px)";
    }, 1800);
  }
});
