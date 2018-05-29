module.exports = {
    title: 'KCJ UNPLUGGED ACTIVITIES',
    description: 'A curated selection of Right to Play unplugged activities',
    locales: {
        './': {lang: 'en'},
        './fr/': {lang: 'fr'}
    },
    themeConfig: {
        nav: [
            {text: 'Home', link: './'},
            {text: 'Problem Decomposition', link: 'A-Problem-Decomposition.md'},
            {text: 'Data Information', link: 'B-Data-Information.md'},
            {text: 'Algorithms', link: 'C-Algorithms.md'},
        ],
        sidebar: [
            './',
            ['./A-Problem-Decomposition','Problem Decomposition'],
            ['./B-Data-Information','Data Information'],
            ['./C-Algorithms','Algorithms']
        ]
    }
}