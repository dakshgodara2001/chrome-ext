// Listen for form submissions
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "formSubmission") {
        // Store the form data
        storeFormData(request.formData);
      }
    }
  );
  
  // Store the form data
  function storeFormData(formData) {
    // Get the form submissions
    let submissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];
  
    // Add the new form submission to the array
    submissions.push(formData);
  
    // Save the form submissions
    localStorage.setItem("formSubmissions", JSON.stringify(submissions));
  }
  