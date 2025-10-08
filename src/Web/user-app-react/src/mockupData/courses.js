export const mockCountCourse = 10;
export const mockCourses = [
    {
        courseId: "ENR001",
        title: "React & Redux: The Ultimate Guide (2025 Edition)",
        description: "Master React Hooks, Redux Toolkit, Context API, and build professional web applications from scratch.",
        instructorName: "Maximilian Schwarzmüller",
        cover: {
            uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.7,
        ratingTotal: 15300,
        tier: 1, // Premium
    },
    {
        courseId: 502,
        title: "Advanced Redux Toolkit and State Management Patterns",
        description: "Deep dive into RTK Query, asynchronous logic with Thunks, and advanced performance optimizations.",
        instructorName: "Stephen Grider",
        cover: {
            uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.5,
        ratingTotal: 8900,
        tier: 1, // Premium
    },
    {
        courseId: 503,
        title: "Build 5 React Projects: Portfolio, E-commerce & more!",
        description: "Practical course focused on building complete, real-world projects using modern React stack.",
        instructorName: "Jonas Schmedtmann",
        cover: {
            uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.8,
        ratingTotal: 20100,
        tier: 1, // Premium
    },
    {
        courseId: 504,
        title: "React Testing Library (RTL) and Jest Fundamentals",
        description: "Learn how to write robust and maintainable tests for your React and Redux components.",
        instructorName: "Kent C. Dodds",
        cover: {
            uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.6,
        ratingTotal: 3400,
        tier: 1, // Premium
    },
    {
        courseId: 505,
        title: "React for Beginners: A 7-Day Crash Course",
        description: "An introductory course to help you grasp the core concepts of React in just one week. No Redux included.",
        instructorName: "Bob Ziroll",
        cover: {
            uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.4,
        ratingTotal: 9800,
        tier: 0, // Free
    },
    {
        courseId: 506,
        title: "Performance Optimization in React Applications",
        description: "Identify and fix common performance bottlenecks using memoization, lazy loading, and profiling tools.",
        instructorName: "Andrew Mead",
        cover: {
            uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.7,
        ratingTotal: 1200,
        tier: 1, // Premium
    },
    {
        courseId: 507,
        title: "Server-Side Rendering (SSR) with Next.js and Redux",
        description: "Integrate Redux with Next.js for powerful SSR, static generation, and API routes.",
        instructorName: "Brad Traversy",
        cover: {
            uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.6,
        ratingTotal: 6700,
        tier: 1, // Premium
    },
    {
        courseId: 508,
        title: "Redux and Firebase: Building Real-time Applications",
        description: "Use Redux to manage state while integrating real-time data from Google Firebase.",
        instructorName: "Academind Team",
        // Giả định không có cover URI để kiểm tra logic fallback của bạn
        cover: {
            uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.3,
        ratingTotal: 510,
        tier: 0, // Free
    },
    {
        courseId: 509,
        title: "TypeScript with React & Redux",
        description: "Learn how to strongly type your React components and Redux actions/reducers for better scalability.",
        instructorName: "Ryan Florence",
        cover: {
            uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.8,
        ratingTotal: 1500,
        tier: 1, // Premium
    },
    {
        courseId: 510,
        title: "Migrating from Class Components to Functional Hooks",
        description: "A quick guide to refactoring legacy React code to modern functional components and Hooks.",
        instructorName: "Dan Abramov",
        cover: {
            uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
        },
        ratingAverage: 4.9,
        ratingTotal: 990,
        tier: 0, // Free
    },
];
export const mockInProgressCourses = [
    {
        enrollmentId: "ENR001",
        courseId: 205,
        title: "The Complete 2025 Web Development Bootcamp",
        description: "Master HTML, CSS, JavaScript, Node, React, MongoDB and build 10+ real-world web apps.",
        completed: null, 
        completedUnitIds: ["UNIT101", "UNIT102", "UNIT103", "UNIT104", "UNIT105", "UNIT106"], 
        progress: 85.7,
        ratingAverage: 4.6,
        ratingTotal: 15400,
        cover: { 
            uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
        },
    },
    {
        enrollmentId: "ENR004",
        courseId: 112,
        title: "Introduction to Python for Data Science",
        description: "Start your journey in Data Science with Python fundamentals, NumPy, and Pandas basics.",
        completed: null, 
        completedUnitIds: ["UNIT301"], 
        progress: 10.0,
        ratingAverage: 4.7,
        ratingTotal: 9800,
        cover: { 
            uri: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?fit=crop&w=400&q=80",
        },
    },
    // {
    //     enrollmentId: "ENR006",
    //     courseId: 509,
    //     title: "TypeScript with React & Redux",
    //     description: "Learn how to strongly type your React components and Redux actions/reducers for better scalability.",
    //     completed: null, 
    //     completedUnitIds: ["UNIT501", "UNIT502", "UNIT503", "UNIT504"], 
    //     progress: 40.0,
    //     ratingAverage: 4.8,
    //     ratingTotal: 1500,
    //     cover: { 
    //         uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=400&q=80",
    //     },
    // },
    // {
    //     enrollmentId: "ENR007",
    //     courseId: 710,
    //     title: "Agile & Scrum Certification Prep",
    //     description: "Prepare for your Scrum Master certification with real-world project management scenarios.",
    //     completed: null, 
    //     completedUnitIds: [],
    //     progress: 20.0,
    //     ratingAverage: 4.5,
    //     ratingTotal: 3100,
    //     cover: { 
    //         uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
    //     },
    // },
];
export const mockCompletedCourses = [
    {
        enrollmentId: "ENR002",
        courseId: 310,
        title: "Figma UI/UX Design Essential Training",
        description: "Learn how to use Figma for web and app design. Create stunning prototypes and wireframes.",
        completed: "2024-09-15T10:00:00Z", 
        completedUnitIds: ["UNIT201", "UNIT202", "UNIT203", "UNIT204", "UNIT205"],
        progress: 100, 
        ratingAverage: 4.9,
        ratingTotal: 5800,
        cover: { 
            uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=400&q=80",
        },
    },
    {
        enrollmentId: "ENR008",
        courseId: 902,
        title: "Ethical Hacking: Network Defense Fundamentals",
        description: "Master the basics of network security, firewalls, and intrusion detection systems.",
        completed: "2025-01-20T12:00:00Z", 
        completedUnitIds: ["UNIT901", "UNIT902", "UNIT903", "UNIT904", "UNIT905", "UNIT906"],
        progress: 100, 
        ratingAverage: 4.7,
        ratingTotal: 880,
        cover: { 
            uri: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?fit=crop&w=400&q=80",
        },
    },
    {
        enrollmentId: "ENR009",
        courseId: 501,
        title: "React & Redux: The Ultimate Guide",
        description: "Master React Hooks, Redux Toolkit, Context API, and build professional web applications from scratch.",
        completed: "2023-11-01T09:15:00Z", 
        completedUnitIds: ["UNIT1001", "UNIT1002", "UNIT1003", "UNIT1004", "UNIT1005", "UNIT1006", "UNIT1007"],
        progress: 100, 
        ratingAverage: 4.5,
        ratingTotal: 25000,
        cover: { 
            uri: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=400&q=80",
        },
    },
    {
        enrollmentId: "ENR005",
        courseId: 603,
        title: "Effective Google Ads Campaign Management",
        description: "Learn to set up, optimize, and scale profitable Google Search and Display campaigns.",
        completed: "2024-05-01T15:30:00Z", 
        completedUnitIds: ["UNIT401", "UNIT402", "UNIT403"],
        progress: 100, 
        ratingAverage: 4.4,
        ratingTotal: 340,
        cover: { 
            uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
        },
    },
];
export const mockCourseDetail = {
    enrollmentId: "ENR001",
    courseId: 205,
    title: "The Complete 2025 Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, Node, React, MongoDB and build 10+ real-world web apps.",
    completed: null, 
    completedUnitIds: ["UNIT101", "UNIT102", "UNIT103", "UNIT104", "UNIT105", "UNIT106"], 
    progress: 85.7,
    ratingAverage: 4.6,
    ratingTotal: 15400,
    cover: { 
        uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80",
    },
};
export const mockListLessons = [
    {
        lessonId: 1,
        title: "Section 1: HTML Fundamentals",
        order: 1,
        units: [
            {
                unitId: "UNIT101",
                title: "1.1 Introduction to HTML Basics",
                isExam: false,
                requiredMinutes: 5,
            },
            {
                unitId: "UNIT102",
                title: "1.2 Working with HTML Forms",
                isExam: false,
                requiredMinutes: 10,
            },
            {
                unitId: "UNIT110",
                title: "1.3 Semantic HTML and Accessibility",
                isExam: false,
                requiredMinutes: 12,
            },
            {
                unitId: "UNIT107", 
                title: "1.4 FINAL QUIZ: HTML Fundamentals",
                isExam: true, 
                requiredMinutes: 30,
            },
        ],
    },
    {
        lessonId: 2,
        title: "Section 2: Deep Dive into CSS",
        order: 2,
        units: [
            {
                unitId: "UNIT103",
                title: "2.1 Mastering CSS Selectors",
                isExam: false,
                requiredMinutes: 8,
            },
            {
                unitId: "UNIT104",
                title: "2.2 Flexbox for Modern Layouts",
                isExam: false,
                requiredMinutes: 15,
            },
            {
                unitId: "UNIT105",
                title: "2.3 Advanced CSS Grid System",
                isExam: false,
                requiredMinutes: 12,
            },
            {
                unitId: "UNIT201", // Đơn vị bổ sung
                title: "2.4 CSS Custom Properties (Variables)",
                isExam: false,
                requiredMinutes: 7,
            },
        ],
    },
    {
        lessonId: 3,
        title: "Section 3: JavaScript Core Concepts",
        order: 3,
        units: [
            {
                unitId: "UNIT106",
                title: "3.1 Variables, Data Types, and Operators",
                isExam: false,
                requiredMinutes: 18,
            },
            {
                unitId: "UNIT108", 
                title: "3.2 Control Flow (If/Else, Loops)",
                isExam: false,
                requiredMinutes: 20,
            },
            {
                unitId: "UNIT301", // Đơn vị bổ sung
                title: "3.3 Functions and Scope",
                isExam: false,
                requiredMinutes: 15,
            },
            {
                unitId: "UNIT109", 
                title: "3.4 MIDTERM EXAM: CSS & JavaScript",
                isExam: true, 
                requiredMinutes: 45,
            },
        ],
    },
    {
        lessonId: 4,
        title: "Section 4: Advanced JavaScript (Async & DOM)",
        order: 4,
        units: [
            {
                unitId: "UNIT401",
                title: "4.1 Introduction to Asynchronous JS (Promises)",
                isExam: false,
                requiredMinutes: 25,
            },
            {
                unitId: "UNIT402",
                title: "4.2 Fetch API and AJAX Requests",
                isExam: false,
                requiredMinutes: 18,
            },
            {
                unitId: "UNIT403",
                title: "4.3 Interacting with the DOM",
                isExam: false,
                requiredMinutes: 22,
            },
        ],
    },
    {
        lessonId: 5,
        title: "Section 5: Backend Fundamentals with Node.js & Express",
        order: 5,
        units: [
            {
                unitId: "UNIT501",
                title: "5.1 Node.js Basics and npm",
                isExam: false,
                requiredMinutes: 15,
            },
            {
                unitId: "UNIT502",
                title: "5.2 Setting up a Simple Express Server",
                isExam: false,
                requiredMinutes: 20,
            },
            {
                unitId: "UNIT503",
                title: "5.3 Creating Your First REST API Endpoint",
                isExam: false,
                requiredMinutes: 35,
            },
        ],
    },
    {
        lessonId: 6,
        title: "Section 6: Database Integration with MongoDB",
        order: 6,
        units: [
            {
                unitId: "UNIT601",
                title: "6.1 MongoDB Setup and NoSQL Concepts",
                isExam: false,
                requiredMinutes: 14,
            },
            {
                unitId: "UNIT602",
                title: "6.2 CRUD Operations with Mongoose",
                isExam: false,
                requiredMinutes: 28,
            },
            {
                unitId: "UNIT603",
                title: "6.3 Data Modeling and Relationships",
                isExam: false,
                requiredMinutes: 19,
            },
        ],
    },
    {
        lessonId: 7,
        title: "Section 7: React Fundamentals and MERN Stack Review",
        order: 7,
        units: [
            {
                unitId: "UNIT701",
                title: "7.1 Introduction to React and JSX",
                isExam: false,
                requiredMinutes: 18,
            },
            {
                unitId: "UNIT702",
                title: "7.2 Components, Props, and State",
                isExam: false,
                requiredMinutes: 25,
            },
            {
                unitId: "UNIT703",
                title: "7.3 React Hooks (useState & useEffect)",
                isExam: false,
                requiredMinutes: 30,
            },
            {
                unitId: "UNIT704",
                title: "7.4 FINAL PROJECT EXAM: Full Stack Application",
                isExam: true,
                requiredMinutes: 50,
            },
        ],
    },
];
export const mockEnrollement = {
    enrollmentId: "ENR001",
    courseId: 205,
    completed: null, 
    completedUnitIds: [
        "UNIT101", // Unit 1.1: HTML Basics
        "UNIT102", // Unit 1.2: HTML Forms
        "UNIT103", // Unit 2.1: CSS Selectors
        "UNIT104", // Unit 2.2: CSS Flexbox
        "UNIT105", // Unit 2.3: CSS Grid
        "UNIT106", // Unit 3.1: JS Variables
    ], 
    
    // Các trường khác (title, description, rating, cover, progress) sẽ được hợp nhất từ API sau
};
export const mockMaterialUnit101 = {
    unitId: "UNIT101",
    title: "1.1 Introduction to HTML Basics",
    requiredMinutes: 5, 
    content: `
        <div style="padding: 15px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h4 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 5px;">What is HTML?</h4>
            <p><strong>HTML</strong> (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It is the backbone of all websites, defining the meaning and structure of the web content.</p>
            
            <h4 style="color: #28a745;">Key HTML Structure:</h4>
            <p>Every valid HTML document consists of a mandatory structure:</p>
            <ul>
                <li>The <code>&lt;!DOCTYPE html&gt;</code> declaration.</li>
                <li>The root element <code>&lt;html&gt;</code>.</li>
                <li>The <code>&lt;head&gt;</code>, which contains metadata (like title and character set).</li>
                <li>The <code>&lt;body&gt;</code>, which contains all visible content.</li>
            </ul>
            
            <div style="background: #f8f9fa; padding: 15px; border: 1px dashed #6c757d; margin-top: 20px;">
                <strong>Code Example (The Boilerplate):</strong>
                <pre style="white-space: pre-wrap; font-family: monospace; font-size: 14px;"><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Learning&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Content goes here --&gt;
&lt;/body&gt;
&lt;/html&gt;
                </code></pre>
            </div>
            
            <p style="margin-top: 15px;">Remember: HTML is not a programming language; it is a **markup language** used to structure content.</p>
        </div>
    `,
};
export const mockExamDataUnit107 = {
    examUnitId: "UNIT107",
    title: "1.4 FINAL QUIZ: HTML Fundamentals",
    requiredMinutes: 30, 
    totalPoints: 200,
    questions: [
        {
            questionId: "QZ001",
            content: "Which HTML element is used to define the document's structure and visible content?",
            point: 20, 
            choices: [
                { choiceId: "C001A", content: "<code>&lt;head&gt;</code>" },
                { choiceId: "C001B", content: "<code>&lt;title&gt;</code>" },
                { choiceId: "C001C", content: "<code>&lt;body&gt;</code>" }, 
                { choiceId: "C001D", content: "<code>&lt;html&gt;</code>" },
            ],
        },
        {
            questionId: "QZ002",
            content: "What does the acronym HTML stand for?",
            point: 20,
            choices: [
                { choiceId: "C002A", content: "Hyper Tool Markup Language" },
                { choiceId: "C002B", content: "Hyper Text Markup Language" }, 
                { choiceId: "C002C", content: "Home Tool Multi Language" },
            ],
        },
        {
            questionId: "QZ003",
            content: "Which attribute is used to specify a **unique ID** for an HTML element?",
            point: 30,
            choices: [
                { choiceId: "C003A", content: "<code>class</code>" },
                { choiceId: "C003B", content: "<code>name</code>" },
                { choiceId: "C003C", content: "<code>id</code>" }, 
                { choiceId: "C003D", content: "<code>style</code>" },
            ],
        },
        {
            questionId: "QZ004",
            content: "Which HTML5 semantic element is typically used for navigation links?",
            point: 20,
            choices: [
                { choiceId: "C004A", content: "<code>&lt;list&gt;</code>" },
                { choiceId: "C004B", content: "<code>&lt;header&gt;</code>" },
                { choiceId: "C004C", content: "<code>&lt;nav&gt;</code>" }, 
                { choiceId: "C004D", content: "<code>&lt;aside&gt;</code>" },
            ],
        },
        {
            questionId: "QZ005",
            content: "How do you correctly define a paragraph element in HTML?",
            point: 25,
            choices: [
                { choiceId: "C005A", content: "<code>&lt;p&gt;Paragraph&lt;/p&gt;</code>" }, 
                { choiceId: "C005B", content: "<code>&lt;para&gt;Paragraph&lt;/para&gt;</code>" },
                { choiceId: "C005C", content: "<code>&lt;text&gt;Paragraph&lt;/text&gt;</code>" },
            ],
        },
        {
            questionId: "QZ006",
            content: "The correct HTML element for the largest heading is:",
            point: 25,
            choices: [
                { choiceId: "C006A", content: "<code>&lt;heading&gt;</code>" },
                { choiceId: "C006B", content: "<code>&lt;h1&gt;</code>" }, 
                { choiceId: "C006C", content: "<code>&lt;h6&gt;</code>" },
                { choiceId: "C006D", content: "<code>&lt;head&gt;</code>" },
            ],
        },
        {
            questionId: "QZ007",
            content: "Which attribute is necessary for the <code>&lt;img&gt;</code> tag to display an image?",
            point: 30,
            choices: [
                { choiceId: "C007A", content: "<code>alt</code>" },
                { choiceId: "C007B", content: "<code>url</code>" },
                { choiceId: "C007C", content: "<code>src</code>" }, 
                { choiceId: "C007D", content: "<code>link</code>" },
            ],
        },
        {
            questionId: "QZ008",
            content: "Which tag is used to create a numbered list?",
            point: 30,
            choices: [
                { choiceId: "C008A", content: "<code>&lt;ul&gt;</code>" },
                { choiceId: "C008B", content: "<code>&lt;dl&gt;</code>" },
                { choiceId: "C008C", content: "<code>&lt;ol&gt;</code>" }, 
                { choiceId: "C008D", content: "<code>&lt;list&gt;</code>" },
            ],
        },
    ],
};