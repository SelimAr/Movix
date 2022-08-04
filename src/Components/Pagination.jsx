import React from 'react'
import styled from 'styled-components'
import Left from '@mui/icons-material/ChevronLeft';
import Right from '@mui/icons-material/ChevronRight';

function Pagination() {
  return (
    <div>
        <PaginationContainer>
            <PreviousButton><Left /></PreviousButton>
            <NextButton><Right /></NextButton>
            <FourButton>4</FourButton>
            <EightButton>8</EightButton>
            <TwelveButton>12</TwelveButton>
        </PaginationContainer>
    </div>
  )
}

export default Pagination

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.3em;
`

const PreviousButton = styled.button`
    background-color: #000;
    border-radius: 10px;
    cursor: pointer;
`

const NextButton = styled.button`
    background-color: #000;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 0.3em;
`

const FourButton = styled.button`
    color: #000;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    margin-left: 1em;
    border-radius: 5px;
    border: none;
`

const EightButton = styled.button`
    color: #000;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 0.2em;
    border: none;
`

const TwelveButton = styled.button`
    color: #000;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 0.2em;
    border: none;
`