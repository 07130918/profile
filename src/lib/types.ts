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
    name: string;
    link: string;
    externalLinkText: string;
    githubLink: string;
    githubRepoName: string;
};

export type ProjectsElementProps = {
    gpProofreader: ProjectElementProps;
    scribbles: ProjectElementProps;
    wordPopQuiz: ProjectElementProps;
    toDoList: ProjectElementProps;
};

export interface ProjectProps extends ProjectElementProps {
    techStacks: TechStackElement[];
}
