const NewsAd = () => {
    const page = NEWS[Math.floor(Math.random() * (NEWS.length - 1))];
    console.log(page);

    return(
        <a href={page.route} alt={page.name}>
            <img className="img-fluid" src={page.image} />
        </a>
    );
}
