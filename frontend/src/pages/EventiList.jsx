import { EventiPreview } from "../cmps/EventiPreview.jsx"

export function EventiList({ eventis }) {
    return <div className="EventiList">
        {eventis.map(eventi => {
            return <EventiPreview key={eventi._id} eventi={eventi} />
        })}
    </div>

}