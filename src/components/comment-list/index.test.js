import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './index.js'
import articles from '../../fixtures'

const comments = articles[0].comments

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render closed commments by default', () => {
    const container = shallow(<CommentList comments={comments} />)

    expect(container.find('.t-comment-list__item').length).toEqual(0)
  })

  it('should open list of comment on click', () => {
    const container = mount(<CommentList comments={comments} />)

    container
      .find('.t-comment-list__button')
      .at(0)
      .simulate('click')

    expect(container.find('.t-comment-list__item').length).toEqual(
      comments.length
    )
  })

  it('should show the title if no comments', () => {
    const containers = [
      mount(<CommentList />),
      mount(<CommentList comments={[]} />),
      mount(<CommentList comments={null} />),
      mount(<CommentList comments={undefined} />)
    ]

    containers.forEach((container) => {
      container
        .find('.t-comment-list__button')
        .at(0)
        .simulate('click')

      const titleElement = container.find('.t-comment-list__title')
      expect(titleElement && titleElement.length).toEqual(1)

      expect(container.find('.t-comment-list__item').length).toEqual(0)
    })
  })
})
