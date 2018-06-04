module.exports = {
    title: 'KCJ unplugged',
    description: 'A curated selection of RTP unplugged activities',
    locales: {
        '/': { 
            lang: 'english'
        },
        '/fr/': {
            lang: 'français'
        }
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