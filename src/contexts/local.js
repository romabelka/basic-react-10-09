import { createContext } from 'react'

import localDictionary from './localDictionary'

const { Provider, Consumer } = createContext(localDictionary['en'])

export { Provider, Consumer }
