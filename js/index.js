// Start slider
$('.carousel').carousel(); 

document.querySelector(".popup-video").addEventListener('click', function(event) {
	// Show modal
  document.querySelector("#youtubePopup").classList.add('open');
});

document.querySelector(".close").addEventListener('click', function(event) {
 	// Hide modal
  document.querySelector("#youtubePopup").classList.remove('open');

  // Stop youtube video when modal close
  $('.embed-responsive-item').each(function() {
    this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
  });
});