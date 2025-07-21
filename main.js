const validEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validPhone = (phone) => {
  return phone.match(/^\d{10}$/);
}

let modal = document.querySelector("#modal");
modal.style.display = "none";

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
    document.querySelector("#firstName").style.background = "white";
    document.querySelector("#firstName").style.border = "1px solid red";
    document.querySelector("#lastName").style.background = "white";
    document.querySelector("#lastName").style.border = "1px solid red";
    document.querySelector("#fullname").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#req-name").style.display = "flex";
    document.querySelector("#fullname").scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else {
    document.querySelector("#firstName").style.border =
      "1px solid rgb(87, 100, 126)";
    document.querySelector("#lastName").style.border =
      "1px solid rgb(87, 100, 126)";
    document.querySelector("#fullname").style.backgroundColor = "white";
    document.querySelector("#req-name").style.display = "none";
    formIsValid = true;
  }

  if (address == "" || city == "" || zip == "" || province == "") {
    document.querySelector("#address").style.background = "white";
    document.querySelector("#address").style.border = "1px solid red";
    document.querySelector("#city").style.background = "white";
    document.querySelector("#city").style.border = "1px solid red";
    document.querySelector("#zip").style.background = "white";
    document.querySelector("#zip").style.border = "1px solid red";
    document.querySelector("#province").style.background = "white";
    document.querySelector("#province").style.border = "1px solid red";
    document.querySelector("#fulladdress").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#req-address").style.display = "flex";
    document
      .querySelector("#fulladdress")
      .scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else {
    document.querySelector("#address").style.border =
      "1px solid rgb(87, 100, 126)";
    document.querySelector("#city").style.border =
      "1px solid rgb(87, 100, 126)";
    document.querySelector("#province").style.border =
      "1px solid rgb(87, 100, 126)";
    document.querySelector("#zip").style.border = "1px solid rgb(87, 100, 126)";
    document.querySelector("#fulladdress").style.backgroundColor = "white";
    document.querySelector("#req-address").style.display = "none";
    formIsValid = true;
  }

  if (!validPhone(phone)) {
    document.querySelector("#phone-details").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#phone").style.background = "white";
    document.querySelector("#phone").style.border = "1px solid red";
    document.querySelector("#req-phone").style.display = "flex";
    document
      .querySelector("#phone-details")
      .scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else {
    document.querySelector("#phone-details").style.backgroundColor = "white";
    document.querySelector("#phone").style.border = "1px solid rgb(87, 100, 126)";
    document.querySelector("#req-phone").style.display = "none";
    formIsValid = true;
  }

  if (!validEmail(email)) {
    document.querySelector("#email").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#mail").style.background = "white";
    document.querySelector("#mail").style.border = "1px solid red";
    document.querySelector("#req-email").style.display = "flex";
    document.querySelector("#email").scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else {
    document.querySelector("#email").style.backgroundColor = "white";
    document.querySelector("#mail").style.border = "1px solid rgb(87, 100, 126)";
    document.querySelector("#req-email").style.display = "none";
    formIsValid = true;
  }

  if (select == "pselect") {
    document.querySelector("#about-us").style.backgroundColor =
      "rgb(255, 237, 237)";
    document.querySelector("#select").style.background = "white";
    document.querySelector("#select").style.border = "1px solid red";
    document.querySelector("#req-about").style.display = "flex";
    document.querySelector("#about-us").scrollIntoView({ behavior: "smooth" });
    formIsValid = false;
  } else if (select == "other") {
    if (other == "") {
      document.querySelector("#other").style.backgroundColor =
        "rgb(255, 237, 237)";
      document.querySelector("#select-other").style.background = "white";
      document.querySelector("#select-other").style.border = "1px solid red";
      document.querySelector("#req-other").style.display = "flex";
      document.querySelector("#other").scrollIntoView({ behavior: "smooth" });
      formIsValid = false;
    } else {
      document.querySelector("#other").style.backgroundColor = "white";
      document.querySelector("#select-other").style.border = "1px solid rgb(87, 100, 126)";
      document.querySelector("#select").style.border = "1px solid rgb(87, 100, 126)";
      document.querySelector("#req-other").style.display = "none";
      formIsValid = true;
    }
  } else {
    document.querySelector("#select").style.border = "1px solid rgb(87, 100, 126)";
    formIsValid = true;
  }

  if (formIsValid == true) {
    console.log("checked");

    const fullname = {
      fname: document.querySelector("#firstName").value.trim(),
      lname: document.querySelector("#lastName").value.trim(),
    };

    const fulladdress = {
      address: document.querySelector("#address").value.trim(),
      addressline: document.querySelector("#addressline").value.trim(),
      city: document.querySelector("#city").value.trim(),
      province: document.querySelector("#province").value.trim(),
      zip: document.querySelector("#zip").value.trim(),
    };

    const contact = {
      phone: document.querySelector("#phone").value.trim(),
      email: document.querySelector("#mail").value.trim(),
    };

    const us = {
      select: document.querySelector("#select").value.trim(),
      feedback: document.querySelector("#feedback").value.trim(),
      suggestions: document.querySelector("#suggestions").value.trim(),
      checkbox: document.querySelector("#yes").value.trim(),
      checkbox: document.querySelector("#maybe").value.trim(),
      checkbox: document.querySelector("#no").value.trim(),
    };

    if (us.select === "other") {
      us.other = document.querySelector("#select-other").value.trim();
    }

    const person1 = {
      r1Name: document.querySelector("#r1-name").value.trim(),
      r1Address: document.querySelector("#r1-address").value.trim(),
      r1Number: document.querySelector("#r1-number").value.trim(),
    };

    const person2 = {
      r2Name: document.querySelector("#r2-name").value.trim(),
      r2Address: document.querySelector("#r2-address").value.trim(),
      r2Number: document.querySelector("#r2-number").value.trim(),
    };

    const reference = {
      person1,
      person2,
    };

    const user = {
      fullname: fullname,
      address: fulladdress,
      contact: contact,
      us: us,
      reference: reference,
    };

    console.log(user);
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
    document.querySelector("#select-other").value = "";
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
    modal.style.display = "flex";
  }
}

let btn = document.querySelector(".submit");
btn.addEventListener("click", valid);

document.querySelector("#select").addEventListener("change", (e) => {
  const value = e.target.value;
  const otherField = document.querySelector("#other");

  if (value === "other") {
    otherField.style.display = "flex";
    otherField.style.flexDirection = "column";
  } else {
    otherField.style.display = "none";
    otherField.style.backgroundColor = "white";
    document.querySelector("#req-other").style.display = "none";
  }
});

modal.addEventListener("click", ()=>{
  modal.style.display = "none";
})