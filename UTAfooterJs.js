// footer.js
window.onload = function() {
    const UTAfooterHTML = `
    <link rel="stylesheet" href="styles.css">

    <body>
    <div class="footer">
        <a href=over.html>Over. </a>
        <a href=vrienden.html>Vrienden.   </a> 
        <a href= UTAblog.html>Blog.  </a>
        <a href= UTAlinks.html>Links.  </a>
        <a href= UTAwerk.html>Nieuws. </a>
        <a href=UTAmuziek.html>Muziek</a>
        <!-- <a target="_blank"href="Muziek/DenkenaanPage/denkenaan.html"> Album.</a> -->
        </div>
        
        </body>
        `
        document.body.insertAdjacentHTML('beforeend', UTAfooterHTML);
    }
    
    // <a target="_blank"href=UTAlinks.html>Links. </a> 
