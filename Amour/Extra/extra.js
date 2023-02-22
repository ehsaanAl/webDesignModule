
const createNav = () => {
    let nav = document.querySelector(".navbar")

    nav.innerHTML = `
        <div class="nav">
        <img src="img/Amour-logo.png" class="brand-logo" alt="brand logo"> 
        
        </div>
        <ul class = "links-container">
            <li class = "link-item"><a href="#" class="link">home</a></li>
            <li class = "link-item"><a href="#" class="link">products</a></li>
            <li class = "link-item"><a href="#" class="link">FAQs</a></li>
            <li class = "link-item"><a href="#" class="link">Quiz</a></li>
            <li class = "link-item"><a href="#" class="link">Thumbnails</a></li>
            <li class = "link-item"><a href="#" class="link">Sitemap</a></li>
            <li class = "link-item"><a href="#" class="link">Extras</a></li>
 

        </ul>
    `;
}



createNav();


