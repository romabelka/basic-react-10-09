import { createContext } from 'react'

export const localization = {
  en: {
    menuTitle: 'Main Menu',
    articlesNone: 'Select an Article',
    loadingText: 'Loading...',
    menuCounterItem: 'Counter',
    menuFiltersItem: 'Filters',
    menuArticlesItem: 'Articles',
    menuCommentsItem: 'Comments',
    buttonOpen: 'open',
    buttonClose: 'close',
    buttonDelete: 'delete me',
    buttonShowComments: 'show comments',
    buttonHideComments: 'hide comments',
    buttonCounter: 'increment',
    buttonLangEn: 'en',
    buttonLangRu: 'ru',
    userNameLabel: 'User name'
  },
  ru: {
    menuTitle: 'Главное Меню',
    articlesNone: 'Выберите статью',
    loadingText: 'Загрузка...',
    menuCounterItem: 'Счетчик',
    menuFiltersItem: 'Фильтры',
    menuArticlesItem: 'Статьи',
    menuCommentsItem: 'Комментарии',
    buttonOpen: 'открыть',
    buttonClose: 'закрыть',
    buttonDelete: 'удалить',
    buttonShowComments: 'показать комментарии',
    buttonHideComments: 'скрыть комментарии',
    buttonCounter: 'увеличить',
    buttonLangEn: 'анг',
    buttonLangRu: 'рус',
    userNameLabel: 'Имя пользователя'
  }
}

export const LocalizationLanguage = createContext(localization.ru)
