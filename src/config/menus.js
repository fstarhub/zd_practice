import { Location, Menu as IconMenu } from '@element-plus/icons'
const menus = [
  // {
  //   title: '首页',
  //   path: '/basicLayout',
  //   query: 'admin',
  //   key: '1'
  // },
  {
    title: '商品',
    path: '/basicLayout/allGoods',
    query: 'shangpin',
    key: '2',
    icon: <Location></Location>,
    children: [
      {
        title: '所有商品',
        path: '/basicLayout/allGoods',
        query: '所有商品',
        key: '2-1'
      },
      {
        title: '商品发布',
        path: '/basicLayout/publishGoods',
        query: '商品发布',
        key: '2-2'
      },
      {
        title: '商品维护',
        path: '/basicLayout/maintainGoods',
        query: '商品维护',
        key: '2-3'
      }
    ]
  },
  {
    title: '与我相关',
    path: '/person',
    query: '与我相关',
    key: '3',
    icon: <IconMenu></IconMenu>,
    children: [
      {
        title: '我的购物车',
        path: '/basicLayout/cart',
        query: '我的购物车',
        key: '3-1'
      },
      {
        title: '我的订单',
        path: '/basicLayout/order',
        query: '我的订单',
        key: '3-2'
      },
      {
        title: '我的地址',
        path: '/basicLayout/address',
        query: '我的地址',
        key: '3-3'
      }
    ]
  }
]

export default menus
