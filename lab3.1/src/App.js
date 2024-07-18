import React from 'react'
import { Wrapper, Container, Right, Input, Button, Info, ButtonContainer, Footer, Nav } from './styler'

const App = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <img style={{'height': '48px', marginBottom: '15px'}} src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png'></img>
          <div style={{fontSize:'36px', fontWeight:'400', marginBottom: '15px'}}>Sign in</div>
          Use your Google Account
        </div>
        <Right>
          <Input placeholder='Email or phone'/>
          <Button>Forgot email?</Button>
          <Info>
            Not your computer? Use Guest mode to sign in privately<br/>
            <span style={{color:'#0B58D1', fontWeight:'600'}}>Learn more about using Guest mode</span>
          </Info>
          <ButtonContainer>
            <Button type='big'>
              Create account
            </Button>
            <Button type="fill">
              Next
            </Button>
          </ButtonContainer>
        </Right>
      </Container>
      <Footer>
        <select>
          <option>English (United States)</option>
        </select>
        <Nav>
          <a href='#'>Help</a>
          <a href='#'>Privacy</a>
          <a href='#'>Terms</a>
        </Nav>
      </Footer>
    </Wrapper>
  )
}

export default App