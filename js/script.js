const searchBar = document.getElementById('searchBar');
const hymnList = document.getElementById('hymnList');

searchBar.addEventListener('keyup', function () {
  const filter = searchBar.value.toLowerCase();
  const hymns = hymnList.getElementsByTagName('li');

  for (let i = 0; i < hymns.length; i++) {
    const text = hymns[i].textContent || hymns[i].innerText;
    hymns[i].style.display = text.toLowerCase().includes(filter) ? '' : 'none';
  }
});
