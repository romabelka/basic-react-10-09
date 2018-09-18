import 'jsdom-global/register'
import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ToggleCommentList, { CommentList } from './comment-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comment list', () => {
    const container = shallow(
      <CommentList comments={articles[0].comments} isOpen={true} />
    )

    expect(container.find('.test__comment-list--item').length).toEqual(
      articles[0].comments.length
    )
  })

  it('should render empty comment list', () => {
    const comments = articles[articles.length - 1].comments
    const container = shallow(<CommentList comments={comments} isOpen={true} />)

    expect(container.find('.test__comment-list--item').length).toEqual(0)
    expect(container.find('.test__comment-list--empty').length).toEqual(1)
  })

  it('should render closed comments by default', () => {
    const container = render(
      <ToggleCommentList comments={articles[0].comments} />
    )

    expect(container.find('.test__comment-list--body').length).toEqual(0)
  })

  it('should open an comments on click', () => {
    const container = mount(
      <ToggleCommentList comments={articles[0].comments} />
    )

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--item').length).toEqual(
      articles[0].comments.length
    )
  })

  it('should trigger data fetching on mount', (done) => {
    mount(<ToggleCommentList comments={[]} fetchData={done} />)
  })
})
