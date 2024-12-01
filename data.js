export const testimonies = [
    {
        id: 1,
        img: '',
        name: 'Tejas Williams',
        title: 'CO-FOUNDER, TECAST',
        testimony: 'The guys at trinac are so good at what they do. They handled it all for me; design, front-end, back-end, devops and mobile application.'
    },
    {
        id: 2,
        img: '',
        name: 'Tejas Williams',
        title: 'CO-FOUNDER, TECAST',
        testimony: 'The guys at trinac are so good at what they do. They handled it all for me; design, front-end, back-end, devops and mobile application.'
    },
    {
        id: 3,
        img: '',
        name: 'Tejas Williams',
        title: 'CO-FOUNDER, TECAST',
        testimony: 'The guys at trinac are so good at what they do. They handled it all for me; design, front-end, back-end, devops and mobile application.'
    },
    {
        id: 4,
        img: '',
        name: 'Tejas Williams',
        title: 'CO-FOUNDER, TECAST',
        testimony: 'The guys at trinac are so good at what they do. They handled it all for me; design, front-end, back-end, devops and mobile application.'
    },
    {
        id: 5,
        img: '',
        name: 'Tejas Williams',
        title: 'CO-FOUNDER, TECAST',
        testimony: 'The guys at trinac are so good at what they do. They handled it all for me; design, front-end, back-end, devops and mobile application.'
    },
    {
        id: 6,
        img: '',
        name: 'Tejas Williams',
        title: 'CO-FOUNDER, TECAST',
        testimony: 'The guys at trinac are so good at what they do. They handled it all for me; design, front-end, back-end, devops and mobile application.'
    },
]

export async function getWorkIdList() {
    return [{
        params: {
            id: '1'
        }
    }, {
        params: {
            id: '2'
        }
    }, {
        params: {
            id: '3'
        }
    }, {
        params: {
            id: '4'
        }
    }, {
        params: {
            id: '5'
        }
    },]
}

export async function getWorkDetails(workId) {
    const data = {
        '1': {
            title: 'MOCVIEW',
            description: '',
            img1: '/mocview.png',
            img2: '/mocview1.jpg',
            img3: '/mocview2.jpg',
            img4: '/mocview3.jpg',
            img5: '/mocview4.jpg',
        },
        '2': {
            title: 'JABBURR',
            description: '',
            img1: '/jabburr.jpg',
            img2: '/jabburr1.jpg',
            img3: '/jabburr2.jpg',
            img4: '/jabburr3.jpg',
            img5: '/jabburr4.jpg',
        },
        '3': {
            title: 'OPINATIO',
            description: '',
            img1: '/opinatio.jpg',
            img2: '/opinatio1.jpg',
            img3: '/opinatio2.jpg',
            img4: '/opinatio3.jpg',
            img5: '/opinatio4.jpg',
        },
        '4': {
            title: 'RAJNETTI',
            description: '',
            img1: '/rajnetti.jpg',
            img2: '/rajnetti1.jpg',
            img3: '/rajnetti2.jpg',
            img4: '/rajnetti3.jpg',
            img5: '/rajnetti4.jpg',
        },
        '5': {
            title: 'GET-HIRING',
            description: '',
            img1: '/getHiring.jpg',
            img2: '/getHiring1.jpg',
            img3: '/getHiring2.jpg',
            img4: '/getHiring3.jpg',
            img5: '/getHiring4.jpg',
        },
    }

    return data[workId]
}