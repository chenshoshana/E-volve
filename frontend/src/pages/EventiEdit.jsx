import React, { Component } from 'react'
import { eventiService } from './../service/eventiService';
import { connect } from 'react-redux'
import { CycleList } from '../cmps/CycleList';
import { addEventi, editEventi } from './../store/action/eventiActions';

export class _EventiEdit extends Component {
    state = {
        eventi: {},
        cycle: {}

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

    handleInput = (ev) => {
        console.log(ev);
        const { name, type } = ev.target
        var value = (type === 'checkbox') ? ev.target.checked :
            (type === 'number') ? +ev.target.value : ev.target.value
        if (name === "tags") {
            value = []
            for (var i = 0; i < ev.target.length; i++) {
                if (ev.target.options[i].selected) {
                    value.push(ev.target[i].value);
                }
            }
        }

        this.setState(prevState => {
            return {
                eventi: {
                    ...prevState.eventi,
                    [name]: value
                }
            }
        })
        console.log(this.state.eventi, 'eventi');
    }
    handleInputCycle = ({ target }) => {
        const { name, type } = target
        const value = (type === 'checkbox') ? target.checked :
            (type === 'number') ? +target.value : target.value
        this.setState(prevState => {
            return {
                cycle: {
                    ...prevState.cycle,
                    [name]: value
                }
            }
        })
        console.log(this.state.cycle);
    }
    onSaveCycle = async (ev) => {
        console.log(ev);
        ev.preventDefault()
        let copyEventi = this.state.eventi
        if (!copyEventi.cycles || !copyEventi.cycles.length) copyEventi.cycles = []
        copyEventi.cycles.push(this.state.cycle)
        this.setState({ eventi: copyEventi })
        console.log(this.state.eventi);
    }

    onSaveEventi = async (ev) => {
        ev.preventDefault()
        const { eventi } = this.state
        if (!eventi._id) await this.props.addEventi(eventi)
        else await this.props.editEventi(eventi)
        this.props.history.push('/')
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
    render() {
        const { cycles, description, title, price, eventLink, durationMinutes } = this.state.eventi
        if (!this.state.eventi) return <h1>loading.. </h1>
        return (
            <section className="EventiEdit flex ">
                <div className="cyclesBox"> {cycles && <CycleList cycles={cycles} title={title} />}</div>
                <div className="edit-box">
                    <form action="" onSubmit={this.onSaveEventi}>
                        <input name="title" type="text" value={title} onChange={this.handleInput} placeholder="title"></input>
                        <input name="description" type="text" value={description} onChange={this.handleInput} placeholder="description" ></input>
                        <input name="price" type="number" value={price} onChange={this.handleInput} placeholder="price"></input>
                        <input name="eventLink" type="text" value={eventLink} onChange={this.handleInput} placeholder="link"></input>
                        <input name="durationMinutes" type="time" value={durationMinutes} onChange={this.handleInput} placeholder="durtion"></input>

                        <select multiple="multiple" name="tags" onChange={this.handleInput} id="myMulti">
                            <option>Sport</option>
                            <option>Art</option>
                            <option>Dance</option>
                            <option>Music</option>
                            <option>Cook</option>
                        </select>
                        <button>save eventi</button>
                    </form>
                    <form onSubmit={this.onSaveCycle}>
                        <h3> set cycle</h3>
                        <input name="capacity" type="number" onChange={this.handleInputCycle} placeholder="capacity"></input>
                        <input name="startsAt" type="datetime-local" onChange={this.handleInputCycle} placeholder="title"></input>
                        <button>save cycle</button>
                    </form>
                </div></section>

        )
    }
}

const mapStateToProps = state => {
    return {
        eventies: state.eventiModule.eventies,
    };
};
const mapDispatchToProps = {
    editEventi,
    addEventi
}

export const EventiEdit = connect(mapStateToProps, mapDispatchToProps)(_EventiEdit)