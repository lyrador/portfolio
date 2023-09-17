export default {
	bio: {
		about: {
			text: [
				"Hey there! &#128075;",
				"I'm Daryl. I’m currently a Final Year Information Systems Undergraduate at the National University of Singapore.",
				"I'm a developer, passionate in integrating IT solutions into businesses with a strong desire to learn, having a broad scope of interests ranging from game development and music to content creation. Given my technical background, leadership experience and innovative mindset, I believe I would be a great team player and contribute significantly to projects, making me a great asset to any company. .",
				"I am currently looking for opportunities to further hone my skills and explore the different development roles in the realm of computing.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, feel free to send me an email at darylyee.jh@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "JavaScript, Java, Lua",
			color: "1",
			percentage: "90",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, ReactJS",
			color: "6",
			percentage: "80",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Database",
			skillName: "Oracle, Glassfish",
			color: "3",
			percentage: "60",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS, CSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "7",
			percentage: "80",
		},
		// {
		// 	title: "Tools",
		// 	skillName: "Postman, Chrome DevTools",
		// 	color: "3",
		// 	percentage: "80",
		// },
		{
			title: "Editor",
			skillName: "VS Code, Netbeans, IntelliJ",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "NUS Voices Website",
				image: "images/chongjianshuguang-thumbnail-S.jpg",
				summary:
					"Developed a front end website for my recreational mandopop club to provide more information about the club",
				preview: "https://nusvoices.com/",
				techStack: [
					"ReactJS", "Bootstrap", "JavaScript", "Netlify",
				],
			},
			{
				projectName: "NUS Climbing Website",
				image: "images/climbingclub.jpg",
				summary:
					"Maintained and updated the school's climbing club website to increase exposure towards new climbers and potential partners and sponsors",
				preview: "https://www.nusclimb.com/",
				techStack: [
					"PHP", "JavaScript",
				],
			},
		],
		software: [
			{
				projectName: "Educouch",
				image: "images/neweducouchlogo.jpg",
				summary:
					"Led a team of 6 to develop an LMS system that caters to different generations simultaneously, with key features that includes a whiteboard conferencing tool, a calendar scheduler, mobile application, and trivia creator.",
				preview:
					"https://github.com/lyrador/educouch",
				techStack: ["Java", "Spring", "ReactJS", "React Native", "AWS S3", "PostgreSQL"],
			},
			{
				projectName: "NUS Society",
				image: "images/nusociety-S.png",
				summary:
					"An all-in-one co-curricular activities portal for students with management capabilities, providing a one-stop platform to explore and sign up for societies and events, networking within and across organisations.",
				preview:
					"https://github.com/lyrador/nusociety",
				techStack: ["Java", "Angular", "JSF", "JavaScript", "Glassfish"],
			},
			{
				projectName: "Hotel Booking System",
				image: "images/hotel.jpg",
				summary:
					"This Hotel Booking System project is a distributed enterprise-scale software system, which provides features for reserving hotel rooms, checking-in, pricing calculation, exception report handling etc.",
				preview:
					"https://github.com/lyrador/holiday-reservation-system-project",
				techStack: ["Java", "Jakarta EE", "Glassfish", "JPA", "CLI"],
			},
			{
				projectName: "Library Management System",
				image: "images/library-S.jpg",
				summary:
					"Database and UI Focused Book Management Service with features regarding to fines, loans and customers.",
				preview: "https://github.com/raihanyusri/als",
				techStack: ["Java", "Hibernate", "SQL", "Glassfish"],
			},
			{
				projectName: "Shared Cart - Shopee UltraHackathon",
				image: "images/ultra.jpg",
				summary:
					"Built a feature for sharing carts with others with customizable payment splitting, transitioning from an individualistic to group shopping experience, enhancing community building within the application.",
				preview: "https://github.com/lyrador/Shopee-Ultra-Hackathon---Group-i10-Shared-Cart",
				techStack: ["Bootstrap", "JavaScript", "ReactJS", "Figma", "Photoshop"],
			},
		],
		android: [
			{
				projectName: "Easy Delivery",
				image: "images/easydelivery-S.png",
				summary:
					"An on-demand delivery application designed with an Enterprise Architecure System using Unified Modelling Diagrams (UML), including creation of high fidelity wireframs and mockups",
				preview: "https://drive.google.com/file/d/1t8CGnyNMueAyY6JDsasN1kMrgFAfiR-A/view?usp=sharing",
				techStack: ["Figma", "Visual Paradigm", "UML"],
			},
		],
		freelance: [
			{
				projectName: "Singtel SHINE LIT Challenge",
				image: "images/shinelit.png",
				summary:
					"3rd Place for LIT Challenge for Singtel High Performing Interns. Presented on ways to expand the use of AR/VR technology within the Consumer Market in the context of 5G, specifically in the tourism industry.",
				preview: "https://drive.google.com/file/d/1ildK4OuVWF4_VRi9riPmI-GdkXxpg7uO/view?usp=sharing",
				techStack: [],
			},
			{
				projectName: "NCS Thinkathon",
				image: "images/thinkathon.png",
				summary:
					"Presented on ways hawkers benefit from the trend of food delivery and gain a bigger share of food delivery orders through an all-inclusive app which comprises of 2 main functions - directory and delivery.",
				preview:
					"https://drive.google.com/file/d/1toWAxu7_EqkmDDo0ccTHiNxMSsx74xJ7/view?usp=sharing",
				techStack: [],
			},
		],
	},
	experience: [
		{
			title: "SAP",
			duration: "May 2023 - Present",
			subtitle: "Mobile & Cloud Full Stack Developer Intern ",
			details: [
				"Analyse, debug and fix issues in SAP Mobile Development Kit, resolving 40+ JIRA tickets and pushing 5000+ lines of Git code commits for Web, iOS and Android platforms across different app versions. ",
				"Communicate with stakeholders to deliver quick updates and develop toolbar and calendar features that expand app capabilities.",
			],
			tags: [
				"NativeScript", "Swift", "Kotlin", "Java", "JavaScript",
			],
			icon: "mobile",
		},
		{
			title: "National University of Singapore",
			duration: "Aug 2022 - Dec 2022",
			subtitle: "CS Teaching Assistant",
			details: [
				"Prepared and conducted biweekly tutorials for over 20 students in the course BT2102 Data Management and Visualisation. ",
				"Taught technical concepts, gave detailed feedback and received a high rating from my students.",
			],
			tags: [
				"SQL", "Python", "Tableau",
			],
			icon: "paperclip",
		},
		{
			title: "NCS",
			duration: "May 2022 - Jul 2022",
			subtitle: "Software Engineer Intern",
			details: [
				"Created 10+ huge components for front-end development, set up RESTful APIs, managed JSON data and handled complex back-end logic in a large-scale Agile project of more than 50 developers.",
				"Executed SQL queries on Oracle database with over 500 tables.",
				"Created and updated 200+ pages of documentation (e.g. acceptance criteria and user stories) to the project’s expectations.",
				"Refactored outdated code and reduced assigned flags in Fortify report by over 60%.",
				"Carried out unit testing, integration testing and user acceptance testing, recorded results to ensure the quality of the features.",
			],
			tags: [
				"JavaScript", "Angular", "Bootstrap", "Spring", "Oracle", "SQL",
			],
			icon: "code",
		},
		{
			title: "Ottodot",
			duration: "May 2021 - Aug 2021",
			subtitle: "Game Developer Intern",
			details: [
				"Created and released an EdTech game called Ottoworld: Parkour Rangers, with currently more than 2 million visits, and architected part of the documentation diagrams.",
				"Collaborated with and co-developed games with international developers and designers.",
				"Provided suggestions and presented new ideas to the management as well as improved on and debugged games.",
				"Designed Unified Modelling Language (UML) diagrams to assist in code organisation and structuring.",
				"Analysed data obtained from GameAnalytics and Amazon Web Services (AWS) to make plans for future installments.",
				"Facilitated game testing sessions with 10+ children across the globe.",
			],
			tags: [
				"Lua", "UML Diagrams", "Figma",
			],
			icon: "gamepad",
		},
	],
	education: [
		{
			title: "Bachelor of Computing in Information Systems",
			duration: "Aug 2020 - May 2024",
			subtitle: "National University of Singapore, Singapore",
			details: [
				"Cumulative GPA: 4.42",
				"Expertise: Distinction in ICT Solutioning with Specialisation in Financial Technology",
				"Relevant Coursework:",
				"IDT*CS2040 Data Structures and Algorithms",
				"IDT*CS2105 Introduction to Computer Networks",
				"IDT*BT2102 Data Management and Visualisation",
				"IDT*IS3106 Enterprise Systems Interface Design and Development",
				"IDT*IS4301 Agile IT with DevOps",
				"IDT*IS3221 ERP Systems with Analytics Solutions",
				"IDT*IS4228 Information Technologies in Financial Services",
			],
			tags: [
				"Data Structures & Algorithms",
				"Database Management System",
				"Computer Networks",
				"Enterprise Architecture Design",
				"Software Development",
				"Machine Learning",
			],
			icon: "graduation-cap",
		},
		{
			title: "Singapore-Cambridge GCE Advanced-Level Certificate",
			duration: "Jan 2016 - Dec 2017",
			subtitle: "Victoria Junior College, Singapore",
			details: [
				"Secured 83.75/90 RP in GCE A-Level Examinations.",
				"Attained multiple awards, such as the Edusave Awards for Achievement, Good Leadership and Service, awarded to recognize pupil's leadership qualities, services rendered and excellence in non-academic activities, as well as SYF Distinction Award for Guitar Ensemble",
			],
			tags: ["Biology", "Chemistry", "Mathematics", "Economics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/lyrador",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/darylyee/",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"-",
			],
		},
	],
};
