const btnDropdown = document.querySelector('.btn-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

btnDropdown.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});
