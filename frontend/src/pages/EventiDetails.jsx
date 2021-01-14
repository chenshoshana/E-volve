// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { eventiService } from '../service/eventiService.js'
// import { eventiReview } from './eventiReview'
// import { removeEventi } from '../store/actions/eventiActions.js'
import { CyclesCard, EventiFeaturPost, HostFeaturPost, ReviewsFeaturPost } from './EventiDetailscopy.jsx'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import Box from '@material-ui/core/Box';
import { CycleList } from './../cmps/CycleList';


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
        return (<section className="eventi-details">
            <div className="eventi-details-grid">
                < div className="share-like" >
                    <Box px={2} pb={2} mt={-1}>
                        <IconButton >
                            <Share />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderRounded />
                        </IconButton>
                    </Box></div >
                <div className="gallery">
                    <img className="img-detail-sq border-right" src={eventi.media.imgUrls}></img>
                    <div className="img-rec-container">
                        <img className="img-detail-rec" src={eventi.media.imgUrls}></img>
                        <img className="img-detail-rec" src={eventi.media.imgUrls}></img>
                    </div>
                    <img className="img-detail-sq" src={eventi.media.imgUrls}></img>
                    <img className="img-detail-sq border-left" src={eventi.media.imgUrls}></img>
                </div>
                <div className="main-details">
                    <EventiFeaturPost eventi={eventi} />
                    <HostFeaturPost eventi={eventi} />
                </div>
                <div className="cycle-list">
                    <button>MORE DETAILS</button>
                    <CycleList cycles={eventi.cycles} />

                    {/* <img src={ eventi.imgUrl? eventi.imgUrl : `https://robohash.org/${eventi._id}?set=set3`} /> */}

                </div>
                {/* </div> */}
                {/* <div className="details-btn">
          {loggedInUser.isAdmin && <button onClick={() => this.onRemove(eventi._id)} className="delete-btn">Delete</button>}
          {loggedInUser.isAdmin && <button className="edit-btn"><Link to={`/eventi/edit/${eventi._id}`}>Edit</Link></button>}
        </div>  */}

                {/* {<EventiReview eventiId={this.props.match.params.eventiId}/> */}
                <div className="review-preview">
                    <h1>Reviews</h1>
                    <ReviewsFeaturPost eventi={eventi} /></div>
            </div ></section >
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