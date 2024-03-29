import { ProjectsElementProps } from './types';

// Buy Me A Coffee
export const bmcImage = {
    src: 'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png',
    alt: 'Buy Me A Coffee',
    qr: {
        src: 'images/buymeacoffeeqr.png',
        alt: 'Buy Me A Coffee QR Code',
    },
};

export const socialLink = {
    gmail: 'mailto:tokyosato1@gmail.com',
    x: 'https://twitter.com/tech_guy_kay',
    github: 'https://github.com/07130918',
    linkedIn: 'https://www.linkedin.com/in/kota-sato-228364215/',
    facebook: 'https://www.facebook.com/profile.php?id=100069795974235',
    buyMeACoffee: 'https://www.buymeacoffee.com/hi.im.kota',
    paypal: 'https://www.paypal.com/paypalme/kotawebdev',
};

export const serviceLink = {
    python: 'https://www.python.org/',
    langChain: 'https://github.com/hwchase17/langchain',
    js: 'https://www.javascript.com/',
    ts: 'https://www.typescriptlang.org/',
    react: 'https://reactjs.org/',
    vue: 'https://vuejs.org/',
    nextjs: 'https://nextjs.org/',
    chakra: 'https://chakra-ui.com/',
    vercel: 'https://vercel.com/',
    chromeExtension: 'https://chrome.google.com/webstore/category/extensions/',
    mysql: 'https://www.mysql.com/',
    dynamodb: 'https://aws.amazon.com/dynamodb/',
    aws: 'https://aws.amazon.com/',
    gcp: 'https://cloud.google.com/',
};

export const projectsElement: ProjectsElementProps = {
    wordPopQuiz: {
        link: 'https://word-pop-quiz.vercel.app/',
        externalLinkText: 'Word Pop Quiz',
        githubLink: 'https://github.com/07130918/word-pop-quiz',
        githubRepoName: 'word-pop-quiz',
    },
    emailForge: {
        link: 'https://everybody-can-make-emails-easily.vercel.app/',
        externalLinkText: 'EMail Forge',
        githubLink: 'https://github.com/07130918/EmailForge',
        githubRepoName: 'EmailForge',
    },
    gpProofreader: {
        link: 'https://gp-proofreader.vercel.app/',
        externalLinkText: 'GP-proofreader',
        githubLink: 'https://github.com/07130918/LLM-Playground/tree/main/proofread-web-app',
        githubRepoName: 'LLM-Playground',
    },
    scribbles: {
        link: 'https://chrome.google.com/webstore/detail/scribbles/kjbdhcdgdcipnifdhnpldjibglpjnjib?hl=ja&authuser=0',
        externalLinkText: 'Scribbles',
        githubLink: 'https://github.com/07130918/Scribbles',
        githubRepoName: 'Scribbles',
    },
    toDoList: {
        link: 'https://chrome.google.com/webstore/detail/to-do-list/chaiaabmmjdihkcjlpmbadcdmefaljib?hl=ja&authuser=0',
        externalLinkText: 'Simple To-Do List',
        githubLink: 'https://github.com/07130918/ChromeExtensions',
        githubRepoName: 'ChromeExtensions',
    },
};
