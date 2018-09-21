import React from 'react'
import { mount, render, shallow } from 'enzyme'

import ArticleListWithAccordion, { ArticleList } from './'
import articles from '../../fixtures'
import getTimeout from '../../utils/getTimeoutForTests'

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

  it('should trigger data fetching on mount', (done) => {
    mount(
      <ArticleListWithAccordion
        articles={[]}
        toggleOpenItem={() => {}}
        fetchData={done}
      />
    )
  })

  it('should close an article on click if the article is open', async () => {
    const container = mount(<ArticleListWithAccordion articles={articles} />)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__article--body').length).toEqual(1)

    const cssTransitionWrapper = container
      .find('.test__article--body')
      .at(0)
      .parent()

    const timeout = getTimeout(cssTransitionWrapper)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    await new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          container.update()
          expect(container.find('.test__article--body').length).toEqual(0)
          resolve()
        } catch (err) {
          reject(err)
        }
      }, timeout)
    )
  })

  it('should close an article if another article was clicked', (done) => {
    const container = mount(<ArticleListWithAccordion articles={articles} />)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__article--body').length).toEqual(1)

    const cssTransitionWrapper = container
      .find('.test__article--body')
      .at(0)
      .parent()

    const timeout = getTimeout(cssTransitionWrapper)

    container
      .find('.test__article--btn')
      .at(1)
      .simulate('click')

    setTimeout(() => {
      try {
        container.simulate('transitionEnd')
        expect(container.find('.test__article--body').length).toEqual(1)
        done()
      } catch (err) {
        done.fail(err)
      }
    }, timeout)
  })
})
