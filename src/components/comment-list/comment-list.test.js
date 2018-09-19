import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentListWithToggleOpen, { CommentList } from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comments list', () => {
    const comments = articles[0].comments

    const container = shallow(<CommentList comments={comments} />)

    expect(container.find('.test__comments-list--item').length).toEqual(
      comments.length
    )
  })

  it('should open an comment-list on click', () => {
    const container = mount(<CommentListWithToggleOpen articles={articles} />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment--ul').length).toEqual(1)
  })
})
