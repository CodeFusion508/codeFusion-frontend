const LessonsPage = () => import( "@/pages/LessonsPage.vue");
const DaysPage = () => import( "@/pages/lessons/DayPage.vue");
const LearnText = () => import( "@/pages/lessons/content/LearnText.vue");
const LearnVideo = () => import( "@/pages/lessons/content/LearnVideo.vue");
const ProblemsPage = () => import( "@/pages/lessons/content/ProblemsPage.vue");
const QuizPage = () => import( "@/pages/lessons/content/QuizPage.vue");


export default [
    {
        path      : "/lecciones",
        component : LessonsPage,
        name      : "lessons",
        meta      : { name: "lessons" }
    },
    {
        path      : "/lecciones/dias",
        component : DaysPage,
        name      : "lessons-day"
    },
    {
        path      : "/lecciones/dias/texto",
        component : LearnText,
        name      : "content-text"
    },
    {
        path      : "/lecciones/dias/video",
        component : LearnVideo,
        name      : "content-video"
    },
    {
        path      : "/lecciones/dias/problemas",
        component : ProblemsPage,
        name      : "content-problems"
    },
    {
        path      : "/lecciones/dias/cuestionario",
        component : QuizPage,
        name      : "content-quiz"
    }
];