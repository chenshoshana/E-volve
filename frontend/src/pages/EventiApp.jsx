import { Component } from 'react'
import {connect} from 'react-redux'
import {EventiList} from './EventiList.jsx'
import {loadEventis} from '../store/action/eventiActions.js'

export class _EventiApp extends Component {

    componentDidMount() {
        this.props.loadEventis(this.props.filterBy)
        console.log('Got from store:', this.props);
    }

    // onRemove = (eventiId) => {
    //     this.props.removeEventi(eventiId)

    // }

    // onSetFilter = (filterBy) => {
    //     this.props.setFilter(filterBy)
    //     this.props.loadEventis(filterBy)

    // }

    // doLogout = async () => {
    //     await this.props.logout()
    //     this.setState({ loggedInUser: null }, () => this.props.history.push('/'))
    // }

    render() {
        const { eventis } = this.props
          return (
            <section>
                <EventiList eventis={eventis} />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventis: state.eventiModule.eventis,

    }
}

const mapDispatchToProps = {
    loadEventis

}



export const EventiApp = connect(mapStateToProps, mapDispatchToProps)(_EventiApp);
