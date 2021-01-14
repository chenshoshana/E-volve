
// import { connect } from 'react-redux'

export function AppFooter() {

    return (
        <section>
            <footer className="main-footer">
                <nav>
                    {/* <img className="app-logo" src="../assets/imgs"></img> */}
                    <h3>E-volvy</h3>
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