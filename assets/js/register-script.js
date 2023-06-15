const   forms = document.querySelector(".forms"),
        pwShowHide = document.querySelectorAll(".eye-icon");


pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click",()=>{
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password =>{
            if(password.type === "password"){
                password.type="text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

function onChange() {
    const password = document.querySelector('input[name=pwd]');
    const confirm = document.querySelector('input[name=rpwd]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }

  var check = function() {
    if (document.getElementById('pwd').value ==
      document.getElementById('rpwd').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }