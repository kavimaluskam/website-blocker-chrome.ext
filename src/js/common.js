/**
 * Website Blocker
 * Copyright (C) Tetsuwo Oishi All Rights Reserved.
 *
 * @author Tetsuwo Oishi <tetsuwo.oishi@gmail.com>
 * @createdAt 2010/11/18
 * @updatedAt 2011/02/22
 */

var LANG = chrome.i18n.getMessage('@@ui_locale');
var is_background = is_background || false;

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-17392775-5']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();