var NewsAd = function NewsAd() {
    var page = NEWS[Math.floor(Math.random() * (NEWS.length - 1))];
    console.log(page);

    return React.createElement(
        "a",
        { href: page.route, alt: page.name },
        React.createElement("img", { className: "img-fluid", src: page.image })
    );
};