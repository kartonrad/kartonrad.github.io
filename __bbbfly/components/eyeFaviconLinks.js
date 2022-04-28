function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function render_component_eyeFaviconLinks(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FeyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-32.png\" sizes=\"32x32\" type=\"image\u002Fpng\"\u002F\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FeyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-128.png\" sizes=\"128x128\" type=\"image\u002Fpng\"\u002F\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FeyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-152.png\" sizes=\"152x152\" type=\"image\u002Fpng\"\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FeyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-167.png\" sizes=\"167x167\" type=\"image\u002Fpng\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FeyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-180.png\" sizes=\"180x180\" type=\"image\u002Fpng\"\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FeyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-192.png\" sizes=\"192x192\" type=\"image\u002Fpng\"\u002F\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FeyeFaviconLinks.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"\u002Fassets\u002FeyeFavicons\u002Ffavicon-196.png\" sizes=\"196x196\" type=\"image\u002Fpng\"\u002F\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}