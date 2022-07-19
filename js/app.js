const submit = document.getElementById("submit");

submit.addEventListener("click", validate);
submit.addEventListener("click", validate2);
submit.addEventListener("click", validate3);
submit.addEventListener("click", validate4);

// first name field
function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("firstname");
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.querySelector(".nameError");
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
}

// last name field
function validate2(e) {
    e.preventDefault();
  
    const lastNameField = document.getElementById("lastname");
    let valid = true;
  
    if (!lastNameField.value) {
      const lastNameError = document.querySelector(".lastNameError");
      lastNameError.classList.add("visible");
      lastNameField.classList.add("invalid");
      lastNameError.setAttribute("aria-hidden", false);
      lastNameError.setAttribute("aria-invalid", true);
    }
    return valid;
  }

    // email field
    function validate3(e) {
        e.preventDefault();
      
        const emailField = document.getElementById("email");
        let valid = true;
      
        if (!emailField.value) {
          const emailError = document.querySelector(".emailError");
          emailError.classList.add("visible");
          emailField.classList.add("invalid");
          emailError.setAttribute("aria-hidden", false);
          emailError.setAttribute("aria-invalid", true);
        }
        return valid;
      }
      
      // password field
    function validate4(e) {
      e.preventDefault();
    
      const passwordField = document.getElementById("inputPassword");
      let valid = true;
    
      if (!passwordField.value) {
        const passwordError = document.querySelector(".passwordError");
        passwordError.classList.add("visible");
        passwordField.classList.add("invalid");
        passwordError.setAttribute("aria-hidden", false);
        passwordError.setAttribute("aria-invalid", true);
      }
      return valid;
    }