import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ToggleOpen, { CommentList } from './index.js'
import ArticleListWithAccordion, { ArticleList } from '../article-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render closed comments by default', () => {
    const container = mount(
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )

    expect(container.find('.test__comments-list').length).toEqual(0)
  })

  it('should render just one open comments list in one time', () => {
    const container = mount(<ToggleOpen comments={articles.comments} />)

    expect(container.find('.test__comments-list').length).toEqual(1)
  })

  it('should open a comment list on click', () => {
    const container = mount(<ToggleOpen comments={articles.comments} />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--body').length).toEqual(1)
  })
})
