'use strict';

class BottomAds extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            images: new Array(
                "img/ad_small/_1.png", "img/ad_small/_2.png", "img/ad_small/_3.png",
                "img/ad_small/_4.png", "img/ad_small/_5.png", "img/ad_small/_6.png",
                "img/ad_small/_7.png", "img/ad_small/_8.png", "img/ad_small/_9.png",
                "img/ad_small/_10.png", "img/ad_small/_11.png", "img/ad_small/_12.png",
                "img/ad_small/_13.png", "img/ad_small/_14.png", "img/ad_small/_15.png"
            ),
            indexes: this.randomNum(0, 14)
        }
    }

    randomNum (min, max) { 
        var n = []; 
        for(var i = 0; i < 4; i++){ 
            n.push(Math.floor(Math.random() * max) + min); 
        } 
        return n; 
    } 

    componentDidMount() {
        console.log(this.state);
    }

    render() {
        const cards = this.state.indexes.map((i) => {
            return (
                <AdCard image={this.state.images[i]} key={i}/>
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