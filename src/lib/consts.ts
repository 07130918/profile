import type { ProjectsElementProps } from '@/lib/types';

// Buy Me A Coffee
export const bmcImage = {
    src: 'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png' as const,
    alt: 'Buy Me A Coffee' as const,
    qr: {
        src: 'images/buymeacoffeeqr.png' as const,
        alt: 'Buy Me A Coffee QR Code' as const,
    },
} as const;

export const socialLink = {
    gmail: 'mailto:tokyosato1@gmail.com' as const,
    x: 'https://twitter.com/tech_guy_kay' as const,
    github: 'https://github.com/07130918' as const,
    linkedIn: 'https://www.linkedin.com/in/kota-sato-228364215/' as const,
    buyMeACoffee: 'https://www.buymeacoffee.com/hi.im.kota' as const,
    paypal: 'https://www.paypal.com/paypalme/kotawebdev' as const,
} as const;

export const serviceLink = {
    python: 'https://www.python.org/' as const,
    langChain: 'https://github.com/hwchase17/langchain' as const,
    js: 'https://www.javascript.com/' as const,
    ts: 'https://www.typescriptlang.org/' as const,
    react: 'https://reactjs.org/' as const,
    vue: 'https://vuejs.org/' as const,
    nextjs: 'https://nextjs.org/' as const,
    chakra: 'https://chakra-ui.com/' as const,
    vercel: 'https://vercel.com/' as const,
    chromeExtension:
        'https://chrome.google.com/webstore/category/extensions/' as const,
    mysql: 'https://www.mysql.com/' as const,
    dynamodb: 'https://aws.amazon.com/dynamodb/' as const,
    aws: 'https://aws.amazon.com/' as const,
    gcp: 'https://cloud.google.com/' as const,
} as const;

export const projectsElement: ProjectsElementProps = {
    wordPopQuiz: {
        link: 'https://word-pop-quiz.vercel.app/' as const,
        externalLinkText: 'Word Pop Quiz' as const,
        githubLink: 'https://github.com/07130918/word-pop-quiz' as const,
        githubRepoName: 'word-pop-quiz' as const,
    } as const,
    emailForge: {
        link: 'https://everybody-can-make-emails-easily.vercel.app/' as const,
        externalLinkText: 'EMail Forge' as const,
        githubLink: 'https://github.com/07130918/EmailForge' as const,
        githubRepoName: 'EmailForge' as const,
    } as const,
    gpProofreader: {
        link: 'https://gp-proofreader.vercel.app/' as const,
        externalLinkText: 'GP-proofreader' as const,
        githubLink:
            'https://github.com/07130918/LLM-Playground/tree/main/proofread-web-app' as const,
        githubRepoName: 'LLM-Playground' as const,
    } as const,
    scribbles: {
        link: 'https://chrome.google.com/webstore/detail/scribbles/kjbdhcdgdcipnifdhnpldjibglpjnjib?hl=ja&authuser=0' as const,
        externalLinkText: 'Scribbles' as const,
        githubLink: 'https://github.com/07130918/Scribbles' as const,
        githubRepoName: 'Scribbles' as const,
    } as const,
    toDoList: {
        link: 'https://chrome.google.com/webstore/detail/to-do-list/chaiaabmmjdihkcjlpmbadcdmefaljib?hl=ja&authuser=0' as const,
        externalLinkText: 'Simple To-Do List' as const,
        githubLink: 'https://github.com/07130918/ChromeExtensions' as const,
        githubRepoName: 'ChromeExtensions' as const,
    } as const,
} as const;
