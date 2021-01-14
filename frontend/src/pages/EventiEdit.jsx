import React, { Component } from 'react'
import { eventiService } from './../service/eventiService';

export class EventiEdit extends Component {
    state = {
        eventi: {}
    }
    componentDidMount() {
        this.loadEventi()
    }

    loadEventi = async () => {
        const { EventiId } = this.props.match.params;
        if (EventiId) {
            const eventi = await eventiService.getById(eventi)
            this.setState({ eventi })
        }
    }

    handleInput = ({ target }) => {
        const { name, type } = target
        const value = (type === 'checkbox') ? target.checked :
            (type === 'number') ? +target.value : target.value

        this.setState(prevState => {
            return {
                eventi: {
                    ...prevState.eventi,
                    [name]: value
                }
            }
        })
    }

    // onUploadToyImage = (url) => {
    //     this.setState(prevState => {
    //         return {
    //             toy: {
    //                 ...prevState.toy,
    //                 imgUrl: url
    //             }
    //         }
    //     })
    //     console.log('img url', url);
    // }

    onSaveEventi = async (ev) => {
        ev.preventDefault()
        const { eventi } = this.state
        await this.props.saveEventi(eventi)
        this.props.history.push('/Eventi')
    }
    render() {
        return (
            <div className="edit-box">

                <form action="">
                    <input name="title" type="text" placeholder="title"></input>
                    <input name="description" type="text" placeholder="description" ></input>
                    <input name="price" type="text" placeholder="price"></input>
                    <input name="eventLink" type="text" placeholder="link"></input>
                    <input name="durationMinutes" type="time" placeholder="durtion"></input>

                    <select multiple="multiple" id="myMulti">
                        <option>Sport</option>
                        <option>Art</option>
                        <option>Dance</option>
                        <option>Music</option>
                        <option>Cook</option>
                    </select>

                </form>
                <form>
                    <h3> set cycle</h3>
                    <input name="capacity" type="number" placeholder="capacity"></input>
                    <input name="startsAt" type="datetime-local" placeholder="title"></input>
                </form>
            </div>
        )
    }
}

