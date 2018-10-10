import { createContext } from 'react'

export const glossary = {
  en: {
    english: 'English',
    russian: 'Russian',
    mainMenu: 'Main Menu',
    username: 'Username',
    Counter: 'Counter',
    Filters: 'Filters',
    Articles: 'Articles',
    Comments: 'Comments',
    loading: 'Loading...',
    MONTHS: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    selectArticle: 'Select an Article',
    noComments: 'No comments yet',
    buttonClose: 'Close',
    buttonOpen: 'Open',
    buttonDelete: 'Delete me',
    comments: 'comments'
  },
  ru: {
    english: 'Английский',
    russian: 'Русский',
    mainMenu: 'Главное меню',
    username: 'Ваше имя',
    Counter: 'Счетчик',
    Filters: 'Фильтры',
    Articles: 'Статьи',
    Comments: 'Комментарии',
    loading: 'Загрузка...',
    MONTHS: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ],
    selectArticle: 'Выберете статью',
    noComments: 'Комментариев нет',
    buttonClose: 'Открыть',
    buttonOpen: 'Закрыть',
    buttonDelete: 'Удалить',
    comments: 'комментарии'
  }
}

const { Provider, Consumer } = createContext(glossary.en)

export { Provider, Consumer }
