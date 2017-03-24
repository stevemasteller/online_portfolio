
/************************************************/
/* Audio Loop                                   */
/************************************************/
var loopLimit = 2;
var loopCounter = 0;
document.getElementById('loop-limited').addEventListener('ended', function(){
    if (loopCounter < loopLimit){
        this.currentTime = 0;
        this.play();
        loopCounter++;
    }
}, false);   


/************************************************/
/* lightbox (lightgallery) setup                               */
/************************************************/
$('.gallery').lightGallery({
	height: "75%",
	width: "75%",
	iframeMaxWidth: "75%",
	useleft: true,
	controls: false,
	download: false,
	counter: false,
	preload: 0
});


/************************************************/
/* Sort (mixitup) setup                         */
/************************************************/
var mixer = mixitup('.container', {
	selectors: {
		target: '.mix'
	},
	animation: {
		enable: true
	}
});


/************************************************/
/* Typeing (malarkey) setup                     */
/************************************************/
var elem = document.querySelector('.malarkey');
var elem1 = document.querySelector('.malarkey1');
var elem2 = document.querySelector('.malarkey2');
var elem3 = document.querySelector('.malarkey3');
var opts = {
	typespeed: 50,
	loop: false,
};

var type  = malarkey(elem, opts).pause(500).type("Follow your passion, be prepared to work hard and sacrifice,").pause(400).type(" and, above all").pause(150).type(", don't let anyone limit your dreams.");

var type1 = malarkey(elem1, opts).pause(7000).type(" - Donovan Bailey");

var type2  = malarkey(elem2, opts).pause(9000).type("Hi!. My name is Steve Masteller. I’m an aspiring web developer who loves everything about the web. I'm a life-long learner who's always interested in expanding my skills, and now I am excited to bring my life experience to the process of building fantastic looking websites.");

var type3  = malarkey(elem3, opts).pause(24000).type("While relatively new to web development and javascript, I have over 20 years experience as a proffessional").pause(1500).delete("fessional",200).type("essional programmer. I believe this experience is reflected in the quality of my code.");


/*****************************************
* Display Squeeze Page
******************************************/
var displaySqueezePage = function() {
		$('.squeeze-page').css('display', 'block');			
}

// event handler for opt-in button on squeeze page
$('button.opt-in').click( function() {
	$('.squeeze-page').css('display', 'none');
	window.location.href = '#contact-page';
});

// event handler for opt-out button on squeeze page
$('button.opt-out').click( function() {
	$('.squeeze-page').css('display', 'none');
	window.location.href = '#gallery-page';
});

/*****************************************
* implement Squeeze Page
*****************************************/
setTimeout( function() {displaySqueezePage()}, 38000);

