import { createAction } from 'redux-actions'

import superagent from 'superagent'
import jsonp from 'superagent-jsonp'

export const fetchReadList = createAction('fetch read list', async () => {
  return await new Promise((resolve, reject) => {
    superagent.get('http://api.douban.com/v2/book/user/lrrfantasy/collections?count=20')
      .use(jsonp)
      .end((err, res) => {
        resolve(res.body)
      })
  })
})
