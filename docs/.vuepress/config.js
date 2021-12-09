module.exports = {
    title: 'Young',
    description: '杨华周的个人博客',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.png'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav:require('./nav'),
        sidebar:require('./sidebar'),
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
