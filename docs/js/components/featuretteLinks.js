
let style = document.createElement('style');
style.innerHTML = `
    
  featurette-links .featurette:hover {
    background-color: var(--bs-light);
    
  }
  
  featurette-links  a {
      color: inherit;
      text-decoration: none;
    }
    
    `;
document.head.append(style);


export default class FeaturetteLinks extends HTMLElement {
    constructor(featurettes) {
        super();
        this.featurettes = featurettes;
    }

    connectedCallback() {
        this.innerHTML = `

            ${this.featurettes.map((f, i) => `
             <hr class="featurette-divider">
            <a href="${f.href}">
                <div class="row featurette">
                    <div class="col-md-7 ${i % 2 !== 0 ? 'order-md-2' : ''}">
                        <h2 class="featurette-heading">${f.title}</h2>
                        <p class="lead">${f.subtitle}</p>
                    </div>
                    <div class="col-md-5">
                        ${f.img ? `<img src="${f.img}" />` : '<svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>'}
                    </div>
                </div>
            </a>
            `).join('')}
    
            <hr class="featurette-divider">
        
        `;
    }

}

window.customElements.define('featurette-links', FeaturetteLinks);