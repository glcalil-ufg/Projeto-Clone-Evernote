import React, {Fragment, useState} from 'react'
import  { Button, Field, Control, Input, Column, Section, Help, Label } from 'rbx'
import { Navigate } from 'react-router-dom'



function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    if(redirectToLogin == true) return <Navigate to="/login"/>

    return (
        <Fragment>
            <Column.Group >
                <form>
                    <Column size={12}>
                        <Field>
                            <Label size="small">
                                Name:
                            </Label>
                            <Control>
                                <Input type="name" required name="name"/>
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">
                                Email:
                            </Label>
                            <Control>
                                <Input type="email" required name="email"/>
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">
                                Senha:
                            </Label>
                            <Control>
                                <Input type="password" required name="password"/>
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">Login or</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined> Registrar-se</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default RegisterForm;

