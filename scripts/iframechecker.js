const hublink="https://spew45.github.io/new-website"
if(window!==window.parent)
{try{if(window.parent.location.toString()==='about:blank'){}}catch(err){if((window.location.host)!==(document.referrer.split('/')[2])&&(!document.referrer.includes('extremelinks'))){window.location.replace(hublink);}}}
else if((window.location.href.includes('gamefiles'))||(window.location.href.includes('swf.html'))){window.location.replace(document.referrer||(window.location.origin+'/notecards.html'));}