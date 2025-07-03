import type { JSX, ReactNode } from 'react';

export type TechStackElement = {
    name: string;
    icon: JSX.Element;
    link: string;
};

export type TechStack = {
    programmingLangs: TechStackElement[];
    databases: TechStackElement[];
    cloudPlatforms: TechStackElement[];
};

export type ProjectElementProps = {
    link: string;
    externalLinkText: string;
    githubLink: string;
    githubRepoName: string;
};

export type ProjectsElementProps = {
    wordPopQuiz: ProjectElementProps;
    emailForge: ProjectElementProps;
    gpProofreader: ProjectElementProps;
    scribbles: ProjectElementProps;
    toDoList: ProjectElementProps;
};

export interface ProjectProps extends ProjectElementProps {
    techStacks: TechStackElement[];
}

export type ExLinkProps = {
    href: string;
    children: string | ReactNode;
};
