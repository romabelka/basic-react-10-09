import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import CommentsList from './comment-list'

Enzyme.configure({ adapter: new Adapter() })

describe('Tests for comments-list', () => {
  /*it('should not render comments-list', () => {
    const container = render(<CommentsList/>);
    expect(container.find('.comments-list').length).toEqual(0);
  });

  it('should render comments-list', () => {
    const container = render(<CommentsList isOpen={true}/>);
    expect(container.find('.comments-list').length).toEqual(0);
  });*/

  it('should render comments-list', () => {
    const container = render(
      <CommentsList
        isEnableAnim={false}
        isOpen={true}
        isShow={true}
        comments={[{ id: 1, text: 'asdf' }, { id: 2, text: 'asdf' }]}
      />
    )
    expect(container.find('.comments-list__item').length).toEqual(2)
  })

  /*it('asdf', () => {
    const container = render(<CommentsList comments={[
      {id: 1, text: 'asdf'},
      {id: 2, text: 'asdf'},
    ]} />);
    const len = container.find('.comment-list__item').length;
    console.log(len);
    expect(len).equalTo(2);
  });*/
})
