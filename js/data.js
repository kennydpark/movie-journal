/* exported data */
var data = {
  view: 'search-home',
  searchHistory: [],
  editing: null,
  nextSearchId: 1,
  selectedCardID: '',
  savedCards: [],
  removing: null
};

window.addEventListener('beforeunload', beforeUnload);
function beforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-model', dataJSON);
}

var previousDataJSON = localStorage.getItem('data-model');
if (previousDataJSON) {
  data = JSON.parse(previousDataJSON);
}
