module.exports = {
    title: "KCJ - camp d'été",
    description: "Une aventure qui mélange nature et technologie",
    themeConfig: {
        nav: [
            {text: "Départ", link: './'},
            {text: 'Jour 1', link: 'jour1.md'},
            {text: 'Jour 2', link: 'jour2.md'},
            {text: 'Jour 3', link: 'jour3.md'},
            {text: 'Jour 4', link: 'jour4.md'},
            {text: 'Jour 5', link: 'jour5.md'},
            {text: 'Material', link: 'material.md'},
            {text: 'Extra activities', link: 'extra_activities.md'}
        ],
        sidebar: [
            './',
            ['./jour1','Jour 1'],
            ['./jour2','Jour 2'],
            ['./jour3','Jour 3'],
            ['./jour4','Jour 4'],
            ['./jour5','Jour 5'],
            ['./material', 'Material'],
            ['./extra_activities', 'Extra activities']
        ]
    }
}