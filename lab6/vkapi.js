document.getElementById("GetFilms").onclick = function () {
  document.getElementById("Films").innerHTML = '';
  var drama = document.getElementsByName('drama')[0];
  var horrors = document.getElementsByName('horrors')[0];
  var fantasy = document.getElementsByName('fantasy')[0];
  var biography = document.getElementsByName('biography')[0];
  var action_movie = document.getElementsByName('action_movie')[0];
  var fantastic_movie = document.getElementsByName('fantastic_movie')[0];
  var thriller = document.getElementsByName('thriller')[0];
  var melodrama = document.getElementsByName('melodrama')[0];
  var comedy = document.getElementsByName('comedy')[0];
  var filters = '';
  if (drama.checked) filters += ' драма@xfilm';
  if (horrors.checked) filters += ' ужасы@xfilm';
  if (fantasy.checked) filters += ' фэнтези@xfilm';
  if (biography.checked) filters += ' биография@xfilm';
  if (action_movie.checked) filters += ' боевик@xfilm';
  if (fantastic_movie.checked) filters += ' фантастика@xfilm';
  if (thriller.checked) filters += ' триллер@xfilm';
  if (melodrama.checked) filters += ' мелодрама@xfilm';
  if (comedy.checked) filters += ' комедия@xfilm';
  var request = 'https://api.vk.com/method/wall.search?&count=100&query=Kinopoisk:&owners_only=1&domain=xfilm&access_token=cbb2acb5cbb2acb5cbb2acb51acbda8969ccbb2cbb2acb597f198377e74de689a142c45&v=5.52';
  $.ajax({
    url: request,
    method: 'GET',
    dataType: 'JSONP',
    success: function (data) {
      var films = selectFilms(data, filters.trim().split(" "));
      textToAdd = "";
      if (films === null) {
        var zeroFilms = document.createElement('div');
        zeroFilms.innerText = "По вашему запросу ничего не найдено";
        document.getElementById("Films").appendChild(zeroFilms);
        return false;
      }
      films.forEach(function (item, i) {
        var textOfFilm = document.createElement('div');
        textOfFilm.innerText = '\n\n\n' + item.text + '\nLikes - ' + item.likes.count;
        document.getElementById("Films").appendChild(textOfFilm);
        var imageOfFilm = document.createElement('div');
        imageOfFilm.innerHTML = '<a href=https://vk.com/xfilm?w=wall-26750264_' + item.id + '><img src =' + item.attachments[0].photo.photo_604 + '></a>';
        document.getElementById("Films").appendChild(imageOfFilm);
      });
    },
    error: function (jqXHR, exception) {
      var msg = '';
      if (jqXHR.status === 0) {
        msg = 'Not connect.\n Verify Network.';
      } else if (jqXHR.status == 404) {
        msg = 'Requested page not found. [404]';
      } else if (jqXHR.status == 500) {
        msg = 'Internal Server Error [500].';
      } else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed.';
      } else if (exception === 'timeout') {
        msg = 'Time out error.';
      } else if (exception === 'abort') {
        msg = 'Ajax request aborted.';
      } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
      }
      var textOfError = document.createElement('div');
      textOfError.innerText = msg;
      document.getElementById("Films").appendChild(textOfError);
    }
  })
}

var BreakException = {}

function selectFilms(data, filters) {
  var filmsText = data.response.items;
  var filtred = [];
  filmsText.forEach(function (film) {
    try {
      filters.forEach(function (filter) {
        if (film.text.indexOf(filter) >= 0) {
          filtred.push(film);
          throw BreakException;
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  });
  return filtred.length > 0 ? filtred.sort(compareRandom) : null;
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}