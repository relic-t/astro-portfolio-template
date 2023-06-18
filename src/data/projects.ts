export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Illustration portfolio",
    techs: ["on Xfolio"],
    link: "https://xfolio.jp/portfolio/relict",
  }
];

export default projects;
