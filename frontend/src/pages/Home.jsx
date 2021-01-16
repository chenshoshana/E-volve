import { EventiApp } from '../pages/EventiApp.jsx'
import {Link} from 'react-router-dom'

export function Home() {
    return (
        <section className="home ">
            <div>
                <div className="hero">
                    <div className="middle-holder">
                        <h1>E-volvy</h1>
                        <input type="text" />
                        <h2>I'm living it!</h2>
                    </div>
                </div>
                <div className="tag-cards main-layout">
                    <ul className="grid-container clean-list">
                    <li><Link to="/eventi">Baking</Link></li>
                    <li><Link to="/eventi">Cooking</Link></li>
                    <li><Link to="/eventi">Art-crafts</Link></li>
                    <li><Link to="/eventi">Sport</Link></li>
                    <li><Link to="/eventi">Music</Link></li>
                    <li><Link to="/eventi">Dance</Link></li>
                    </ul>
                </div>
            </div>
            <EventiApp />
        </section>

    )
}