const btnDropdowns = document.querySelectorAll('.btn-dropdown');
const dropdownContents = document.querySelectorAll('.dropdown-content');

for (let i = 0; i < btnDropdowns.length; i++) {
  btnDropdowns[i].addEventListener('click', function() {
    dropdownContents[i].classList.toggle('show');
  });
}
