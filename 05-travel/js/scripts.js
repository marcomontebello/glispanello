
	
(function ($) {

    "use strict";

	// JQUERY LIGHT BOX
	
	if ( $.isFunction($.fn.fluidbox) ) {
		$('a').fluidbox();
	}

	
	$('a[href="#"]').on('click', function(event){
		return;
	});
	
	// COUNTDOWN TIME 
	
	countdownTime();
	
	
	$('[data-nav-menu]').on('click', function(event){
		
		var $this = $(this),
			visibleHeadArea = $this.data('nav-menu');
		
		$(visibleHeadArea).toggleClass('visible');
		
	});
	
	
	var winWidth = $(window).width();
	dropdownMenu(winWidth);
	
	$(window).on('resize', function(){
		dropdownMenu(winWidth);
		
	});
	
	// Circular Progress Bar
	
	var isAnimated = false;
	
	
})(jQuery);



function countdownTime(){
	
	if(isExists('#clock')){
		$('#clock').countdown('2020/06/30', function(event){
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-sec"><span class="title">%D</span> days </div>'
				+ '<div class="time-sec"><span class="title">%H</span> hours </div>'
				+ '<div class="time-sec"><span class="title">%M</span> minutes </div>'
				+ '<div class="time-sec"><span class="title">%S</span> seconds </div>'));
		});
	}
}
function dropdownMenu(winWidth){
	
	if(winWidth > 767){
		
		$('.main-menu li.drop-down').on('mouseover', function(){
			var $this = $(this),
				menuAnchor = $this.children('a');
				
			menuAnchor.addClass('mouseover');
			
		}).on('mouseleave', function(){
			var $this = $(this),
				menuAnchor = $this.children('a');
				
			menuAnchor.removeClass('mouseover');
		});
		
	}else{
		
		$('.main-menu li.drop-down > a').on('click', function(){
			
			if($(this).attr('href') == '#') return false;
			if($(this).hasClass('mouseover')){ $(this).removeClass('mouseover'); }
			else{ $(this).addClass('mouseover'); }
			return false;
		});
	}
	
}

function isExists(elem){
	if ($(elem).length > 0) { 
		return true;
	}
	return false;
}

function initMap() {

	// Create a new StyledMapType object, passing it an array of styles,
	// and the name to be displayed on the map type control.
	var styledMapType = new google.maps.StyledMapType(
	[
		{
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [
				{
					"saturation": "50"
				}
			]
		},
		{
			"featureType": "administrative.province",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
				{
					"saturation": 100
				},
				{
					"lightness": 65
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"saturation": 100
				},
				{
					"lightness": "50"
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
				{
					"saturation": "100"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "all",
			"stylers": [
				{
					"lightness": "30"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [
				{
					"lightness": "40"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
				{
					"saturation": 100
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{
					"lightness": -25
				},
				{
					"saturation": -100
				}
			]
		}
	],
		{name: 'Styled Map'});

	// Create a map object, and include the MapTypeId to add
	// to the map type control.

	var feroleto = {lat: 38.461797, lng: 16.0718088};
	var lamezia = {lat: 38.907503, lng: 16.243597};
	var reggio = {lat:38.072949, lng:15.649104};
	var catania = {lat:37.468135, lng:15.066300};
	var marco = {lat:37.963768, lng:15.379014};
	var giovanna = {lat:38.490436, lng:15.976192};



	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: feroleto
    });
		
	var image = 'images/google-marker.png';
	var airport = 'images/airplane_icon.png'
	var sposo = 'images/1f935.png'
	var sposa = 'images/sposa.png'
	var marker = new google.maps.Marker({
		position: feroleto,
		map: map,
		icon: image
	});

	var lamezia = new google.maps.Marker({
		position: lamezia,
		map: map,
		icon: airport
	});


	var reggio = new google.maps.Marker({
		position: reggio,
		map: map,
		icon: airport
	});

	var catania = new google.maps.Marker({
		position: catania,
		map: map,
		icon: airport
	});

	var marco = new google.maps.Marker({
		position: marco,
		map: map,
		icon: sposo
	});

	var gio = new google.maps.Marker({
		position: giovanna,
		map: map,
		icon: sposa
	});
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}