import React, { Component } from 'react'

export class ReviewList extends Component {
    render() {
        const { reviews } = this.props
        return (
            <div>
                <ul>
                    {reviews.map((review, idx) => {
                        return <li key={idx}>{review.txt} {review.byUser.fullname} <button>remove</button><button>edit</button></li>
                    })}
                </ul>
            </div>
        )
    }
}