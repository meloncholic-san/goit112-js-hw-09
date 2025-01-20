const refs = {
    formRef: document.querySelector(".feedback-form"),
};

const formData = {
    email: "",
    message: ""
  };

refs.formRef.addEventListener("input", formInputHandler);


function formInputHandler(event) {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    // console.log(localStorage.getItem("feedback-form-state"));
}

refs.formRef.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields!");
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    refs.formRef.reset();
}

document.addEventListener("DOMContentLoaded", () => {
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedData) {
        formData.email = savedData.email || "";
        formData.message = savedData.message || "";
        console.log(formData);
        refs.formRef.elements.email.value = formData.email;
        refs.formRef.elements.message.value = formData.message;
    }
});