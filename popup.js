  // Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'formData') {
      // Display the form data in the popup
      let table = document.getElementById('formData');
      for (let field in request.data) {
        let row = table.insertRow();
        let fieldCell = row.insertCell(0);
        let valueCell = row.insertCell(1);
        fieldCell.innerHTML = field;
        valueCell.innerHTML = request.data[field];
      }
    }
  });
  
  // Save the form data to storage when the Save button is clicked
  document.getElementById('saveButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({
      action: 'saveFormData',
      data: formData
    });
  });
  
  