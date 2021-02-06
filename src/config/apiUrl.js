let ipurl = 'http://159.75.115.252:7001/admin/'

let servicePath = { 
  checkLogin : ipurl + 'checkLogin',
  getTypeInfo: ipurl + 'getTypeInfo' , // 获取文章分类
  addArticle: ipurl + 'addArticle' ,  //  添加文章
  updateArticle: ipurl + 'updateArticle' ,  //  修改文章
  getArticleList: ipurl + 'getArticleList' ,  //  文章列表
  delArticle: ipurl + 'delArticle/', // 删除文章
  getArticleById: ipurl + 'getArticleById/'  // 获取文章内容
} 

export default servicePath