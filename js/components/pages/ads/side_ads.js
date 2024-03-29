
const SideAd = ({images, page}) => {
    const index = Math.floor(Math.random() * (images.length - 1)) + 0;

    return (
        <AdCard page={images[index]} key={index} classAttributes="" />
    );
}

// bottom ad
let domContainer = document.querySelector('#ad-bottom-side');
ReactDOM.render(<SideAd images={IMAGES} />, domContainer);

// middle ad
domContainer = document.querySelector('#ad-middle-side');
ReactDOM.render(<SideAd images={AD_NEWS} />, domContainer);