// Add the +/- to titles
$('.block-title').each(function() {
	$(this).append('<span class="caret"></span>');
});

// If the window is less than 980px wide...
if($(window).width() < 980) {
	// Close all blocks not open by default
	$('.block:not(.block-default-open) .block-title').addClass('block-title-closed');
	$('.block:not(.block-default-open) .content').addClass('block-closed');
}

// If a block is closed by default, close everything
$('.block-default-closed .block-title').addClass('block-title-closed');
$('.block-default-closed .content').addClass('block-closed');

// When the title is clicked...
$('.block-title').click(function() {
	// Toggle the title open/closed 
	$(this).toggleClass('block-title-closed');
	// Toggle the content to open/closed
	$(this).parent().find('.content').toggleClass('block-closed');
});