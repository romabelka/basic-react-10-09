import React from 'react'
import { mount, shallow } from 'enzyme'

import CommentListWithToggle, { CommentList } from './'
import articles from '../../fixtures'
import getTimeout from '../../utils/getTimeoutForTests'

const comments = articles[0].comments

describe('CommentList', () => {
  it('should render a closed comment list by default', () => {
    const container = shallow(
      <CommentList comments={comments} toggleOpen={() => {}} />
    )

    expect(container.find('.test__comment-list--item').length).toEqual(0)
  })

  it('should open a comment list on click', () => {
    const container = mount(<CommentListWithToggle comments={comments} />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--item').length).toEqual(
      comments.length
    )
  })

  it('should close a comment list on click if the comment list is open', async () => {
    const container = mount(<CommentListWithToggle comments={comments} />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--item').length).toEqual(
      comments.length
    )

    const cssTransitionWrapper = container
      .find('.test__comment-list--body')
      .at(0)
      .parent()

    const timeout = getTimeout(cssTransitionWrapper)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    await new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          container.simulate('transitionEnd')
          expect(container.find('.test__comment-list--item').length).toEqual(0)
          resolve()
        } catch (err) {
          reject(err)
        }
      }, timeout)
    )
  })

  it('should render a message on click if there are no comments', () => {
    const container = mount(<CommentListWithToggle />)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--message').length).toEqual(1)
  })
})
