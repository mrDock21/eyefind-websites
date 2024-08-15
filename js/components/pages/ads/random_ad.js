'use strict';

class RandomAd extends React.Component {
    render() {
        const index = Math.floor(Math.random() * (IMAGES.length - 1)) + 0;
        var style = "";

        if (this.props.classAttributes != null)
            style = this.props.classAttributes;

        return (
            <AdCard page={IMAGES[index]} classAttributes={style} />
        );
    }
}
