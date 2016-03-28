$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		//var para = $("#sentance").val();
		//var arrayOfStrings = para.split(" ");		
		var facesOfCards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king" ];
		var suitsOfCards = ["diamonds", "spades", "hearts", "clubs"]
		var card = " of ";
		var arrayOfCards = [];
		suitsOfCards.forEach(function(suit){
			facesOfCards.forEach(function(face){
				arrayOfCards.push(face + card + suit);
				$("ul#list").append("<li>" + face + card + suit + "</li>")
			});
	
		});
		
		});
		

});