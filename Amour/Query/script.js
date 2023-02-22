
const createNav = () => {
  let nav = document.querySelector(".navbar")

  nav.innerHTML = `
      <div class="nav">
      <img src="img/Amour-logo.png" class="brand-logo" alt="brand logo"> 
      
      </div>
      <ul class = "links-container">
          <li class = "link-item"><a href="w1832553.users.ecs.westminster.ac.uk/webDev/Amour/MM/index.html" class="link">Home</a></li>
          <li class = "link-item"><a href="#" class="link">products</a></li>
          <li class = "link-item"><a href="#" class="link">FAQs</a></li>
          <li class = "link-item"><a href="#" class="link">Quiz</a></li>
          <li class = "link-item"><a href="#" class="link">Thumbnails</a></li>
          <li class = "link-item"><a href="#" class="link">Sitemap</a></li>
          <li class = "link-item"><a href="#" class="link">Extras</a></li>


      </ul>
  `;
}



createNav();




// Declare the function; if field is empty, an alert is printed 

function myFunction() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    
    // If field is empty, an alert is printed
    let y = document.forms["myForm"]["email"].value;
    if (y == "") {
    alert("Email must be filled out");
    return false;
    }

 
    // if field is empty, an alert is printed
    let z = document.forms["myForm"]["message"].value;
    if (z == "") {
        alert("You must write a message");
        return false;

    }
    
else {
  document.write("Name: " + x);
  document.write("");
  document.write("Email: " + y);
  document.write("");
  document.write("Message: " + z);
  
    
}

  }

