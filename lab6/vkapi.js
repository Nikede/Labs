document.getElementById("GetFilms").onclick = function () {
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
  var request = 'https://api.vk.com/method/wall.search?count=10&query=Kinopoisk:' + filters + '&owners_only=1&domain=xfilm&access_token=b94899a65dad4a06f5b6649bcf4f96be8ca64beeb45d6bc5f0b4112947d94d7ca69df48b8becba65cac98&v=5.52';
  $.ajax({
    url: request,
    method: 'GET',
    dataType: 'JSONP',
    success: function(data) {
        console.log(data);
        var arr = data.response.items;
        arr.forEach(function(item, i, arr) {
          console.log(item.text);
          document.getElementsByClassName('Film')[i].innerText = '\n\n\n' + item.text + '\nLikes - ' + item.likes.count;
          document.getElementsByClassName('Image')[i].innerHTML = '<a href=https://vk.com/xfilm?w=wall-26750264_' + item.id + '><img src =' + item.attachments[0].photo.photo_604 + '></a>'
        });
    }
})
}