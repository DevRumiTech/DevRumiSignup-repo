document.getElementById('newsletterForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var gender = document.getElementById('gender').value;
  var nationality = document.getElementById('nationality').value;
  var occupation = document.getElementById('occupation').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var country = document.getElementById('country').value;
  var dob = document.getElementById('dob').value;

  // Display the submitted information (you can customize this part)
  alert(`Thank you, ${firstName} ${lastName}! You have successfully subscribed to our newsletter.\n
        Email: ${email}\n
        Gender: ${gender}\n
        Nationality: ${nationality}\n
        Occupation: ${occupation}\n
        Phone Number: ${phoneNumber}\n
        Address: ${address}\n
        City: ${city}\n
        Country: ${country}\n
        Date of Birth: ${dob}`);
  // You can also send this information to a server for processing if needed.
});
