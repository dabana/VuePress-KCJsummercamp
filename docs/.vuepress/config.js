module.exports = {
    title: "KCJ - Summer Camp",
    description: "An adventure blending nature and technology.",
    themeConfig: {
        nav: [
            {text: "Start", link: './'},
            {text: 'Teaching approach', link: 'teaching.md'},
            {text: 'Day 1', link: 'day1.md'},
            {text: 'Day 2', link: 'day2.md'},
            {text: 'Day 3', link: 'day3.md'},
            {text: 'Day 4', link: 'day4.md'},
            {text: 'Day 5', link: 'day5.md'},
            {text: 'Material', link: 'material.md'},
            {text: 'Extra activities', link: 'extra_activities.md'}
        ],
        sidebar: [
            './',
            ['./teaching','Teaching approach'],
            ['./day1','Day 1'],
            ['./day2','Day 2'],
            ['./day3','Day 3'],
            ['./day4','Day 4'],
            ['./day5','Day 5'],
            ['./material', 'Material'],
            ['./extra_activities', 'Extra activities']
        ]
    }
}