import React from 'react';
import "./App.scss";
import { Notification, Section } from 'rbx';
import { Fragment } from "react";
import Header  from './components/header'

const App = () => (
    <Fragment>
        <Header/>
        <Section>
            <Notification color="success">
                Olá pessoas!!
            </Notification>
        </Section>
    </Fragment>
)
export default App;
