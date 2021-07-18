const NewsAd = () => {
    const page = NEWS[Math.floor(Math.random() * (NEWS.length - 1))];
    console.log(page);

    return(
        <a href={page.page} alt={page.name}>
            <img className="img-fluid" src={page.path} />
        </a>
    );
}

let domContainer = document.querySelector('#news_ad');
ReactDOM.render(<NewsAd />, domContainer);