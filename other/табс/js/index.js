$(document).ready(function(){
	
	// Variables
	var clickedTab = $(".tabs > .activeg");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".activeg");
	var activeTabHeight = activeTab.outerHeight();
	
	// Show tab on page load
	activeTab.show();
	
	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);
	
	$(".tabs > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("activeg");
		
		// Add class activeg to clicked tab
		$(this).addClass("activeg");
		
		// Update clickedTab variable
		clickedTab = $(".tabs .activeg");
		
		// fade out activeg tab
		activeTab.fadeOut(250, function() {
			
			// Remove active class all tabs
			$(".tab__content > li").removeClass("activeg");
			
			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("activeg");
			
			// update new active tab
			activeTab = $(".tab__content > .activeg");
			
			// Update variable
			activeTabHeight = activeTab.outerHeight();
			
			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(50).fadeIn(250);
				
			});
		});
	});

});