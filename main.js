const validEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function valid(event) {
  event.preventDefault();
  let fname = document.querySelector("#firstName").value;
  let lname = document.querySelector("#lastName").value;
  let address = document.querySelector("#address").value;
  let city = document.querySelector("#city").value;
  let province = document.querySelector("#province").value;
  let zip = document.querySelector("#zip").value;
  let phone = document.querySelector("#phone").value;
  let email = document.querySelector("#mail").value;
  let select = document.querySelector("#select").value;
  let other = document.querySelector("#select-other").value;
  let formIsValid = true;

  console.log("clicked");

  if (fname == "" || lname == "") {
    document.querySelector("#fullname").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#req-name").style.display = "flex";
    document.querySelector("#fullname").scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else {
    document.querySelector("#fullname").style.backgroundColor = "white";
    document.querySelector("#req-name").style.display = "none";
    formIsValid = true;
  }

  if (address == "" || city == "" || zip == "" || province == "") {
    document.querySelector("#fulladdress").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#req-address").style.display = "flex";
    document.querySelector("#fulladdress").scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else {
    document.querySelector("#fulladdress").style.backgroundColor = "white";
    document.querySelector("#req-address").style.display = "none";
    formIsValid = true;
  }

  if (phone == "") {
    document.querySelector("#phone-details").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#req-phone").style.display = "flex";
    document.querySelector("#phone-details").scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else {
    document.querySelector("#phone-details").style.backgroundColor = "white";
    document.querySelector("#req-phone").style.display = "none";
    formIsValid = true;
  }

  if (!validEmail(email)) {
    document.querySelector("#email").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#req-email").style.display = "flex";
    document.querySelector("#email").scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else {
    document.querySelector("#email").style.backgroundColor = "white";
    document.querySelector("#req-email").style.display = "none";
    formIsValid = true;
  }

  if (select == "pselect") {
    document.querySelector("#about-us").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#req-about").style.display = "flex";
    document.querySelector("#about-us").scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else if (select == "other") {
    document.querySelector("#other").style.display = "flex";
    document.querySelector("#other").style.flexDirection = "column";
    if (other == "") {
      document.querySelector("#other").style.backgroundColor =
        "rgb(255, 237, 237)";
      document.querySelector("#req-other").style.display = "flex";
      document.querySelector("#other").scrollIntoView({ behavior: "smooth" });
      formIsValid = false;
    } else {
      document.querySelector("#other").style.backgroundColor = "white";
      document.querySelector("#req-other").style.display = "none";
      formIsValid = true;
    }
  } else {
    document.querySelector("#other").style.display = "none";
    document.querySelector("#about-us").style.backgroundColor = "white";
    document.querySelector("#req-about").style.display = "none";
    formIsValid = true;
  }

  if (formIsValid == true) {
    console.log("checked");
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#addressline").value = "";
    document.querySelector("#city").value = "";
    document.querySelector("#province").value = "";
    document.querySelector("#zip").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#mail").value = "";
    document.querySelector("#select").value = "pselect";
    document.querySelector("#feedback").value = "";
    document.querySelector("#suggestions").value = "";
    document.querySelector("#yes").checked = false;
    document.querySelector("#maybe").checked = false;
    document.querySelector("#no").checked = false;
    document.querySelector("#r1-name").value = "";
    document.querySelector("#r1-address").value = "";
    document.querySelector("#r1-number").value = "";
    document.querySelector("#r2-name").value = "";
    document.querySelector("#r2-address").value = "";
    document.querySelector("#r2-number").value = "";
  }
}

let btn = document.querySelector(".submit");
btn.addEventListener("click", valid);
