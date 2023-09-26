// The job is simple
// If the two password boxes don't match, warn the
// user with "passwords do not match" in
// the appropriate span (.pwd-feedback)


// Step 1:
// Get handles on both password boxes and the feedback span
const pwd1 = document.getElementById("pwd");
const pwd2 = document.getElementById("pwdConfirm");
const pwdFeedback = document.getElementById("pwd-feedback");

pwd1.addEventListener("input", checkPasswordMatch);
pwd2.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
    if (pwd1.value == "") {
        pwdFeedback.textContent = "required"
    }
    else if (pwd1.value == pwd2.value) {
        pwdFeedback.textContent = ""
    }
    else {
        pwdFeedback.textContent = "Passwords do not match"
    }
}