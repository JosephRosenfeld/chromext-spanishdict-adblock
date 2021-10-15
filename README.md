# chromext-spanishdict-adblock

A lot of us use adblocks as we browse the internet, however there are several sites that will display a modal in the aims of stopping you from accessing the information on their site. Now Although they may be displaying a popup that says "Please remove you Adblock" a lot of times the content you want is already loaded and displayed behind that modal. This is the case for the Spanish Dictionary site that I use very often (https://www.spanishdict.com). 

All this chrome extension does is listen for mutations on the body element and all child elements and checks if there was a new element with the class of "ReactModalPortal". Once detected it will remove this element from the DOM and you continue your browsing with an Adblock!
