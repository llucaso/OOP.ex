$(function() {

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
var capitalCity = $('#capital');
var container = $('#container');
var containerCapital = $('#container-capital')


$('#search')
  .click(searchCountries);

function searchCountries () {
  var countryName = $('#country-name').val();                   
  if(!countryName.length) countryName = 'Poland';                

  $.ajax({                                           
      url: url + countryName + '?fullText=true/',
      method: 'GET',
      success: showCountriesList
    });
}






function showCountriesList(resp) {
    container.empty();
    containerCapital.empty();              //nie dziala

resp.forEach(function(item) {
      $('#container')
        .text(item.name)
        .appendTo(container);
      //$('<li>').text(item.capital).appendTo(capitalCity);

$(container)
  .one('mouseup', function() {
        $('#container-capital')
          .appendTo('#container-capital')
          .text(item.capital);
          
          

});

});

}

});