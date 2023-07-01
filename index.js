function showContent(component) {
  var content = "";

  if (component === "home") {
    content = "<h1>Home</h1><p>Welcome to the home page.</p>";
  } else if (component === "contact") {
    content =
      "<h1>Contact Information</h1><p>Here is the contact information.</p>";
  } else if (component === "information") {
    content =
      "<h1>Additional Information</h1><p>Here is some additional information.</p>";
  } else if (component === "guide") {
    content = "<h1>Guide</h1><p>Here is the Guide.</p>";
  }

  document.getElementById("content").innerHTML = content;
}
