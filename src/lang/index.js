import React from 'react'
import { Consumer } from '../contexts/language'
import * as dictionary from './dictionary'

export default function getLocalizedValue(key) {
  return (
    <Consumer>
      {(lang) => {
        let currentDict = dictionary[lang]
        if (currentDict && currentDict[key]) {
          return currentDict[key]
        } else {
          return key
        }
      }}
    </Consumer>
  )
}
