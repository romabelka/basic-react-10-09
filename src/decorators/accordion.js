//decorator === HOC === Higher Order Component
import React from 'react'
import toggleOpen from './toggle-open'

/**
 * В этом декораторе используется другой декоратор, с той идеей что мы в этот accordion
 * планируем добавить ещё какой-либо функционал кроме открытия/закрытия элементов
 * И вообще, для отработки использования вложенных декораторов
 */

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    render() {
      const DecoratedOriginalComponent = toggleOpen(OriginalComponent)
      return <DecoratedOriginalComponent {...this.props} {...this.state} />
    }
  }
