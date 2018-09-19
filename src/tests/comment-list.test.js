import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ArticleList } from '../components/article-list'
import articles from '../fixtures'
import ArticleListWithAccordion from '../components/article-list'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should open an article on click', () => {
    const container = mount(<ArticleListWithAccordion articles={articles} />)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--body').length).toEqual(1)
  })
})
