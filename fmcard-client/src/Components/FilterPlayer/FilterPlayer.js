import React from 'react'
import theme from '../theme/theme'
import styled from 'styled-components'

export default function FilterPlayer() {
  return (
      <div>
          <FilterGroup />
    </div>
  )
}

const FilterWrapper = styled.div`


`
const FilterGroup =({filter,option})=>{
    return (
        <>
            <FilterWrapper>
                
            </FilterWrapper>
        </>
    )
}