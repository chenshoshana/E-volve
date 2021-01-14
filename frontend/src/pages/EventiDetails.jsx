// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { eventiService } from '../service/eventiService.js'
// import { eventiReview } from './eventiReview'
// import { removeEventi } from '../store/actions/eventiActions.js'
import { EventiFeaturPost, HostFeaturPost, ReviewsFeaturPost, CyclesCard, DatePickers } from './EventiDetailscopy.jsx'


export class EventiDetails extends Component {

    state = {
        eventi: null,
    }

    componentDidMount() {
        this.loadEventi()
    }

    loadEventi = async () => {
        const { eventiId } = this.props.match.params
        const eventi = await eventiService.getById(eventiId)
        this.setState({ eventi })

    }
    // loadToy = async () => {
    //   const { toyId } = this.props.match.params
    //   const toy = await toyService.getById(toyId)
    //   this.setState({ toy })

    // }

    // onRemove = (eventiId) => {
    //   console.log(this.state.eventi);
    //   this.props.removeEventi(eventiId)
    //   this.props.history.push('/eventi')

    // }


    render() {
        const { eventi } = this.state;
        // const { loggedInUser } = this.props
        if (!eventi) return <h1>Loading...</h1>
        return (
            <section className="eventi-details">

                <h4>like | share</h4>
                <div className="media-details">
                    <img className="img-detail-sq border-right" src={eventi.media.imgUrls}></img>
                    <div className="img-rec-container">
                        <img className="img-detail-rec" src={eventi.media.imgUrls}></img>
                        <img className="img-detail-rec" src={eventi.media.imgUrls}></img>
                    </div>
                    <img className="img-detail-sq" src={eventi.media.imgUrls}></img>
                    <img className="img-detail-sq border-left" src={eventi.media.imgUrls}></img>
                </div>
                <div className="main-details">
                    <div className="right-desc">
                        <EventiFeaturPost eventi={eventi} />
                        <div className="">
                            <HostFeaturPost eventi={eventi} />
                        </div>
                    </div>
                    <div>
                        <CyclesCard eventi={eventi} />
                        <DatePickers />
                    </div>
                </div>
                {/* </div> */}
                {/* <div className="details-btn">
          {loggedInUser.isAdmin && <button onClick={() => this.onRemove(eventi._id)} className="delete-btn">Delete</button>}
          {loggedInUser.isAdmin && <button className="edit-btn"><Link to={`/eventi/edit/${eventi._id}`}>Edit</Link></button>}
        </div>  */}
                {/* {<EventiReview eventiId={this.props.match.params.eventiId}/> */}
                <h1>Reviews</h1>
                <ReviewsFeaturPost eventi={eventi} />
            </section>
        )
    }
}

// const mapStateToProps = state => {
//   return {
//     eventis: state.eventiModule.eventis,
//     loggedInUser: state.userModule.loggedInUser,
//   }
// }

// const mapDispatchToProps = {
//   removeEventi
// }

// export const EventiDetails = connect(mapStateToProps)(_EventiDetails);