const LessonsPage = () => import( "@/pages/LessonsPage.vue");
const LearnText = () => import( "@/pages/sprints/LearnText.vue");
const LearnVideo = () => import( "@/pages/sprints/LearnVideo.vue");
const ProblemsPage = () => import( "@/pages/sprints/ProblemsPage.vue");
const QuizPage = () => import( "@/pages/sprints/QuizPage.vue");
const DaysPage = () => import( "@/pages/sprints/days/DayPage.vue");

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