const path = require('path');
// vue.config.js
module.exports = {
	// type :string  defalut :"/"
	// 把开发服务器架设在根路径
	publicPath: process.env.NODE_ENV === 'production' ? '' : '/',

	// type :string  defalut :"dist"
	// 打包后的文件夹名字
	outputDir: process.env.NODE_ENV === 'production'? 'dist':'devdist',
	
	lintOnSave:true,
	
	chainWebpack: config => {},
	configureWebpack: config => {
	
	},
	// type :boolean  defalut :"true"
	// SourceMap 一个存储源代码与编译代码对应位置映射的信息文件
	// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
	productionSourceMap: false,
	// type :boolean defalut :"false"
	// 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
	// 具体信息看官网 https://cn.vuejs.org/v2/guide/installation.html#运行时+编译器vs.只包含运行时
	runtimeCompiler: false,

	// type :Array<string | RegExp> defalut :"[]" (RegExp) ==> 正则
	// 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
	transpileDependencies: [],

	integrity: false,

	css: {
		extract: true,
		
		// type :boolean  defalut :"false"
		// 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
		// 细节查看https://cli.vuejs.org/zh/guide/css.html#css-modules
		modules: false,

		// type:boolean | object defalut:生产环境下是 true，开发环境下是 false
		// 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
		// 当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
		// 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
		// extract

		// type:boolean defalut :"false"
		// 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
		sourceMap: false,

		// type:object defalut:{}
		// 向 CSS 相关的 loader 传递选项。css预设器配置项
		// loader 可以通过 loaderOptions 配置，包括：css-loader postcss-loader sass-loader less-loader stylus-loader
		// 具体细节查看 https://cli.vuejs.org/zh/guide/css.html#向预处理器Loader传递选项
		loaderOptions: {
			sass: {
                prependData: '@import "./src/styles/main.scss";'
			},
		}
	},
	// type:boolean defalut:require('os').cpus().length > 1
	// 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
	// 构建时开启多进程处理babel编译
	parallel: require('os').cpus().length > 1,

	// type: object
	// 单页插件相关配置  向PWA插件传递选项
	// 具体细节 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {},

	// type:object
	// 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。
	// schema数据库对象的集合 (也有其他意思。。。)
	pluginOptions: {},

	// type:object
	// 开发配置
	// 细节查看 https://webpack.js.org/configuration/dev-server/#devserver
	devServer: {
		open: false,
		hot: true,
		host: '0.0.0.0',
		port: '8080',
		https: false,
		hotOnly: false,
		proxy: false,
		overlay: {
			warnings: true,
			errors: true
		},
		before: app =>{
			
		}
	}
}
