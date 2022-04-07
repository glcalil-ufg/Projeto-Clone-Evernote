import React, { Fragment } from 'react'
import { Card, Column, Section, Title } from 'rbx'
import Header from '../../../components/header'
import LogoImage from '../../../assets/images/logo.png'
import '../../../styles/auth.scss'
import RegisterForm from '../../../components/auth'

const Register = () => (
    <Fragment >
        <Header/>
        <Section size="medium" className="auth">
            <Column.Group centered>
                <Column size={4} centered>
                    <Card>
                        <Card.Content>
                            <Section>
                                <Column.Group>
                                    <Column size={12}>
                                        <img src={LogoImage}/>
                                        </Column>
                                </Column.Group>
                                <Column.Group>
                                    <Column size={12}>
                                        <Title size={6} className="has-text-grey has-text-centered">
                                            Suas notas na nuvem.
                                        </Title>    
                                     </Column>
                                </Column.Group>
                                <Column.Group>
                                    <RegisterForm/>
                                </Column.Group>
                            </Section>
                        </Card.Content>
                    </Card>
                </Column>
            </Column.Group>
        </Section>
    </Fragment>
)

export default Register
