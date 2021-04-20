
export class Article {
    constructor({id, title, subtitle, img, contentPath}) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.img = img;
        this.contentPath = contentPath;
    }

    getLink() {
        let link = {
            id: this.id,
            title: this.title,
            subtitle: this.subtitle,
            href: '/articles/index.html?id=' + encodeURI(this.id)
        };
        if (this.img) {
            link.img = this.img;
        }
        return link;
    }

    getContent() {
        return fetch(this.contentPath).then(response => response.text());
    }
}