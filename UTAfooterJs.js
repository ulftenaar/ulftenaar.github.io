// footer.js
window.onload = function() {
    const UTAfooterHTML = `
    <link rel="stylesheet" href="styles.css">

    <body>
    <div class="footer">
        <a target="_blank"href=vrienden.html>Vrienden.   </a> 
        <a target="_blank"href= UTAblog.html>Blog.  </a>
        <a target="_blank"href= UTAlinks.html>Links.  </a>
        <a target="_blank"href= UTAwerk.html>Nieuws. </a>
        <!-- <a target="_blank"href="Muziek/DenkenaanPage/denkenaan.html"> Album.</a> -->
        </div>
        
        </body>
        `
        document.body.insertAdjacentHTML('beforeend', UTAfooterHTML);
    }
    
    // <a target="_blank"href=UTAlinks.html>Links. </a> 
