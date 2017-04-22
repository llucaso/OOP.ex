$(function() {

	function randomString() {
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';

		for(i = 0; i < 10; i++) {														//funkcja gnerujaca rozne ID
			str += chars[Math.floor(Math.random() * chars.length)];						//+= zmienna + 1
		}
		return str;
	};

	function Column(name) {
		var self = this;																//przyda sie dla funkcji zagniezdzonych
		this.id = randomString();
		this.name = name;
		this.$element = createColumn();
			//tworzenie elementow skladowych kolumny
		function createColumn() {										
			var $column = $('<div>').addClass('column');								//tworze diva i dodaje klase 'column'
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);		//tworze tytuł kolumny oraz wypelniam tekstem przy uzyciu metody text()
			var $columnCardList = $('<ul>').addClass('column-card-list');				//lista na kartki
			var $columnDelete = $('<button>').addClass('btn-delete').text('x');			//przycisk usuwanie karty
			var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');//przycisk dodawanie karty
			//podpinanie odpowiednich zdarzen
			$columnDelete.click(function() {											//funkcja w funkcji? kasowanie kolumny po kliknieciu
				self.removeColumn();
			});

			$columnAddCard.click(function() {
				var cardName = prompt('Card name');
				if (cardName) {
					self.addCard(new Card(cardName));
				}
			});

			//konstruowanie elmentu kolumny
			$column.append($columnTitle);
			$column.append($columnDelete);
			$column.append($columnAddCard);
			$column.append($columnCardList);
			return $column;																//bez tego nie mam odniesienia do stworzonego elementu tam gdzie wywoluje funkcje
		};
	};

	Column.prototype = {
		addCard: function(card) {
			this.$element.children('ul').append(card.$element);
		},													
		removeColumn: function() {
			this.$element.remove();
		}
	};

	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();

	function createCard() {
		var $card = $('<li>').addClass('card');
		var $cardDescription = $('<p>').addClass('card-description').text(self.description);
		var $cardDelete = $('<button>').addClass('btn-delete').text('x');

		$cardDelete.click(function() {
			self.removeCard();

		});

			$card.append($cardDelete)
				.append($cardDescription);
			return $card;
		};
	};

	Card.prototype =  {
		removeCard: function() {
			this.$element.remove();
		}
	}

	var board = {
		name: 'Kanban Board',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},
		$element: $('#board .column-container')
	};

	function initSortable() {
		$('.column-card-list').sortable({
		connectWith: '.column-card-list',
		placeholder: 'card-placeholder'
	}).disableSelection();
	}

	$('.create-column')
		.click(function() {
			var name = prompt('Wpisz nazwe kolumny');
			var column = new Column(name);
			if (name) {
			board.addColumn(column);
		}

		});

	// TWORZENIE KOLUMN
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Skończone');

// DODAWANIE KOLUMN DO TABLICY
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
	var card1 = new Card('Nowe zadanie');
	var card2 = new Card('Stworzyc tablice kanban');

// DODAWANIE KART DO KOLUMN
	todoColumn.addCard(card1);
	doingColumn.addCard(card2);
	
});