import React from 'react'
import { SwitchWrapper, SwitchInput, Slider } from './Switch.style'
export default function Switch() {
  return (
      <>
          <div>
              <SwitchWrapper>
                  <SwitchInput type='checkbox'></SwitchInput>
                  <Slider></Slider>
              </SwitchWrapper>
          </div>
      </>
  )
}
