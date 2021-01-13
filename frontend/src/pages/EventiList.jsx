import { EventiPreview } from "../cmps/EventiPreview.jsx"

export function EventiList(eventis) {
    return <article className="eventi-container">
        <h1>eventi list</h1>
        {eventis.map(eventi => {
            return <EventiPreview key={eventi._id} eventi={eventi} />
        })}
    </article>

}