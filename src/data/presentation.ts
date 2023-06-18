type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "luz@relict.one",
  title: "📃 Relict Paper",
  description:
    "Hi, i'm *Luz*. I like to draw digital arts. Beginner in coding, but like to create something on the Internet. I'm currently into playing 'Genshin Impact'.",
  socials: [
    {
      label: "Misskey",
      link: "https://relict.one/@luz",
    },    
    {
      label: "Tumblr",
      link: "https://mug.relict.one",
    },
    {
      label: "Github",
      link: "https://github.com/relic-t",
    },
  ],
};

export default presentation;
