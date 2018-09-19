import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentListWithToggle, { CommentList } from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comment list', () => {
    const container = mount(<CommentList comments={articles[0].comments} />)
    container.setProps({ isOpen: true })

    expect(container.find('.comments-list__item').length).toEqual(
      articles[0].comments.length
    )
  })

  it('should render closed comments by default', () => {
    const container = render(
      <CommentListWithToggle comments={articles[0].comments} />
    )

    expect(container.find('.comments__body').length).toEqual(0)
  })

  it('should open an comments on click', () => {
    const container = mount(
      <CommentListWithToggle comments={articles[0].comments} />
    )

    container
      .find('.comments__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.comments__body').length).toEqual(1)
  })

  it('should close a comments on click if the comments is open', () => {
    const container = mount(
      <CommentListWithToggle comments={articles[0].comments} />
    )
    container.setProps({ isOpen: true })

    container
      .find('.comments__btn')
      .at(0)
      .simulate('click')

    setTimeout(
      () => expect(container.find('.comments__body').length).toEqual(0),
      1000
    )
  })
})
