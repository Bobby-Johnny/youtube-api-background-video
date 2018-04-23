var minwidth="759px";
if (window.matchMedia("(min-width: "+minwidth+")").matches) { //Don't want to use it on small screen
	
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 
	var player;
	var videoId='i3Lh4xOdle8';
	var playerConfig = {
	  height: '250',
	  width: '100%',
	  videoId: videoId,
	  playerVars: {
		autoplay: 1,            // Auto-play the video on load
		controls: 0,            // Hise play buttons
		modestbranding: 1,      // Hide Youtube Logo
	  },
	  events: {
		  'onStateChange': onPlayerStateChange,       // reference to Iframe API
			onReady: function(e) {              // mute the video on load
			  e.target.mute();             
		  }
		}
	};
	
	//execute the video in the div on submit
	function onYouTubePlayerAPIReady() {
		   $('#contact #submit').click(function() { //video launched on a submit. You can delete it to be launched at start. 
		      player = new YT.Player('player', playerConfig);
		  });
	}
	//Loop the video when onStateChange=YT.PlayerState.ENDED)
	function onPlayerStateChange(e) {
		if (e.data === YT.PlayerState.ENDED) {
			player.playVideo(); 
		}
	}
}
