'use strict';

class BottomAds extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            images: IMAGES,
            indexes: this.randomNum()
        }
    }

    /**
     * Generate 4 random numbers which will represent the image index
     * on the image array
     *
     * @returns array with 4 index
     */
    randomNum () { 
        const set = new Set();

        while(set.size < 4) {
            set.add(Math.floor(Math.random() * (IMAGES.length - 1)) + 0);
        }
        return Array.from(set);
    } 

    render() {
        // set all bottom cards
        const cards = this.state.indexes.map((i) => {
            return (
                <AdCard page={this.state.images[i]} key={i} classAttributes="col-md-3"/>
            );
        });

        return (
            <div className="row mt-3">
                {cards}
            </div>
        );
    }
}
