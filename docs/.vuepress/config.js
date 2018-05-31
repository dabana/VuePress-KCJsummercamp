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
            {text: 'Problem Decomposition', link: 'a-problem-decomposition.md'},
            {text: 'Data Information', link: 'b-data-information.md'},
            {text: 'Algorithms', link: 'c-algorithms.md'},
        ],
        sidebar: [
            './',
            ['./a-problem-decomposition','Problem Decomposition'],
            ['./b-data-information','Data Information'],
            ['./c-algorithms','Algorithms']
        ]
    }
}