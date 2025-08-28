// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  //Get reference to the button
  const button = document.getElementById('myButton');
  //Add click event listener to the button
  button.addEventListener('click', function() {
    // Show an aler when button is clicked 
    alert('Thanks for clicking! You\ 're doing greaat!');

    //Change the button's text
    this.textContent = 'Clicked!';

    //CHange the button's bakground color
    this.style.backgroundColor = '#F578DE';

    //Add a new favorite website to the list 
    adNewFavoritesSite();
  });

  // Function to add a new site to the favorite list 
  function addNewFavoriteSite() {
