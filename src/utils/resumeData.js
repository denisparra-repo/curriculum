import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GroupWork from '@material-ui/icons/GroupWork';
import WebOutlined  from "@material-ui/icons/WebOutlined";

export default {
    name: 'Denis Parra',
    title: 'Software Engineer',
    birthday: '07th October',
    email: 'densoft123@gmail.com',
    addres: '123 Test St',
    phone: '123 456789',

    socials: {
        Github: {
            link: 'https://github.com/denisparra-repo',
            text: 'denisparra-repo',
            icon: <GitHubIcon />
        },
        Linkedin: {
            link: 'https://bo.linkedin.com/in/denis-parra-16a924178',
            text: 'denis parra',
            icon: <LinkedInIcon />
        }
    },
    about: "I would introduce myself in these words. Passionate coder, code checker, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely. Do you want me to talk about my coding skills and experience now, or will we discuss it later in the interview?",
    experiences: [
        {
            title: 'Staff Software Enginner - Jalasoft',
            date: 'May 2022 - Present',
            description: 'Dev Ops Enginner'
        },
        {
            title: 'Junior Core Enginner - Jalasoft',
            date: 'May 2020 - Apr 2022',
            description: 'Full stack software Enginner'
        },
        {
            title: 'Junior Enginner - Jalasoft',
            date: 'Apr 2018 - May 2020',
            description: 'Full stack software Enginner'
        }
    ],
    education: [
        {
            title: 'Graduated in Computer Forensics - UMSS',
            date: 'August 2021 - March 2022',
            description: 'Specialization'
        },
        {
            title: 'Jalasfot Scolarship - Fundacion Jala',
            date: 'Apr 2015 - March 2018',
            description: 'Trainig'
        },
        {
            title: 'Computer Engineering - UMSS',
            date: '2008 - Apr 2015',
            description: 'College'
        },
        {
            title: 'San Rafael - Cochabamba',
            date: 'Feb 2001 - Nov 2006',
            description: 'School'
        },
        {
            title: 'Daniel Salamanca',
            date: 'Feb 1993 - Nov 2000',
            description: 'School'
        }
    ],
    services: [
        {
            title: 'Dev Consultant',
            description: 'Works alongside an individual or a team to help identify strengths and areas for improvement',
            icon: <GroupWork />
        },
        {
            title: 'Web Designer',
            description: 'Design of websites that are displayed on the internet',
            icon: <WebOutlined />
        },
        {
            title: 'Scrum Master',
            description: 'Facilitates the work performed, especially by eliminating obstacles to the completion of tasks and achievement of goals',
            icon: <GroupWork />
        },
        {
            title: 'Test Consultant',
            description: 'Provides test automation consultancy to software and infrastructure development teams in regards to testing and software quality aspects',
            icon: <GroupWork />
        }
    ],
    skills: [
        {
            title: 'Front End',
            description: [
                'Angular',
                'React',
                'Javascript',
                'Typescript',
                'Bootstrap',
                'Material UI'
            ]
        },
        {
            title: 'Back End',
            description: [
                'Node Js',
                'Java'
            ]
        },
        {
            title: 'Databases',
            description: [
                'SQL',
                'SQL Server'
            ]
        },
        {
            title: 'Source Control',
            description: [
                'Git',
                'Github',
                'Scrum/Agile'
            ]
        }
    ]
}