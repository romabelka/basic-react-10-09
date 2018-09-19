import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
import CommentList from './index'
import articles from '../../fixtures'

describe('CommentList', () => {
  it('should open comments list on click', () => {
    const container = mount(<CommentList comments={articles[0].comments} />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--item').length).toEqual(
      articles[0].comments.length
    )
  })
})
