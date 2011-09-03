#SocialLoader
SocialLoader ist ein jQuery-Plugin, das hilft [die datenschutzrechtlichen Probleme mit Facebook-Buttons](http://www.zdnet.com/blog/facebook/germany-facebook-like-button-violates-privacy-laws/2837 "Germany - Facebook-like button violates privacy laws") zu vermeiden. Es lädt die Buttons von Facebook, Google+ & Co erst bei Bedarf nach und zeigt vorher in einem Tooltip ggf. einen Datenschutzhinweis an.

Das Plugin ist nach Vorbild der [SWR3-Webseite](http://www.swr3.de/info/computer-und-netz/Wer-hat-Angst-vor-Google-Facebook/-/id=63956/did=1177470/gsg6rv/index.html) entwickelt worden  (siehe Buttons unter dem Artikel).

## Usage
    	<head>
			<script src="jquery.js" type="text/javascript" charset="utf-8"></script>
			<script src="socialloader.js" type="text/javascript" charset="utf-8"></script>
		
			<script type="text/javascript" charset="utf-8">
				$('.facebook-share').socialLoader({	'tooltip': 'Datenschutz: Erst Share-Button einblenden, dann nochmal drauf drücken. Dadurch wird eine Verbindung zu Facebook hergestellt.',
										  			'code': '<a class="facebook" href="http://www.facebook.com/sharer.php" name="fb_share" share_url="https://github.com/cschell/SocialLoader" type="button">Share</a>',
										  			'script': 'http://static.ak.fbcdn.net/connect.php/js/FB.Share'});
			</script>
		</head>
		<body>
			<div class="facebook-share"><img src="facebook-share.png" alt="facebook share" /></div>
		</body>

## Parameters
 - **tooltip**: Text that shows up while hovering over the button
 - **code**: Code that replaces the static button and loads the original (Facebook-) button
 - **script**: Script that will be loaded right after clicking on the static button
 - **loaderClass**: CSS-class of the static button (optional, default 'socialLoader')
 - **tooltipClass**: CSS-class of the tooltip (optional, default 'tooltip')
 - **tooltipCss**: CSS for the tooltips, set to false if not needed or type in your own css in json format