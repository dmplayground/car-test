(function(window, document, undefined) {
	'use strict';

	// Get the global Carsales namespace or create a new one.
	var Carsales = Carsales || {};

  Carsales.dataRender = {

    init: function() {

      var data = {
			  "results": [
			      {
			          "id": "1",
			          "title": "2010 Nissan Dualis +2 Ti J10 Series II Auto AWD MY10",
			          "price": "$24,490",
			          "thumbnail": "https://carsales.li.csnstatic.com/carsales/car/dealer/cd5354384909418908085.jpg?aspect=centered&height=252&width=380"
			      },
			      {
			          "id": "2",
			          "title": "2012 Land Rover Defender Manual 4x4 MY12",
			          "price": "$45,000",
			          "thumbnail": "https://carsales.li.csnstatic.com/carsales/car/private/cp4982841542846685968.jpg?aspect=centered&height=252&width=380"
			      },
			      {
			          "id": "3",
			          "title": "2015 Nissan 370Z Z34 Auto MY15",
			          "price": "$48,987",
			          "thumbnail": "https://carsales.li.csnstatic.com/carsales/car/dealer/a3851a2eacb3a27dcf7e6fab14d5a697.jpg?aspect=centered&height=252&width=380"
			      }
			  ],
			  "savedCars": [
			      {
			          "id": "4",
			          "title": "2012 Mercedes-Benz C250 Blue EFFICIENCY Auto",
			          "price": "$49,500",
			          "thumbnail": "https://carsales.li.csnstatic.com/carsales/car/private/cp4624920815810249927.jpg?aspect=centered&height=252&width=380"
			      }
			  ]
			};

			var resultsCount = Object.keys(data.results).length,
					savedObj = data.savedCars,
					container = '',
					image = '',
					heading = '',
					price = '',
					button = '',
					itemData = '',
					resultWrapper = $('.results'),
					savedWrapper = $('.saved');

			var createElements = function() {
					container = document.createElement('div'),
					image = document.createElement('img'),
					heading = document.createElement('h2'),
					price = document.createElement('p');
			}

			var appendElements = function() {
					container.appendChild(image);
					container.appendChild(heading);
					container.appendChild(price);
			}

			var showResults = function() {
					for(var i = 0; i < resultsCount; i++){
							createElements();
							button = document.createElement('a');

							itemData = {
								"id": data.results[i].id,
								"title": data.results[i].title,
								"price": data.results[i].price,
								"thumbnail": data.results[i].thumbnail
							};

							container.setAttribute('id', 'item' + itemData.id);
							container.setAttribute('data-id', itemData.id);
							container.setAttribute('class', 'car-item');
							button.setAttribute('class','btn add-btn jsAddBtn');


							heading.innerHTML = itemData.title;
							price.innerHTML = itemData.price;
							button.innerText = "Add";

							image.setAttribute('src', itemData.thumbnail);

							appendElements();
							container.appendChild(button);

							var wrapper = document.querySelector('.results');

							wrapper.append(container);
					}
			}

			var showSaved = function () {

				var savedCount = Object.keys(data.savedCars).length,
						savedWrapper = $('.saved');

				for(var j = 0; j < savedCount; j++){
						createElements();

						container.setAttribute('data-id', itemData.id);
						container.setAttribute('class', 'car-item');

						heading.innerHTML = data.savedCars[j].title;
						price.innerHTML = data.savedCars[j].price;

						image.setAttribute('src', data.savedCars[j].thumbnail);

						appendElements();

						savedWrapper.append(container);

				}
			}

			$(document).on('click','.jsAddBtn', function(){
				var addId = $(this).closest('.car-item').data('id') - 1;

				var addData = {
					"id": data.results[addId].id,
					"title": data.results[addId].title,
					"price": data.results[addId].price,
					"thumbnail": data.results[addId].thumbnail
				};

				savedObj.push(addData);
				$('.saved').empty();
				showSaved();
				$(this).attr("disabled", "disabled");

			});

			showResults();
			showSaved();

		}
	};

	Carsales.dataRender.init();

})(window, document);
