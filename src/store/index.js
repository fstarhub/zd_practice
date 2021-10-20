import { createStore } from 'vuex'

export default createStore({
  state: {
    isShowLoading: false, // 全局 loading
    // 左侧菜单栏数据
    menuItems: [
      {
        name: 'home', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'md-home', // icon类型
        text: '主页' // 文本内容
      },
      {
        text: '教师中心',
        type: 'ios-paper',
        children: [
          {
            text: '课程管理',
            type: 'ios-paper',
            children: [
              {
                type: 'ios-notifications-outline',
                name: 'courseCheck',
                text: '查看课程'
              },
              {
                type: 'md-lock',
                name: 'password',
                text: '修改密码'
              },
              {
                type: 'md-person',
                name: 'userinfo',
                text: '基本资料'
              },
              {
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '外链',
                url: 'https://www.baidu.com',
                isExternal: true // 外链 跳到一个外部的 URL 页面
              }
            ]
          },
          {
            text: '考试管理',
            type: 'ios-paper',
            children: [
              {
                type: 'ios-notifications-outline',
                name: 'msg',
                text: '查看消息'
              },
              {
                type: 'md-lock',
                name: 'password',
                text: '修改密码'
              },
              {
                type: 'md-person',
                name: 'userinfo',
                text: '基本资料'
              },
              {
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '外链',
                url: 'https://www.baidu.com',
                isExternal: true // 外链 跳到一个外部的 URL 页面
              }
            ]
          },
          {
            text: '学生管理',
            type: 'ios-paper',
            children: [
              {
                type: 'md-body',
                name: 'stuInfoCheck',
                text: '学生信息'
              },
              {
                type: 'md-document',
                name: 'stuAttendance',
                text: '学生考勤'
              },
              {
                type: 'logo-xbox',
                name: 'stuGroup',
                text: '学生分组'
              },
              {
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '外链',
                url: 'https://www.baidu.com',
                isExternal: true // 外链 跳到一个外部的 URL 页面
              }
            ]
          },
          {
            text: '活动管理',
            type: 'ios-paper',
            children: [
              {
                type: 'ios-notifications-outline',
                name: 'msg',
                text: '新建活动'
              },
              {
                type: 'md-lock',
                name: 'password',
                text: '修改密码'
              },
              {
                type: 'md-person',
                name: 'userinfo',
                text: '基本资料'
              },
              {
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '外链',
                url: 'https://www.baidu.com',
                isExternal: true // 外链 跳到一个外部的 URL 页面
              }
            ]
          }
        ]
      },
      {
        name: 'group', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'md-people', // icon类型
        text: '小组' // 文本内容
      }
    ]
  },
  mutations: {
    setMenus(state, items) {
      state.menuItems = [...items]
    },
    setLoading(state, isShowLoading) {
      state.isShowLoading = isShowLoading
    }
  },
  actions: {},
  modules: {}
})
