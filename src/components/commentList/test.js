import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CommentList } from './index'
import Article from '../article/'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  const articleWithComments = articles.find(
    (article) => article.hasOwnProperty('comments') && article.comments.length
  )

  it('should have article with comments to test', () => {
    expect(articleWithComments)
  })

  it('should render closed comments by default', () => {
    const container = shallow(
      <CommentList
        comments={articleWithComments.comments}
        isOpen={false}
        toggleOpen={() => {}}
      />
    )

    expect(container.find('.test__comment-list--item').length).toEqual(0) // comments are closed
  })

  it('should render article with closed comments', () => {
    const container = mount(
      <Article article={articleWithComments} isOpen toggleOpen={() => {}} />
    )

    expect(container.find('.test__article--item').length).toEqual(1) // one article
    expect(container.find('.test__comment--list').length).toEqual(1) // one comment list
    expect(container.find('.test__comment-list--item').length).toEqual(0) // closed comments
  })

  it('should open comments list', () => {
    const container = mount(
      <Article article={articleWithComments} isOpen toggleOpen={() => {}} />
    )

    container
      .find('.test__comment--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--item').length).toEqual(
      articleWithComments.comments.length
    )
  })
})
