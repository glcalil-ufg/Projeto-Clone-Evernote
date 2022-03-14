import React from 'react';
import "./App.scss";
import { Notification, Section } from 'rbx';
import { Fragment } from "react";

const App = () => (
    <Fragment>
        <Section>
            <Notification color="success">
                Olá pessoas!!
            </Notification>
        </Section>
    </Fragment>
)
export default App;
