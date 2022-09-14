const pages = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Events',
        link: '/events/index.html'
    },
    {
        text: 'Articles',
        link: '/articles/index.html'
    }
];

export default class NavHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let active = window.location.pathname;
        this.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">SCA PDX</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                ${pages.map(p => `
                                    <li class="nav-item">
                                        <a class="nav-link ${active === p.link ? 'active' : ''}" href="${p.link}">${p.text}</a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}

window.customElements.define('nav-header', NavHeader);