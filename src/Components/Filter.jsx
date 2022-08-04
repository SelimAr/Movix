import React from 'react'
import styled from 'styled-components'
import SortIcon from '@mui/icons-material/Sort';

function Filter() {
  return (
    <div>
        <FilterContainer>
            <SortIcon />
            <Select
                label='Catégories'
                defaultValue=''
            >
                <option value="">Filter</option>
                <option value="Comedy">Comedy</option>
                <option value="Animation">Animation</option>
                <option value="Thriller">Thriller</option>
                <option value="Drame">Drame</option>
            </Select>
        </FilterContainer>
    </div>
  )
}

export default Filter

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1em;
`

const Select = styled.select`
    margin-left: 1em;
    border-radius: 5px;
    font-weight: 600;
    outline: none;
    font-size: 17px;
    cursor: pointer;
    color: #000;
    width: 5em;
    option {
        color: #000;
        font-weight: 600;
    }
`