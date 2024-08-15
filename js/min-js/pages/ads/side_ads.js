
var SideAd = function SideAd(_ref) {
    var images = _ref.images,
        page = _ref.page;

    var index = Math.floor(Math.random() * (images.length - 1)) + 0;

    return React.createElement(AdCard, { page: images[index], key: index, classAttributes: "" });
};