import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

function Header() {
    const [name, setName ] = useState('test name')
    return (
        <Container fluid className='header'>
            <div className="row logo">
            <div className="col">
            <img src='../logo512.png' alt='logo page'/>
            </div>
            </div>
           <p>{name}</p>
        </Container>
    )
}

export default Header
