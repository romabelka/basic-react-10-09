import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleListWithAccordion from './article-list'
import ToggleOpen, { CommentList } from './comment-list/index'
import comments from '../fixtures'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

// describe ('CommentList quality articles', () => {
//     it('Shoud render comment-list list', () => {
//         const conteinerArticle = mount(<ArticleListWithAccordion articles={articles} />)
//         //const conteiner = render(<CommentList comments={comments}/>)
//
//         conteinerArticle.find('.test__article--btn').at(0).simulate('click')
//         expect(conteinerArticle.find('.test_comment_body').length).toEqual(1)
//     });
// });
