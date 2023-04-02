'use strict';

const BELA_AD = [
    "./../img/brucies_ela/b-ad-1.jpg",
    "./../img/brucies_ela/b-ad-2.jpg" 
];

class LifestyleAutosSideAds extends React.Component {
    constructor(props) {
        super(props);
    }

    getTopThumbnail(){
        if (Math.random() > 0.5) {
            return (
                <img alt="ad" className="w-100 mb-5" 
                     src="./../img/brucies_ela/b-ad-3.jpg"/>
            );
        }

        return null;
    }

    getSideAd(){
        // since there are only two...
        return (
            <img alt="ad" className="w-100" 
                 src={ BELA_AD[Math.round(Math.random())] }
            />
        );
    }

    render() {
        return (
            <div className="bela-side-ad w-100">
                { this.getTopThumbnail() }
                { this.getSideAd() }
            </div>
        );
    }
}