$(document).ready(function () {
  $('body').on('submit', '#form1', function (e) {
    let searchtext = $('#Searchtext').val();
    getMovieList(searchtext);
    e.preventDefault();
  });


});


$(document).on('pagebeforeshow', '#MovieDetail', function () {
  let myMovieid = sessionStorage.getItem('imdbID');
  GetsinglemoviedetailAPI(id);
});

function Getsinglemoviedetail(id) {

  console.log(id);
  sessionStorage.imdbID = id;
  //window.location.href = "MovieDetail.aspx";
  //$.mobile.changePage('MovieDetail.aspx');
  $('#home').hide();
  $('#moviedetail').show();
  GetsinglemoviedetailAPI(sessionStorage.imdbID);

  $('#BackButton').on('click', () => {
    $('#home').show();
    $('#moviedetail').hide();

  });


  
}

function getMovieList(searchtext) {
  $.ajax({
    method: 'GET',
    url: 'https://www.omdbapi.com/?apikey=4c9c4dc2&s=' +searchtext
  }).done(function (data) {
    $('#movieposter').hide(); 

    let movies = data.Search;
    let output = '';
    $.each(movies, function (index,movie) {

      output +=  `
        <li>
        <a onClick=Getsinglemoviedetail('${movie.imdbID}') href="#">
        <img src = "${movie.Poster}"
        <h2>"${movie.Title}"</h2>
        <h2>Released on "${movie.Year}"</h2>
        </a>
      </li >
      `;
       
    });
    $('#movies').html(output).listview('refresh');

  });

}


function GetsinglemoviedetailAPI(id) {
 
  $.ajax({
    method: "GET",
    url: 'https://www.omdbapi.com/?apikey=4c9c4dc2&i=' + id

  }).done(function (movie) {
    let movieTop = `
    <div style="text-align:center">
      <h1>${movie.Title}</h1>
      <img src=${movie.Poster}></img>
    </div>
`;
   // $('#movieTop').html(movieTop).listview('refresh');  
    $('#movieTop').html(movieTop);

    let movieDetails = `
    <li><strong>Genre:</strong>${movie.Genre}</li>
    <li><strong>IMDB Rating:</strong>${movie.imdbRating}</li>
    <li><strong>IMDB Votes:</strong>${movie.imdbVotes}</li>
    <li><strong>Rotten Tomatoes Rating:</strong>${movie.Ratings[1].Value}</li>
    <li><strong>Metacritic Rating:</strong>${movie.Ratings[2].Value}</li>
    <li><strong>Rated:</strong>${movie.Rated}</li>
    <li><strong>Released on :</strong>${movie.Released}</li>
    <li><strong>Total Duration:</strong>${movie.Runtime}</li>
    <li><strong>Actors:</strong>${movie.Actors}</li>
    <li><strong>Director:</strong>${movie.Director}</li>
    <li><strong>BoxOffice Collection:</strong>${movie.BoxOffice}</li>
     <li><strong>Plot:</strong>${movie.Plot}</li>

`;
    $('#movieDetails').html(movieDetails);


  });
}
