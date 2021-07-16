'use strict';

const ProfileCard = (info) => {
    return (
        <div className="col">
            <div className="card lovemeet-card mt-4">
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
            males: props.type==='male' ? 
                MALES.sort(() => Math.random() - 0.5) : 
                FEMALES.sort(() => Math.random() - 0.5)
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

                 {/** FOOTER */}
                 <div className="row" id="footer">
                    <div className="col-md-12">
                        
                    </div>
                </div>
            </div>
        );
    }
}