var NewsAd = function NewsAd() {
    var page = NEWS[Math.floor(Math.random() * (NEWS.length - 1))];
    console.log(page);

    return React.createElement(
        "a",
        { href: page.page, alt: page.name },
        React.createElement("img", { className: "img-fluid", src: page.image })
    );
};

var domContainer = document.querySelector('#news_ad');
ReactDOM.render(React.createElement(NewsAd, null), domContainer);