
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

export interface ResumeData {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    description: string;
  }[];
  skills: string[];
}

export interface PortfolioData {
  hero: {
    name: string;
    tagline: string;
    backgroundUrl: string;
    profileUrl: string;
  };
  about: {
    title: string;
    description: string;
    imageUrl: string;
    skills: string[];
  };
  projects: Project[];
  resume: ResumeData;
  contact: {
    email: string;
    phone: string;
    location: string;
    socialLinks: {
      platform: string;
      url: string;
    }[];
  };
}

const portfolioData: PortfolioData = {
  hero: {
    name: "VIVEKANANDHA",
    tagline: "Cloud Computing & DevOps Engineer",
    backgroundUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
    profileUrl: "https://unsplash.com/photos/a-temple-stands-tall-in-a-japanese-street-FbYZAV_0VuU"
  },
  about: {
    title: "About Me",
    description: "I specialize in Cloud Computing and DevOps practices to streamline infrastructure and deployment. Proficient with AWS services, CI/CD pipelines, Jenkins, Git and GitHub and Experienced in containerization using Docker and orchestration with Kubernetes. Skilled in monitoring, logging, and optimizing cloud-native applications. Passionate about building scalable, resilient, and cost-effective cloud solutions.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=964&auto=format&fit=crop",
    skills: [
      "Python", 
      "Cloud Computing", 
      "DevOps",
      "Git & Github",
      "Leadership & Time Management"
    ]
  },
  projects: [
    {
      id: "1",
      title: "Equal Access Job",
      description: "It is the process of deploy the Web development file in the Ubuntu Server by using AWS.",
      imageUrl: "/equal-opportunity.jpg",
      category: "Team Project (Web Development & Web Hosting)",
      link: "https://github.com/VIVEKANANDHA-P/Project_Equal_Access_Jobs.git"
    },
    {
      id: "2",
      title: "CI & CD Pipeline",
      description: "A web application deployment done by CI & CD full End to End pipeline.",
      imageUrl: "/CI & CD Pipeline.jpg",
      category: "Jenkins",
      link: "https://github.com/VIVEKANANDHA-P/CI_CD_Pipeline_Sonarqube.git"
    },
    {
      id: "3",
      title: "E-Stack",
      description: "Hosting an JSP file in the AWS, EC2 Instance and it also linked with DNS.",
      imageUrl: "/E.stack.jpg",
      category: "JSP",
      link: "https://www.linkedin.com/posts/csm-vivekanandha-p-96414a264_ubuntu-aws-cloudcomputing-activity-7314296459086966784-hCeX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDOGNwBr8fHl2lXdjE22BcMH-b3OuETp_8"
    },
    {
      id: "4",
      title: "Fund Raiser",
      description: "Collecting the fund from the doners and managing the amount to the receivers for the basic or medical needs.",
      imageUrl: "fundraise.jpg",
      category: "Full Stack",
      link: "https://github.com/VIVEKANANDHA-P/Fundrainser.git"
    }
  ],
  resume: {
    experience: [
      {
        title: "Cloud Computing",
        company: "Remote",
        period: "2024-2025",
        description: "I had a better experience in the field of Cloud Computing by using AWS service's and also had hands-on experience with projects."
      },
      {
        title: "DevOps",
        company: "Remote",
        period: "2025-Present",
        description: "I had a better experience in the field of DevOps by using Git & GitHub, Jenkins, Docker, Kubernetes, Terraform and also had hands-on experience with projects."
      },
    ],
    education: [
      {
        degree: "Bachelor Of Engineering Computer Science and Design",
        institution: "Karpagam College Of Engineering",
        period: "2022-2026",
        description: "Pursuing final year in the field of Computer Science and Design with a 7.5 CGPA, along with active participation in extracurricular activities such as being an NCC Cadet (Army Wing), a hockey player, and a Rotaractor."
      },
      {
        degree: "HSC",
        institution: "SKV Matriculation Higher Secondary School",
        period: "2020-2022",
        description: "Completed with 75.33% In the stream of Computer Science. Focused on the basic software's and the Application's."
      }
    ],
    skills: [
      "Python",
      "Ubutu/Linux",
      "Git",
      "Git Hub",
      "Cloud Computing",
      "DevOps",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Amazon Web Service",
      "Oracle Cloud",
      "SQL",
      "IP Addressing",
      "Leadership",
      "Time Management"
    ]
  },
  contact: {
    email: "srimathipandian12@gmail.com",
    phone: "+91 9345811764",
    location: "Tamil Nadu, India",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/sgt-rtr-vivekanandha-p-96414a264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        platform: "GitHub",
        url: "https://github.com/VIVEKANANDHA-P"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/harish_shershah/"
      },
      {
        platform: "Twitter",
        url: "https://x.com/Harish24719139"
      }
    ]
  }
};

export default portfolioData;
