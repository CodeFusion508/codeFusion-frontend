import LessonsPage from "@/pages/LessonsPage.vue";
import LearnText from "@/pages/sprints/LearnText.vue";
import LearnVideo from "@/pages/sprints/LearnVideo.vue";
import ProblemsPage from "@/pages/sprints/ProblemsPage.vue";
import QuizPage from "@/pages/sprints/QuizPage.vue";
import DaysPage from "@/pages/sprints/days/DayPage.vue";

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