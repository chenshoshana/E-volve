import {EventiApp} from '../pages/EventiApp.jsx'

export function Home() {
    return (
        <section>
            <div className="tag-cards">
                <h1>I'm a hero</h1>
                <ul>
                    <li>Baking</li>
                    <li>Cooking</li>
                    <li>Art-crafts</li>
                    <li>Sport</li>
                    <li>Music</li>
                    <li>Dance</li>
                </ul>
            </div>
                <EventiApp />
        </section>
        
    )
}