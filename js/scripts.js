var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalCity = $('#capital');

$('#search').click(searchCountries);

function searchCountries () {
	var countryName = $('#country-name').val();				//metoda val() wyszukiwanie wpisanej wartosci
	if(!countryName.length) countryName = 'Poland';

	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  	countriesList.empty();
  	capitalCity.empty();
resp.forEach(function(item) {
   		$('<li>').text(item.name).appendTo(countriesList);
   		$('<li>').text(item.capital).appendTo(capitalCity);
});
}


