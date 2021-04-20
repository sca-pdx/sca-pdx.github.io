
export function ensureStyleIsPresent(href) {
    if (!document.head.querySelector(`[href="${href}"]`)) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.append(link);
    }
}