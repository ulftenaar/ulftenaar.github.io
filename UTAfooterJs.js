// footer.js
window.onload = function() {
    const UTAfooterHTML = `
    <link rel="stylesheet" href="styles.css">

    <body>
    <div class="footer">
        <a href=vrienden.html>Vrienden. </a> 
       
        <a href= UTAblog.html>Blog.</a>
       </div>
       
    </body>
    `;
    document.body.insertAdjacentHTML('beforeend', UTAfooterHTML);
}