import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

export function AppHeader() {

    return (
        <section>
            <header>
                <div className="main-header main-layout flex align-center space-between">
                    <div className="header-logo">E-volvy</div>
                    <nav>
                        <ul className="header-list flex justify-center clean-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/eventi">Events</Link></li>
                        </ul>

                    </nav>
                </div>
            </header>
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