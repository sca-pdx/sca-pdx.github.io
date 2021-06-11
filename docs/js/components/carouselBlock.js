import {ensureStyleIsPresent} from "../util/domHelper.js";

let style = document.createElement('style');
style.innerHTML = `
    
    /* CUSTOMIZE THE CAROUSEL
    -------------------------------------------------- */
    
    /* Carousel base class */
    .carousel {
        margin-bottom: 4rem;
    }
    /* Since positioning the image, we need to help out the caption */
    .carousel-caption {
        bottom: 3rem;
        z-index: 10;
    }
    
    /* Declare heights because of positioning of img element */
    .carousel-item {
        height: 32rem;
    }
    .carousel-item > img {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 32rem;
        filter: brightness(0.5);
    }
    
    
    /* MARKETING CONTENT
    -------------------------------------------------- */
    
    /* Center align the text within the three columns below the carousel */
    .marketing .col-lg-4 {
        margin-bottom: 1.5rem;
        text-align: center;
    }
    .marketing h2 {
        font-weight: 400;
    }
    /* rtl:begin:ignore */
    .marketing .col-lg-4 p {
        margin-right: .75rem;
        margin-left: .75rem;
    }
    /* rtl:end:ignore */
    
    
    /* Featurettes
    ------------------------- */
    
    .featurette-divider {
        margin: 5rem 0; /* Space out the Bootstrap <hr> more */
    }
    
    /* Thin out the marketing headings */
    .featurette-heading {
        font-weight: 300;
        line-height: 1;
        /* rtl:remove */
        letter-spacing: -.05rem;
    }
    
    
    /* RESPONSIVE CSS
    -------------------------------------------------- */
    
    @media (min-width: 40em) {
        /* Bump up size of carousel content */
        .carousel-caption p {
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.4;
        }
    
        .featurette-heading {
            font-size: 50px;
        }
    }
    
    @media (min-width: 62em) {
        .featurette-heading {
            margin-top: 7rem;
        }
    }
    
    `;
document.head.append(style);

export default class CarouselBlock extends HTMLElement {

    /**
     * @param panels
     */
    constructor(panels) {
        super();
        this.panels = panels;
    }

    connectedCallback() {
        this.innerHTML = `
              <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    ${this.panels.map((p, i) => `
                         <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>
                    `).join('')}
                </div>
                <div class="carousel-inner">
                    ${this.panels.map((p, i) => `
                         <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            ${p.img ? `<img src="${p.img}" alt="Placeholder image"/>` : '<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>'}
                            <div class="container">
                                <div class="carousel-caption text-start">
                                    <h1>${p.title}</h1>
                                    <p>${p.subtitle}</p>
                                    <p>${p.callToAction}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                   
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        
        `
    }

}

window.customElements.define('carousel-block', CarouselBlock);