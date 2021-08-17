import React from 'react'
import { Page,MainContainer,MajorContent,MinorContent} from './StyleLogin'
import LoginForm from '../../components/LoginForm/LoginForm'


const Welcome =() => {
    return (
        <Page split = {1} >
            <MainContainer isRight minorSize ={'20rem'} gap ={'2rem'}>
                <MajorContent>
                    <h1>Blog-list</h1>
                    <h2>A simple app that allows users to share and rate their favorite blogs</h2>
                </MajorContent>
                <MinorContent>
                    <LoginForm/>
                </MinorContent>
            </MainContainer>
            <div></div>  
        </Page>
    )
}

export default Welcome