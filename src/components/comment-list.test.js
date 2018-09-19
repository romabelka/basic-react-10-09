import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ToggleOpenCommentList, {CommentList} from './comment-list/comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })


describe('Index', () => {
    it('should render comment list', () => {
        const container = shallow(<CommentList comments={articles[0].comments} isOpen={true}  toggleOpen={() => {}}/>)

        expect(container.find('.test__comment-list-item').length).toEqual(articles[0].comments.length)
    })

    it('should render closed comments by default', () => {
        const container = render(<ToggleOpenCommentList comments={articles[0].comments} toggleOpen={() => {}} />)

        expect(container.find('.test__comment-list').length).toEqual(0)
    })

    it('should open an comments on click', () => {
        const container = mount(<ToggleOpenCommentList comments={articles[0].comments}  toggleOpen={() => {}}/>)

        container
            .find('.test__comments-btn')
            .at(0)
            .simulate('click')

        expect(container.find('.test__comment-list').length).toEqual(1)
    })

    it('should trigger data fetching on mount', (done) => {
        mount(
            <ToggleOpenCommentList
                comments={[]}
                toggleOpen={() => {}}
                fetchData={done}
            />
        )
    })
})
