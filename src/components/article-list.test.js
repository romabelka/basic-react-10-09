import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleListWithAccordion, { ArticleList } from './article-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList quality articles', () => {
  it('Shoud render comment-list list', () => {
    const conteiner = shallow(<ArticleList articles={articles} />)
    expect(conteiner.find('.test__article-list--item').length).toEqual(
      articles.length
    )
  })

  it('Shoud article close', () => {
    const conteiner = render(<ArticleListWithAccordion articles={articles} />)
    expect(conteiner.find('.test__article--body').length).toEqual(0)
  })

  it('shoud open an article by click', () => {
    const conteiner = mount(<ArticleListWithAccordion articles={articles} />)

    conteiner
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(conteiner.find('.test__article--body').length).toEqual(1)
  })

  it('shoud come data', (data) => {
    mount(<ArticleListWithAccordion articles={[]} fetchData={data} />)
  })
})
