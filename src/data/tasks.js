const tasks = [
    {
        'id': 'write-documentation',
        'name': 'Write Doc.',
        'employer': '1',
        'unaccounted_work': [
            {'id': '1', 'start': 'January 12, 2017 11:13:00',},
        ],
        'accounted_work': []
    },

    {
        'id': 'program-website',
        'name': 'Program Website',
        'employer': '1',
        'unaccounted_work': [
            {'id': '2', 'start': 'January 12, 2017 11:13:00', 'end' : 'January 12, 2017 12:13:00'},
            {'id': '3', 'start': 'January 13, 2017 11:13:00', 'end' : 'January 13, 2017 12:13:00'},
        ],
        'accounted_work': [
            {'id': '4', 'start': 'December 12, 2016 11:13:00', 'end' : 'December 12, 2016 12:13:00'},
            {'id': '5', 'start': 'December 13, 2016 11:13:00', 'end' : 'December 13, 2016 17:13:00'},
        ]
    },

    {
        'id': 'unit-test',
        'name': 'Test Solution',
        'employer': '2',
        'unaccounted_work': [
            {'id': '6', 'start': 'January 12, 2017 11:13:00', 'end' : 'January 12, 2017 12:13:00'},
            {'id': '7', 'start': 'January 13, 2017 11:13:00', 'end' : 'January 13, 2017 12:13:00'},
        ],
        'accounted_work': [
            {'id': '8', 'start': 'December 12, 2016 11:13:00', 'end' : 'December 12, 2016 12:13:00'},
            {'id': '9', 'start': 'December 13, 2016 11:13:00', 'end' : 'December 14, 2016 17:13:00'},
        ]
    }
]

export default tasks;