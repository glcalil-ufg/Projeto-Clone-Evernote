import React, { Fragment } from 'react'
import Header from '../../components/header'
import ImageHome from '../../assets/images/presentation.png'
import { Title, Container, Section, Column } from 'rbx'
import "../../styles/home.scss"
import { ColumnGroup } from 'rbx/grid/columns/column-group';

const Home = () => (
    <Fragment>
         <Header/>
        <Section className="home">
            <Container>
                <ColumnGroup>
                    <Column size={5}>
                        <Title size={2} spaced className="has-text-white">
                            Crie notas facilmente e acesse quando e onde quiser na nuvem
                        </Title>
                        <Title size={5} spaced className="has-text-white" subtitle>
                            Olá não estou interessado em colocar um texto qualquer e desconhecido aqui,
                            então estou escrevendo algo um pouco mais original. <br/><br/>
                            Talvéz não seja um o melhor texto que você vá lê mas já é um começo.
                            <br/><br/>
                        </Title>
                        <Title>
                            <a className="button is-outlined is-white is-large">
                                <strong>Resgistre-se Grátis Agora</strong>
                            </a>
                        </Title>
                    </Column>
                        <img src={ImageHome}/>
                    <Column size={5} offset={1}>
                    </Column>
                </ColumnGroup>
            </Container>
        </Section>
    </Fragment>
    
)
    

export default Home