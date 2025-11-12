// DashbordData.js

import questions from "./Question";

export const DeshbordCard = [
    { Title: "Quizzes Completed", Value: 40, Image: "/FRAME (1).png" },
    { Title: "Current Streak", Value: "7 Days", Image: "/FRAME (2).png" },
    { Title: "Total Coins", Value: 2455, Image: "/FRAME (3).png" },
    { Title: "Current Rank", Value: "#10", Image: "/FRAME (4).png" },
];

const scienceTotal = questions.gk.easy.length + questions.gk.hard.length + questions.gk.medium.length;
const historyTotal = questions.history.easy.length + questions.history.hard.length + questions.history.medium.length;
// const englishTotal = questions.gk.easy.length + questions.gk.hard.length + questions.gk.medium.length;
const mathTotal = questions.math.easy.length + questions.math.hard.length + questions.math.medium.length;


export const subjects = [
    { title: "Mathematics", percentage: mathTotal, icon: "/FRAME (6).png" },
    { title: "Science", percentage: scienceTotal, icon: "/FRAME (7).png" },
    { title: "History", percentage: historyTotal, icon: "/FRAME (8).png" },
    { title: "English", percentage: 75, icon: "/FRAME (9).png" }
];

export const TopPerformers = [
    { id: 1, name: "Sarah Chen", points: 2840, image: "/FRAME10.png" },
    { id: 2, name: "Mike Johnson", points: 2650, image: "/FRAME11.png" },
    { id: 3, name: "Emma Davis", points: 2450, image: "/FRAME12.png" },
    { id: 4, name: "Alex Kim", points: 2320, image: "/FRAME13.png" },
    { id: 5, name: "Lisa Wang", points: 2180, image: "/FRAME15.png" },
];

export const BlogPosts = [
    { id: 1, title: "Understanding Complex Mathematics Concepts", readTime: "5 min read", },
    { id: 2, title: "Effective Study Techniques for Science", readTime: "5 min read", },
    { id: 3, title: "History Study Methods That Work", readTime: "5 min read", },
];
export const FeaturedBlog = {
    title: "10 Tips for Better Test Performance",
    description: "Learn how to optimize your study habits…",
    image: "/FRAME16.png",
};
const physicsTotal = questions.physics.easy.length + questions.physics.hard.length + questions.physics.medium.length;
const programingQuizetotal = questions.html.easy.length + questions.html.hard.length + questions.html.medium.length + questions.css.easy.length + questions.css.hard.length + questions.css.medium.length + questions.javascript.easy.length + questions.javascript.hard.length + questions.javascript.medium.length + questions.react.easy.length + questions.react.hard.length + questions.react.medium.length + questions.expressjs.easy.length + questions.expressjs.hard.length + questions.expressjs.medium.length + questions.github.easy.length + questions.github.hard.length + questions.github.medium.length + questions.mongodb.easy.length + questions.mongodb.hard.length + questions.mongodb.medium.length + questions.nodejs.easy.length + questions.nodejs.hard.length + questions.nodejs.medium.length + questions.typescript.easy.length + questions.typescript.hard.length + questions.expressjs.medium.length;

const hindiLiteratureTotal = questions.hindiLiterature.easy.length + questions.hindiLiterature.hard.length + questions.hindiLiterature.medium.length;


export const SubjectsData = [
    { id: 1, name: "Physics", quizzes: physicsTotal, progress: 65, icon: "/SVG1.png", },
    { id: 2, name: "Literature", quizzes: hindiLiteratureTotal, progress: 30, icon: "/SVG2.png", },
    { id: 3, name: "Programming", quizzes: programingQuizetotal, progress: 90, icon: "/SVG3.png", },
    { id: 4, name: "Mathematics", quizzes: mathTotal, progress: 76, icon: "/SVG4.png", },
];

export const BlogData = [
    { id: 1, title: "10 Tips for Better Learning", description: "Discover effective study techniques that can boost your learning efficiency.", category: "Study Tips", readTime: "5 min read", image: "/FRAME19.png", },
    { id: 2, title: "The Future of Online Education", description: "Exploring how technology is transforming the way we learn.", category: "Education", readTime: "7 min read", image: "/FRAME20.png", },
    { id: 3, title: "Mastering Time Management", description: "Learn how to balance your study time effectively.", category: "Productivity", readTime: "4 min read", image: "/FRAME21.png", },
];

export const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "1000+", label: "Available Quizzes" },
    { value: "50+", label: "Total Subjects" },
    { value: "100K+", label: "Community Members" },
];

