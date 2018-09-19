import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toggleOpen, { CommentList } from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comment list', () => {
    const container = shallow(
      <CommentList comments={article.comments} toggleOpen={() => {}} />
    )

    expect(container.find('.test__comment-list--item').length).toEqual(0)
  })
})
