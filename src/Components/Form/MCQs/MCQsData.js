export const MCQsData = {
  title: "Hire the Top 3% of Talent",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip..`,
  cardData: [
    {
      route: "/start/role",
      nextRoute: "/start/employees",
      SteeperTitle: "Role",
      formikValue: "Role",
      labelName: "What role would you like to hire?",
      Options: [
        {
          label: "Cloud Computing",
          description:
            "Amazon Web Services, AWS Lambda, Microsoft Azure, Amazon CloudFront, Google Clouds, gRPC, Cloud Application Development Services, Scalable and flexible SaaS, Serverless Computing",
        },
        {
          label: "Data Science",
          description:
            "Dart, Flutter, Hadoop, Kafka, Powee BI, Tableau, TensorFlow",
        },
        {
          label: "Databases",
          description:
            "Cassandra, Mango DB, MySQL, PostgreSQL, Microsoft SQL Server",
        },
        {
          label: "DevOps and QA",
          description:
            "Chaos Monkey, Docker, Jenkins, Kubernetes, Selenium, Terraform",
        },
        {
          label: "Java",
          description:
            "Grails, Java, Kotlin, Scala, Spring",
        },
        {
          label: "JavaScript",
          description:
            "Angular, Electron, Express JS, JavaScript, Node.js, React JS, React Native, Redux, TypeScript",
        },
        {
          label: "PHP",
          description:
            "Drupal, Laravel, Magento, PHP, Symfony, WordPress",
        },
        {
          label: "Phython",
          description:
            "Django, Flask, Phython",
        },
      ],
    },
    {
      route: "/start/employees",
      nextRoute: "/start/projects",
      SteeperTitle: "Employees",
      formikValue: "Employees",
      labelName: "How many people are employed at your company?",
      Options: [
        "Less than 10 ",
        "11-50 ",
        "51-200 ",
        "201-1000 ",
        "1001-5000 ",
        "more then 5000 ",
      ],
    },
    {
      route: "/start/projects",
      nextRoute: "/start/duration",
      SteeperTitle: "Project",
      formikValue: "Project",
      labelName: "What type of project are you hiring for?",
      Options: [
        "New idea or project ",
        "Existing project that needs more resources ",
        "None of the above, I'm just looking to learn more about CodersWire ",
      ],
    },
    {
      route: "/start/duration",
      nextRoute: "/start/time",
      SteeperTitle: "Duration",
      formikValue: "Duration",
      labelName:
        "How long do you need the developer?",
      Options: [
        "Less than 1 week",
        "1 to 4 weeks ",
        "1 to 3 months ",
        "3 to 6 months",
        "Longer than 6 months",
        "I'll decide later",
      ],
    },
    {
      route: "/start/time",
      nextRoute: "/start/skills",
      SteeperTitle: "Time",
      formikValue: "Time",
      labelName:
        "What level of time commitment will you require from the developer?",
      Options: [
        "Full time (40 or more hrs/week) ",
        "Part time (Less than 40 hrs/week) ",
        "Hourly ",
        "I'll decide later ",
      ],
    },
    {
      route: "/start/skills",
      nextRoute: "/start/start-off",
      SteeperTitle: "Skills",
      formikValue: "Skills",
      labelName:
        "What skills would you like to see in your new hire?",
      Options: [
        {
          role: "Cloud Computing",
          skills: [
            "Amazon Web Services",
            "AWS Lambda",
            "Microsoft Azure",
            " Amazon CloudFront",
            "Google Clouds",
            " gRPC",
            " Cloud Application Development Services",
            " Scalable and flexible SaaS",
            " Serverless Computing",

          ]
        },
        {
          role: "Data Science",
          skills: [
            "Dart", "Flutter", "Hadoop", "Kafka", "Powee BI", "Tableau", "TensorFlow",

          ]
        },
        {
          role: "Databases",
          skills: [
            "Cassandra",
            "Mango DB",
            "MySQL",
            "PostgreSQL",
            "Microsoft SQL Server",

          ]
        },
        {
          role: "DevOps and QA",
          skills: [
            "Chaos Monkey",
            "Docker",
            "Jenkins",
            "Kubernetes",
            "Selenium",
            "Terraform",

          ]
        },
        {
          role: "Java",
          skills: [
            "Grails",
            "Java",
            'Kotlin',
            'Scala',
            "Spring",

          ]
        },
        {
          role: "JavaScript",
          skills: [
            "Angular",
            "Electron",
            " Express JS",
            " JavaScript",
            " Node.js",
            " React JS",
            " React Native",
            " Redux",
            " TypeScript",

          ]
        },
        {
          role: "PHP",
          skills: [
            "Drupal",
            "Laravel",
            "Magento",
            "PHP",
            "Symfony",
            "WordPress",

          ]
        },
        {
          role: "Phython",
          skills: [
            "Django",
            "Flask",
            " Phython",

          ]
        },

      ],
    },
    {
      route: "/start/start-off",
      nextRoute: "/start/form",
      SteeperTitle: "Start Off",
      formikValue: "StartOff",
      labelName: "How long do you need the developer?",
      Options: [
        "Immediately ",
        "In 1 to 2 weeks ",
        "More than 2 weeks from now ",
        "I'll decide later ",
      ],
    },
  ],
};
