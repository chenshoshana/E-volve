
// import { connect } from 'react-redux'

export function AppFooter() {

    return (
        <section>
            <footer className="main-footer main-layout flex justify-center ">
                <nav>
                    {/* <img className="app-logo" src="../assets/imgs"></img> */}
                    <div className="footer-logo">E-volvy</div>
                    <small>All Rights Reserved © 2021</small>
                    <ul className="footer-list clean-list">
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