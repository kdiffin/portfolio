type Social = {
  label: string;
  link: string;
  imageSrc: string;
};

type Presentation = {
  email: string;
  socials: Social[];
};

const presentation: Presentation = {
  email: "ibra.davud@gmail.com",
  socials: [
    {
      label: "Leetcode",
      link: "https://leetcode.com/u/s4Ckf77Si2/",
      imageSrc: "/leetcode.png",
    },
    {
      label: "Discord",
      link: "https://discord.com/users/593007920417996821",
      imageSrc: "/discord.png",
    },
    {
      label: "Github",
      link: "https://github.com/kdiffin",
      imageSrc: "/github.png",
    },
  ],
};

export default presentation;
