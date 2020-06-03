//使用commenjs的暴露方法
const path = require('path');//Node.js path 模块提供了一些用于处理文件路径的小工具，我们可以通过以下方式引入该模块：
// const data = require("./data.json");
//__dirname 当前文件所在的根目录
function resolve (dir) {
    return path.join(__dirname, dir)//join用于拼接
}
module.exports={
    outputDir:"dist",//可以更改npm run build打包的文件夹名
    //eslint的检查,代码修改之后 vue脚手架才会重新开始编译
    // false: 跳过eslint的检查
    // true: 不会影响编译;不会影响代码的执行;可是会在命令行中报警告
    // "error": 会中断编译 代码是无法运行的;在命令行中还有警告
    lintOnSave:false,
    //支持所有的webpack的devserver配置,属于vue自己的
    devServer:{
        port:3000,//切换端口
        open:true,//自动开启网页
    },
    //支持webpack的原生的devserver配置
    configureWebpack:{
        resolve: {//配置组件文件夹的别名
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
            }
        }
    }
}