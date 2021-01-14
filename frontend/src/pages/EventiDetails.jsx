import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { eventiService } from '../service/eventiService.js'
// import { eventiReview } from './eventiReview'
// import { removeEventi } from '../store/actions/eventiActions.js'

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
                <div className="media-details">
                    <img className="img-detail-sq" src="https://a0.muscache.com/im/pictures/1025bbe7-91ce-4c77-8b36-db60e8d27ea1.jpg?im_w=320"></img>
                    <img className="img-detail-sq" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1655371-media_library/original/c5621f2b-c20c-487e-9684-ac3342423e14.jpeg?im_w=320"></img>
                    <img className="img-detail-rec" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1655371-media_library/original/12af0782-8256-453a-a16c-0fe41e3dedd8.jpeg?im_w=240"></img>
                    <img className="img-detail-rec" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1655371-media_library/original/4275884e-ccfa-404b-8ea5-7251a3ecb827.jpeg?im_w=240"></img>
                </div>
                <div className="main-details">
                    <div className="cycle-list">
                        <div className="cycle-preview">
                            <div className="left-side">
                                <h1>{eventi.title}</h1>
                                <h3>TICKETS</h3>
                            </div>
                            <div className="right-side">
                                <h3>TICKETS LEFT</h3>
                                <h3>CHOOSE</h3>
                            </div>
                            <button>MORE DETAILS</button>
                        </div>
                    </div>
                    {/* <img src={ eventi.imgUrl? eventi.imgUrl : `https://robohash.org/${eventi._id}?set=set3`} /> */}
                </div>
                <div className="left-desc">
                    <h4>Price:  $</h4>
                    <h5>eventi type: eventi Title</h5>
                    <p>eventi Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aperiam molestiae ratione iure. Placeat reiciendis voluptate beatae aut alias! Sed fuga iste repellendus officia quas fugit delectus autem voluptatem enim! </p>
                    <p></p>
                </div>
                {/* </div> */}
                {/* <div className="details-btn">
          {loggedInUser.isAdmin && <button onClick={() => this.onRemove(eventi._id)} className="delete-btn">Delete</button>}
          {loggedInUser.isAdmin && <button className="edit-btn"><Link to={`/eventi/edit/${eventi._id}`}>Edit</Link></button>}
        </div>  */}
                {/* {<EventiReview eventiId={this.props.match.params.eventiId}/> */}
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