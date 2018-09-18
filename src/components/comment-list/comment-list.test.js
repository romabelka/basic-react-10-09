import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CommentListWithToggle, { CommentList } from './'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

const comments = articles[0].comments

describe('CommentList', () => {
  it('should render a closed comment list by default', () => {
    const container = shallow(
      <CommentList comments={comments} toggleOpen={() => {}} />
    )

    expect(container.find('.test__comment-list--item').length).toEqual(0)
  })

  it('should open a comment list on click', () => {
    const container = mount(<CommentListWithToggle comments={comments} />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--item').length).toEqual(
      comments.length
    )
  })

  it('should close a comment list on click if the comment list is open', () => {
    const container = mount(<CommentListWithToggle comments={comments} />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--item').length).toEqual(
      comments.length
    )

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    // setTimeout из-за анимации
    setTimeout(
      () =>
        expect(container.find('.test__comment-list--item').length).toEqual(0),
      1000
    )
  })

  it('should render a message on click if there are no comments', () => {
    const container = mount(<CommentListWithToggle />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--message').length).toEqual(1)
  })
})
