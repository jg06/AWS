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
  const signBox = document.getElementsByClassName("signup-box")[0];

  loginBox.style.transition = "all 1s linear";
  loginBox.style.transform = "scale(0.5)";
  loginBox.style.opacity = 0;
  setTimeout(() => {
    loginBox.style.display = "none";
  }, 1000);

  setTimeout(() => {
    signBox.style.display = "block";
    signBox.style.opacity = 0;
    signBox.style.transform = "scale(0.5)";
  }, 1100);

  setTimeout(() => {
    signBox.style.transition = "all 1s linear";
    signBox.style.opacity = 1;
    signBox.style.transform = "scale(1)";
  }, 1200);
});

document.getElementById("signup-arrow").addEventListener("click", () => {
  const loginBox = document.getElementsByClassName("login-box")[0];
  const signBox = document.getElementsByClassName("signup-box")[0];

  signBox.style.transition = "all 1s linear";
  signBox.style.transform = "scale(0.5)";
  signBox.style.opacity = 0;
  setTimeout(() => {
    signBox.style.display = "none";
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

let condition = 0;
document.getElementById("signup-submit").addEventListener("click", () => {
  const submitBtn = document.getElementById("signup-submit");

  submitBtn.style.transition = "transform 1s linear";

  if (
    document.getElementById("sign_email").value &&
    condition === 0 &&
    document.getElementById("sign_email").disabled === false
  ) {
    condition += 1;

    const xhr = new XMLHttpRequest();
    const data = {
      email: document.getElementById("sign_email").value,
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 201) {
          document.getElementById("sign_valid").style.visibility = "visible";
          submitBtn.style.transform = "translateY(-240px)";
          document.getElementById("sign_email").disabled = true;
          console.log(xhr.responseText);
        } else {
          document.getElementById("sign-text").innerText =
            "잠시 후 다시 시도 해 주세요.";
          document.getElementById("sign-text").style.color = "red";
        }
      }
    };
    xhr.open("POST", "http://localhost:3000/users/auth_mail");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }

  if (
    document.getElementById("sign_valid").value.length === 6 &&
    condition === 1 &&
    document.getElementById("sign_valid").disabled === false
  ) {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log(response);
        if (response.status === "success") {
          document.getElementById("sign_pw").style.visibility = "visible";
          submitBtn.style.transform = "translateY(-175px)";
          document.getElementById("sign_valid").disabled = true;

          setTimeout(() => {
            document.getElementById("sign_name").style.visibility = "visible";
            submitBtn.style.transform = "translateY(-115px)";
          }, 900);

          setTimeout(() => {
            document.getElementById("sign_nick").style.visibility = "visible";
            submitBtn.style.transform = "translateY(-25px)";
          }, 1800);
        } else {
          document.getElementById("sign-text").innerText = "일치하지 않습니다.";
        }
      }
    };

    xhr.onerror = () => {
      document.getElementById("sign-text").innerText =
        "잠시 후 다시 시도 해 주세요.";
      console.error(xhr.responseText);
    };

    xhr.open(
      "GET",
      `http://localhost:3000/users/auth_valid?email=${
        document.getElementById("sign_email").value
      }&digit=${document.getElementById("sign_valid").value}`
    );
    xhr.send();
    condition += 1;
  }

  if (
    !!document.getElementById("sign_email").value &&
    !!document.getElementById("sign_pw").value &&
    !!document.getElementById("sign_name").value &&
    !!document.getElementById("sign_nick").value
  ) {
    const xhr = new XMLHttpRequest();
    const data = {
      email: document.getElementById("sign_email").value,
      pwd: document.getElementById("sign_pw").value,
      name: document.getElementById("sign_name"),
      nick: document.getElementById("sign_nick").value,
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 이미 가입된 이메일이 있음.
        document.getElementById("sign-text").innerText =
          "이미 가입된 이메일이 있습니다.";
      } else if (xhr.status === 201) {
        // 성공적으로 가입 되었을 때
        location.replace("http://localhost:3000");
        console.log(xhr.responseText);
      } else {
        // status가 200, 201이 아닐 때 (400)일 때
        document.getElementById("sign-text").innerText =
          "오류가 발생 했습니다.";
      }
    };
    xhr.onerror = () => {
      console.error(xhr.responseText);
    };

    xhr.open("POST", "http://localhost:3000/users/register");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }
});

document.getElementById("login_btn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  const data = {
    email: document.getElementById("id").value,
    pwd: document.getElementById("pw").value,
  };

  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.status === "success") {
        document.getElementById("login-text").innerText = "로그인 성공";
      } else {
        // response.status === "fail
        document.getElementById("login-text").innerText = response.message;
      }
    }
  };

  xhr.onerror = () => {
    console.error(xhr.responseText);
  };

    xhr.open("POST", "http://localhost:3000/users/login");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
});

