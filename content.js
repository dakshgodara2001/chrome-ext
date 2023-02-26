// Listen for form submissions
document.addEventListener("submit", function(event) {
    let form = event.target;
    if (form.action.startsWith("https://docs.google.com/forms/")) {
      // Send a message to the background script with the form data
      chrome.runtime.sendMessage({
        action: "formSubmission",
        formData: {
          timestamp: Date.now(),
          data: getFormData(form)
        }
      });
    }
  });
  
  // Get the form data
  function getFormData(form) {
    let data = {};
    for (let element of form.elements) {
      if (element.name) {
        data[element.name] = element.value;
      }
    }
    return data;
  }
  