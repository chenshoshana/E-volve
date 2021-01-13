import { Link, Router } from 'react-router-dom'
import { connect } from 'react-redux'

export function AppHeader() {

    return (
        <section>
            <header className="main-header">
                <h1>E-volvi</h1>
                <nav>
                        <ul className="header-list flex justify-center">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/event">Events</Link></li>
                        </ul>

                </nav>
            </header>
            <h3>Welcome AppHeader</h3>
            {/* <h3>Welcome <Link to="/profile">{loggedInUser.username}</Link></h3> */}
        </section>
    )
}

// const mapStateToProps = () => {
//     return {
//         loggedInUser: 'User',
//     }
// }

// export const AppHeader = connect(mapStateToProps)(_AppHeader);