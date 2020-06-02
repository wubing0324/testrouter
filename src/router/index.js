import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Persion from '@/components/Persion'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页',
      parentId: null,
      id: 1
    },
    children: [
      {
        path: '/zijin2',
        name: 'zijin2',
        component: Home,
        meta: {
          title: '资金2222',
          parentId: 3,
          id: 6
        },
        children: []
      },
      {
        path: '/zijin',
        name: 'zijin',
        component: Home,
        meta: {
          title: '资金',
          parentId: 1,
          id: 2
        },
        children: [
          {
            path: '/minsheng',
            name: 'minsheng',
            component: Home,
            meta: {
              title: '民生',
              parentId: 2,
              id: 3
            },
            children: [
              {
                path: '/fupin',
                name: 'fupin',
                component: Home,
                meta: {
                  title: '扶贫',
                  parentId: 3,
                  id: 4
                },
                children: [
                  {
                    path: '/persion',
                    name: 'persion',
                    component: Persion,
                    meta: {
                      title: '个人详情',
                      parentId: 4,
                      id: 5
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

export default new Router({ routes })

export { routes }

