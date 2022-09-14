

let style = document.createElement('style');
style.innerHTML = `
    
    featured-links img {
        max-width: 140px;
        max-height: 140px;
    }
        
    `;
document.head.append(style);


export default class FeaturedLinks extends HTMLElement {
    constructor(links) {
        super();
        this.links = links;
    }

    connectedCallback() {
        this.innerHTML = `
              <!-- Three columns of text below the carousel -->
            <div class="row">
                ${this.links.map(l => `
                  <div class="col-lg-${12 / this.links.length}">
                    ${l.img ? `<img src="${l.img}" alt="{l.title}" />` : '<svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>'}
        
                        <h2>${l.title}</h2>
                        <p>${l.subtitle}</p>
                        <p>${l.callToAction}</p>
                    </div>
                
                `).join('')}
            </div>
        
        `;
    }

}

window.customElements.define('featured-links', FeaturedLinks);