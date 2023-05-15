const formFields = new Array(
  ...document.querySelectorAll(".contact-us form input"),
  document.querySelector(".contact-us form textarea")
);
const errorMessages = document.querySelectorAll(
  ".contact-us form .error-message"
);
const btnSubmit = document.getElementById("submit-contact-us");

const formData = {
  firstname: "",
  secondname: "",
  email: "",
  phone: "",
  message: "",
};

validateSubmition();

function checkInput(input, index) {
  const fieldName = input.id.includes("-")
    ? input.id.replace("-", "")
    : input.id;
  const value = input.value;
  const email = input.type === "email";
  const phone = input.type === "tel";
  const minLength = Number(input.dataset.minlength);
  const maxLength = Number(input.dataset.maxlength);

  if (value) {
    errorMessages[index].textContent = "";
    if (email) {
      if (!validateEmail(value)) {
        errorMessages[index].textContent = "Email isn't valid";
        formData[fieldName] = "";
      } else {
        formData[fieldName] = value;
      }
    } else if (phone) {
      if (!validatePhoneNumber(value)) {
        errorMessages[index].textContent = "Phone number isn't valid";
        formData[fieldName] = "";
      } else {
        formData[fieldName] = value;
      }
    } else if (value.length < minLength) {
      errorMessages[
        index
      ].textContent = `${fieldName} must be ${minLength} charaters at least`;
      formData[fieldName] = "";
    } else if (value.length > maxLength) {
      errorMessages[
        index
      ].textContent = `${fieldName} must be ${maxLength} caracters by maximum`;
      formData[fieldName] = "";
    } else {
      formData[fieldName] = value;
    }
  } else {
    formData[fieldName] = "";
    errorMessages[index].textContent = "This field is required";
  }
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
    );
}

function validatePhoneNumber(number) {
  return String(number).match(/^01[0-2,5]{1}[0-9]{8}$/);
}

formFields.forEach((field, i) => {
  field.addEventListener("keyup", () => {
    checkInput(field, i);
    validateSubmition();
    console.log(formData);
  });
});

function validateSubmition() {
  for (let [k, v] of Object.entries(formData)) {
    if (!v) {
      btnSubmit.disabled = true;
      break;
    } else {
      btnSubmit.disabled = false;
    }
  }
}
