import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentListWithToggler, { CommentList } from './comment-list'
import mockComments from './mock-comments-list'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render closed comments by default', () => {
    const container = shallow(<CommentList comments={mockComments} />)
    expect(container.find('.test__comment-list--item').length).toEqual(0)
  })

  it('should render comment list if { iSOpen === true } and there are comments', () => {
    const container = shallow(
      <CommentList comments={mockComments} isOpen={true} />
    )
    expect(container.find('.test__comment-list--item').length).toEqual(
      mockComments.length
    )
  })

  it('should show `no comments` message if there are no comments', () => {
    const container = shallow(<CommentList comments={[]} isOpen={true} />)
    expect(container.find('.test__no-comments--item').length).toEqual(1)
  })

  it('should open comments on click', () => {
    const container = mount(<CommentListWithToggler comments={mockComments} />)

    container
      .find('.test__comment--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment--body').at(0).length).toEqual(1)
  })

  it('should trigger data fetching on mount', (done) => {
    mount(<CommentListWithToggler comments={[]} fetchData={done} />)
  })
})
