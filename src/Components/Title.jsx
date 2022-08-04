import React from 'react'
import styled from 'styled-components'
import TitleName from '../Media/movix.png'

function Title() {
  return (
    <div>
        <TitleContainer>
            <TitleBanner src={TitleName} alt="movies"/>
        </TitleContainer>
    </div>
  )
}

export default Title

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`

const TitleBanner = styled.img`
    margin: 0 auto;
    object-fit: cover;
`