
var SideAd = function SideAd(_ref) {
    var images = _ref.images,
        page = _ref.page;

    var index = Math.floor(Math.random() * (images.length - 1)) + 0;

    return React.createElement(AdCard, { image: images[index], key: index, classAttributes: "", page: page ? page : "#" });
};

// bottom ad
var domContainer = document.querySelector('#ad-bottom-side');
ReactDOM.render(React.createElement(SideAd, { images: IMAGES }), domContainer);

// middle ad
domContainer = document.querySelector('#ad-middle-side');
ReactDOM.render(React.createElement(SideAd, { images: AD_NEWS }), domContainer);