import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'

import byps from '../assets/png/bypsurl.png'
import flagLatent from '../assets/png/flagLatent.png'
import getAProff from '../assets/png/getAProff.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Get A Proff',
        projectDesc: 'A fully functional WEB App that connects tutors and students to improve your skills on any subject.',
        tags: ['Spring', 'Java' ,'Hibernate', 'PostgreSQL'],
        code: 'https://github.com/GastonDeS/GetAProff',
        demo: 'http://pawserver.it.itba.edu.ar/paw-2021b-6/',
        image: getAProff
    },
    {
        id: 2,
        projectName: 'Lightweight OS',
        projectDesc: 'A command line based operating system that I developed in college. It contemplates memory allocation, multi-process scheduling, pipes, semaphores. It includes a two player chess game.',
        tags: ['C', 'Assembly','Docker'],
        code: 'https://github.com/GastonDeS/Lightweight-OS',
        demo: '',
        image: "https://cdn.britannica.com/64/136064-050-304D85AC/Screenshot-program-screen-MS-DOS.jpg"
    },
    {
        id: 3,
        projectName: 'Url Shortner',
        projectDesc: 'A WEB application that provides an easy way to short URLs, redirect & track statistics of your Links.',
        tags: ['Node.js', 'Express.js','Typescript', 'React', 'MongoDB', 'Redis'],
        code: 'https://github.com/GastonDeS/url-shortener',
        demo: '',
        image: byps
    },
    {
        id: 4,
        projectName: 'Image Generator AI',
        projectDesc: 'Generates a 2D latent space AI model that based on a datasets of images can generate similar images',
        tags: ['Python', 'Keras', 'MongoDB', 'Node.js'],
        code: 'https://github.com/GastonDeS/SIA/tree/main/TP5',
        demo: '',
        image: flagLatent
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/