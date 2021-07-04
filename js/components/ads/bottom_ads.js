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
     * TODO:
     *  return unique index, not duplicates
     * 
     * @returns array with 4 index
     */
    randomNum () { 
        var n = []; 
        for(var i = 0; i < 4; i++){ 
            n.push(Math.floor(Math.random() * (IMAGES.length - 1)) + 0); 
        } 
        return n; 
    } 

    render() {
        // set all bottom cards
        const cards = this.state.indexes.map((i) => {
            return (
                <AdCard image={this.state.images[i]} key={i} classAttributes="col-md-3"/>
            );
        });

        return (
            <div className="row mt-3">
                {cards}
            </div>
        );
    }
}

let domContainer = document.querySelector('#bottom-ads-container');
ReactDOM.render(<BottomAds />, domContainer);