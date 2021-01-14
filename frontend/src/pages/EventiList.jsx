import { EventiPreview } from "../cmps/EventiPreview.jsx"

export function EventiList({ eventies }) {
    return <div className="EventiList">
        {eventies.map(eventi => {
            return <EventiPreview key={eventi._id} eventi={eventi} />
        })}
    </div>

}