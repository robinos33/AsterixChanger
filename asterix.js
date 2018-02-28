function replaceAsterisks() {
    const srcAsterix = '<img src="http://i67.tinypic.com/2cib2wy.jpg" width="32"/>';
    const tags = ["body", "span", "p", "div", "h1", "h2", "h3", "h4", "h5", "form", "label"];
    tags.map(function (tag) {
        let elements = document.querySelectorAll(tag);
        [].forEach.call(elements, function (element) {
            element.innerHTML = element.innerHTML.replace('*', srcAsterix);
        });
    });
}
replaceAsterisks();




