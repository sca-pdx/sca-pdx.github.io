
export default class NavFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <!-- FOOTER -->
            <footer class="container-fluid">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p>This site in not an official property of the Society for Creative Anachronism.</p>
            </footer>
        `;
    }

}

window.customElements.define('nav-footer', NavFooter);