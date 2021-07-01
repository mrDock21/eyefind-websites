class AdCard extends React.Component {
    render() {
        return(
            <div className={this.props.boot}>
                {/** BOOT stands for bootstrap xD */}
                <div className="card">
                    <img href="#" alt="" className="card-img-top" src={this.props.image} />
                </div>
            </div>
        );
    }
}