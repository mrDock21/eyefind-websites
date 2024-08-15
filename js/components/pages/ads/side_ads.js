
const SideAd = ({images, page}) => {
    const index = Math.floor(Math.random() * (images.length - 1)) + 0;

    return (
        <AdCard page={images[index]} key={index} classAttributes="" />
    );
}
