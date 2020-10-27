$(".animal1").hide();
$(".animal2").hide();
$(".animal3").hide();
$(".back").hide();
$(".deforestation").hide();

$(".wild").click(function() {
	$(".animal1").show();
	$(".animal1").css("width", "300px");
	$(".animal2").show();
	$(".animal3").show();
// 	Make deforestation pic show here
// Make deforestation info show here
	$(".wild").hide();
});

$(".animal1").click(function() {
	$(".animal2").hide();
	$(".animal3").hide();
	$(".title").text("Mountain Gorilla");
	$(".animal1").css("width", "300px");
	$(".animal1").css("text-align", "center");
	$(".back").show();
	$(".gorillatext").text("Mountain gorillas are considered critically endangered by IUCN's Red List. Not only are mountain gorillas threatened by loss of habitat due to human encroachment, they have also become victims of human violence. Eastern gorilla, has become the most endangered type of gorilla, Currently, the mountain gorilla’s habitat is limited to protected national parks in two regions of Africa. One group of gorillas lives in the Bwindi Impenetrable National Park in Uganda. The other group is spread over three national parks in the Virungas mountain region of the Democratic Republic of Congo, Uganda, and Rwanda.");
});

$(".animal2").click(function() {
	$(".animal1").hide();
	$(".animal3").hide();
	$(".title").text("Mission Blue Butterfly");
	$(".animal2").css("width", "300px");
	$(".animal2").css("text-align", "center");
	$(".back").show();
	$(".butterflytext").text("The  mission blue became one of the first insects added to the federal endangered species list in 1976. Today, mission blue butterflies survive only in parts of the Golden Gate National Recreation Area, Twin Peaks, and San Bruno Mountain. The population of the mission blue butterfly is about  500 at Twin Peak,they are protected by the Endangered Species Act, they are endangered because their Habitat are lost because urbanization and invasive plant species.");
});

$(".animal3").click(function() {
	$(".animal1").hide();
	$(".animal2").hide();
	$(".title").text("Mountain Gorilla");
	$(".animal3").css("width", "300px");
	$(".animal3").css("text-align", "center");
	$(".back").show();
	$(".koalatext").text("It has been listed as Vulnerable in New South Wales and a remnant population around Avalon on Sydney's northern beaches is listed as an Endangered population under the NSW Threatened Species Conservation Act 1995. They are suffering from the effects of habitat destruction, domestic dog attacks, bushfire, and road accident. Australian Koala Foundation estimates that there are less than 100,000 Koalas left in the wild, possibly as few as 43,000.");
});

$(".back").click(function() {
    $(".animal1").show();
    $(".animal1").css("width", "300px");
	$(".animal2").show();
	$(".animal2").css("width", "300px");
	$(".animal3").show();
	$(".animal3").css("width", "300px");
	$(".title").text("Hack the Wild");
});

$(".deforestation").click(function() {
    $(".animal1").hide();
	$(".animal2").hide();
	$(".title").text("Deforestation");
	$(".animal3").css("width", "300px");
	$(".animal3").css("text-align", "center");
	$(".back").show();
	$(".deforestationtext").text("Deforestation and forest degradation are the biggest threats to forests worldwide, over half of the tropical forests worldwide have been destroyed since the 1960s, and every second, more than one hectare of tropical forests is destroyed or drastically degraded. The degradation and loss of forests threatens the survival of many species, and reduces the ability of forests to provide essential services.");
});