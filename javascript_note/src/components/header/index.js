import React, {useState} from 'react'
import { Navbar, Container, Column } from 'rbx'
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import logoImage from '../../assets/images/logo.png'
import "../../styles/header.scss";
import { Link } from 'react-router-dom'

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <Navbar>
            <Container >
                <Navbar.Brand>
                    <Link to='/home'>
                     <img src={logoImage}/>
                    </Link>
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>
                <Navbar.Menu active={openMenu.toString()} onClick={() => setOpenMenu(!openMenu)}>
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        <ColumnGroup>
                            <Column>
                                <a  className="button is-white has-text-custom-purple" href="https://github.com/glcalil-ufg/Projeto-Clone-Evernote" target="_blank">Link do Projeto</a>
                            </Column>
                            <Column>
                                <Link to='/register' className="button is-white has-text-custom-purple">Registre-se</Link>
                            </Column>
                            <Column>
                                <Link to='/login' className="button is-outlined is-custom-purple">Login</Link>
                            </Column>
                        </ColumnGroup>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container >
        </Navbar>
    )
}

export default Header;