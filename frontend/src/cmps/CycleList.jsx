import React, { Component } from 'react'

export class CycleList extends Component {
    render() {
        const { cycles, title } = this.props
        return (
            <div>
                <div>current {title} cycles:</div>
                <ul>
                    {cycles.map((cycle, idx) => {
                        return <li key={idx}>{cycle.startsAt} <button>remove</button><button>edit</button></li>
                    })}
                </ul>
            </div>
        )
    }
}
