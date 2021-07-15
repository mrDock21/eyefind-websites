'use strict';

const ProfileCard = (info) => {
    return (
        <div className="col">
            <div className="card lovemeet-card">
                <div className="card-header">
                    <img src={info.profile.image} className="card-img-top pt-2" alt={info.profile.nickname} />
                </div>
                <div className="card-body">
                    <p className="card-text text-center">{info.profile.nickname}</p>
                    <h5 className="card-title text-center mb-3">{info.profile.age}</h5>
                    <button> MORE </button>
                </div>
            </div>
        </div>
    );
}

class Profiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            males: MALES
        }
    }

    render() {
        const profiles = this.state.males.map((info) => {
            return (
                <ProfileCard key={info.ID} profile={info} />
            );
        });

        return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {profiles}
            </div>
        );
    }
}


let domContainer = document.querySelector('#profiles-page');
ReactDOM.render(<Profiles />, domContainer);