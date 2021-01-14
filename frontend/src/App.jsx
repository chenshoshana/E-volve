import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
// import { About } from './pages/About.jsx'
// import { Login } from './pages/Login.jsx'
// import { Signup } from './pages/Signup.jsx'
// import { UserDetails } from './pages/UserDetails.jsx'
// import { HostDetails } from './pages/HostDetails.jsx'
// import { ChatApp } from './cmps/ChatApp.jsx'
import { EventiApp } from './pages/EventiApp.jsx'
import { EventiList } from './pages/EventiList.jsx'
import { EventiDetails } from './pages/EventiDetails.jsx'
// import { EventiEdit } from './pages/EventiEdit.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import './assets/scss/main.scss';



export class App extends Component {
    render() {
        return (
            <section>
                <AppHeader />
                <Switch>
                    {/* <Route component={EventiEdit} path="/eventi/edit/:eventiId?" /> */}
                    <Route component={EventiDetails} path="/eventi/:eventiId" />
                    <Route component={EventiList} path="/eventi/list" />
                    <Route component={EventiApp} path="/eventi" />
                    {/* <Route component={ChatApp} path="/chat" /> */}
                    {/* <Route component={HostDetails} path="/profile/host/userId:" /> */}
                    {/* <Route component={UserDetails} path="/profile/user/userId:" /> */}
                    {/* <Route component={Signup} path="/signup" /> */}
                    {/* <Route component={Login} path="/login" /> */}
                    {/* <Route component={About} path="/about" /> */}
                    <Route component={Home} path="/" />
                </Switch>
                <AppFooter />
            </section>
        )
    }


}

