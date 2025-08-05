// const APP_SCRIPT =
//   "https://script.google.com/macros/s/AKfycbxCUayfjzS8-cFw9uBGurN0h0z3-48-RlodOkrdJSYsHC6OK26pSufenB6mciYNE6op/exec";

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = {
//       name: this.name.value,
//       email: this.email.value,
//       subject: this.subject.value,
//       message: this.message.value,
//     };

//     document.getElementById("submit_contact_form_btn").classList.add("hidden");
//     document.querySelector(".sent-message").classList.remove("d-block");
//     document.querySelector(".error-message").classList.remove("d-block");
//     document.querySelector(".loading").classList.remove("d-none");
//     document.querySelector(".loading").classList.add("d-block");

//     fetch(`${APP_SCRIPT}?${new URLSearchParams(formData)}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.text())
//       .then((result) => {
//         // document.getElementById("status").innerText = result;
//         document.querySelector(".loading").classList.remove("d-block");
//         document.querySelector(".sent-message").classList.add("d-block");
//         document.querySelector(".error-message").classList.remove("d-block");
//         document.getElementById("submit_contact_form_btn").classList.remove("hidden");
//         this.reset();
//       })
//       .catch((error) => {
//         document.querySelector(".loading").classList.remove("d-block");
//         document.querySelector(".error-message").classList.add("d-block");
//         document.querySelector(".sent-message").classList.remove("d-block");
//         document.getElementById("submit_contact_form_btn").classList.remove("hidden");
//         document.querySelector(".error-message").innerText = "Error: " + error;
//       });
//   });
