
var formDisplay = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
formDisplay.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n\n        <h3>Education:</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience:</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills:</h3>\n        <p>").concat(skills, "</p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing');
    }
});
