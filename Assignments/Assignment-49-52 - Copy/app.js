// // Chap # 49-52 EVENTS


// 1. Create a signup form and display form data in your web 
// page on submission.

// // Form submit event listener
// document.getElementById('signupForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Create form data object
//     const formData = { name, email, password };

//     // Display form data
//     displayFormData(formData);

//     // Clear form inputs
//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('password').value = '';
//   });

//   // Function to display form data
//   function displayFormData(formData) {
//     const formDataDiv = document.getElementById('formData');
//     formDataDiv.innerHTML = '';

//     // Create and append HTML elements to display form data
//     const heading = document.createElement('h2');
//     heading.textContent = 'Form Data:';
//     formDataDiv.appendChild(heading);

//     const ul = document.createElement('ul');

//     for (const key in formData) {
//       if (formData.hasOwnProperty(key)) {
//         const li = document.createElement('li');
//         li.textContent = `${key}: ${formData[key]}`;
//         ul.appendChild(li);
//       }
//     }

//     formDataDiv.appendChild(ul);
//   }




// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed.


// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";

//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }





// 3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.


 
    /* // {Initialize student data
    let students = [];

    // Form submit event listener
    document.getElementById('studentForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // Get input values
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const grade = document.getElementById('grade').value;

      // Create student object
      const student = { name, age, grade };

      // Add student to array
      students.push(student);

      // Clear form inputs
      document.getElementById('name').value = '';
      document.getElementById('age').value = '';
      document.getElementById('grade').value = '';

      // Display students in table
      displayStudents();

      // Show success message
      alert('Student added successfully!');
    });


    function displayStudents() {
      const tableBody = document.querySelector('#studentTable tbody');
      tableBody.innerHTML = '';

      // Loop through students array
      for (let i = 0; i < students.length; i++) {
        const student = students[i];

      
        const row = document.createElement('tr');


        const nameCell = document.createElement('td');} */