
// import { connect } from 'react-redux'

export function AppFooter() {

    return (
        <section>
            <footer className="main-footer">
                <img className="app-logo" src="../assets/imgs"></img>
                <h3>E-volvi</h3>
                <nav>
                    <ul className="footer-list flex justify-center">
                        <li>facebook</li>
                        <li>instgram</li>
                        <li>tweeter</li>
                    </ul>
                </nav>
            </footer>
        </section>
    )
}


// export const AppFooter = connect(mapStateToProps)(_AppFooter);