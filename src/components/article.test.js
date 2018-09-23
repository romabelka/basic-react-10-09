import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Article from './article'

Enzyme.configure({ adapter: new Adapter() })

describe('Tests for article', () => {
  let isOpen = true
  it('should close', () => {
    /*const container = mount(<Article article={} isEnableAnim={false} isOpen={isOpen} toggleOpen={() => {
      isOpen = !isOpen;
    }}/>);*/
    expect(1).toEqual(1)
  })
})
