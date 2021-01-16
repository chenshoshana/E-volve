import { EventiApp } from '../pages/EventiApp.jsx'

export function Home() {
    return (
        <section className="home main-layout">
            <div>
                <div className="hero main-layout">
                    <div className="middle-holder">
                        <h1>E-volvy</h1>
                        <input type="text" />
                        <h2>I'm living it!</h2>
                    </div>
                </div>
                <div className="tag-cards">
                    <ul>
                        <li>Baking</li>
                        <li>Cooking</li>
                        <li>Art-crafts</li>
                        <li>Sport</li>
                        <li>Music</li>
                        <li>Dance</li>
                    </ul>
                </div>
            </div>
            <EventiApp />
        </section>

    )
}