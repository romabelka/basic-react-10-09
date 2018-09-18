import 'jsdom-global/register'
import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleListWithAccordion, { ArticleList } from './article-list'
import articles from '../fixtures'

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

  it('should close an opened article on click', () => {
    const container = mount(
      <ArticleListWithAccordion
        articles={articles}
        openItemId={articles[0].id}
      />
    )

    const cssTransition = container
      .find('.test__article--body')
      .at(0)
      .parent()
    const timeout = cssTransition.prop('leaveTimeout')
    console.log(timeout)
    // async???

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__article--body').length).toEqual(0)
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
