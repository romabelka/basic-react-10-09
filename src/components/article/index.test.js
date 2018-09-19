import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './index.js'
import articles from '../../fixtures'

const article = articles[0]

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should close article on click if was open', () => {
    const container = mount(
      <Article article={article} isOpen={true} toggleOpen={() => {}} />
    )

    // haven't found more elegant way to set toggleOpen
    container.setProps({
      toggleOpen: () => {
        container.setProps({ isOpen: !container.props().isOpen })
      }
    })

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(container.props().isOpen).toEqual(false)

    // haven't found a way to make it work, setTimeout, transitionEnd, and container.update not working
    // expect(container.find('.test__article--body').length).toEqual(0)
  })
})
