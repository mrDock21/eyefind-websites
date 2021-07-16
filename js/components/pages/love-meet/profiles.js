'use strict';

const Profile = ({profile, updatePage}) => {
    return (
        <div className="row row-cols-1">
            <div className="col">
                <div className="card lovemeet-card mt-4">
                    <div className="card-body">
                        <div className="row">
                            
                            {/** Left col with basic info */}
                            <div className="col-md-4">
                                <img src={profile.image} className="w-100" alt={profile.nickname} />
                                <p className="card-text text-center">{profile.nickname}</p>
                                <p className="card-text text-center">{profile.age}</p>
                            </div>

                            {/** Right col with description */}
                            <div className="col-md-8">
                                <FormatText className="card-description" text={'LOC:|' + profile.location} delimiter={'|'} /><br/>
                                <FormatText className="card-description" text={'JOB:|' + profile.job} delimiter={'|'} /><br/>
                                <FormatText className="card-description" text={'SEXUALITY:|' + profile.sexuality} delimiter={'|'} /><br/>
                                <FormatText className="card-description" text={'BUILD:|' + profile.build} delimiter={'|'} /><br/>
                                <FormatText className="card-description" text={'ABOUT ME:|' + profile.about} delimiter={'|'} /><br/>
                                <FormatText className="card-description" text={'LIKES:|' + profile.likes} delimiter={'|'} /><br/>
                                <FormatText className="card-description" text={'DISLIKES:|' + profile.dislikes} delimiter={'|'} /><br/> 
                            </div>
                        </div>
                    </div>

                    {/** Bottom buttons */}
                    <div className="card-body">
                        <div className="row">    
                            <div className="col-md-4">
                                <button onClick={() => updatePage('main')}> BACK </button>
                            </div>

                            <div className="col-md-4 offset-4">
                                <button> DATE </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/** Empty space */}
            <div className="mt-5">

            </div>
        </div>
    );
}

const ProfileCard = ({profile, updatePage}) => {
    return (
        <div className="col">
            <div className="card lovemeet-card mt-4">
                <div className="card-header">
                    <img src={profile.image} className="card-img-top pt-2" alt={profile.nickname} />
                </div>
                <div className="card-body">
                    <p className="card-text text-center">{profile.nickname}</p>
                    <h5 className="card-title text-center mb-3">{profile.age}</h5>
                    <button onClick={() => updatePage(profile)}> MORE </button>
                </div>
            </div>
        </div>
    );
}

class Profiles extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            males: props.type==='male' ? 
                MALES.sort(() => Math.random() - 0.5) : 
                FEMALES.sort(() => Math.random() - 0.5)
        }
    }

    render() {
        const profiles = this.state.males.map((info) => {
            return (
                <ProfileCard key={info.ID} profile={info} updatePage={this.props.updatePage} />
            );
        });

        return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {profiles}

                {/** Empty space */}
                <div className="mt-5"></div>
            </div>
        );
    }
}