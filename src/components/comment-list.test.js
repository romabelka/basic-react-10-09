import React from 'react'
import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Comment from './comment'
import comments from './comment-list'
//import comment from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comment list', () => {
    const container = render(<Comment comment={comments} />)

    expect(container.find('.test__comment-list--item').length).toEqual(
      comments.length
    )
  })

  it('should render closed comments bu default', () => {
    const container = render(<Comment comment={comments} />)

    expect(container.find('.test__comment-list--body').length).toEqual(0)
  })
})
