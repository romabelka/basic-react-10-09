import 'jsdom-global/register'
import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleListWithAccordion, { ArticleList } from './article-list'
import articles from '../fixtures'
import ToggleArticle from './article'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should render article list', () => {
    const container = shallow(
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )

    expect(container.find('.test__article-list--item').length).toEqual(
      articles.length
    )
  })

  it('should render closed articles by default', () => {
    const container = render(<ArticleListWithAccordion articles={articles} />)

    expect(container.find('.test__article--body').length).toEqual(0)
  })

  it('should open an article on click', () => {
    const container = mount(<ArticleListWithAccordion articles={articles} />)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__article--body').length).toEqual(1)
  })

  it('should close an opened article on click', (done) => {
    const container = mount(
      <ToggleArticle isOpen={true} article={articles[0]} onClose={done} />
    )

    //article should be open before clicking
    expect(container.find('.test__article--body').length).toEqual(1)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')
  })

  it('should trigger data fetching on mount', (done) => {
    mount(
      <ArticleListWithAccordion
        articles={[]}
        toggleOpenItem={() => {}}
        fetchData={done}
      />
    )
  })
})
