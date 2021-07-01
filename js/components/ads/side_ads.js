
function SideAd(){
    const images = new Array(
        "img/ad_small/_1.png", "img/ad_small/_2.png", "img/ad_small/_3.png",
        "img/ad_small/_4.png", "img/ad_small/_5.png", "img/ad_small/_6.png",
        "img/ad_small/_7.png", "img/ad_small/_8.png", "img/ad_small/_9.png",
        "img/ad_small/_10.png", "img/ad_small/_11.png", "img/ad_small/_12.png",
        "img/ad_small/_13.png", "img/ad_small/_14.png", "img/ad_small/_15.png"
    );

    const index = Math.floor(Math.random() * 14) + 0;

    return (
        <AdCard image={images[index]} key={11} boot=""/>
    );
}

// bottom ad
let domContainer = document.querySelector('#ad-bottom-side');
ReactDOM.render(<SideAd />, domContainer);

// middle ad
domContainer = document.querySelector('#ad-middle-side');
ReactDOM.render(<SideAd />, domContainer);

//top add
domContainer = document.querySelector('#ad-top-side');
ReactDOM.render(<SideAd />, domContainer);