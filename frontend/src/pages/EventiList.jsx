import { EventiPreview } from "./EventiPreview.jsx"

export function EventiList(eventis) {
    return <article className="eventi-container">
        <h1>event list</h1>
        {eventis.map(eventi => {
            return <EventiPreview key={eventi._id} eventi={eventi} />
        })}
    </article>

}