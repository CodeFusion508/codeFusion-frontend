import LessonsPage from "../pages/LessonsPage.vue";
import LearnText from "../pages/sprints/LearnText.vue";
import LearnVideo from "../pages/sprints/LearnVideo.vue";
import ProblemsPage from "../pages/sprints/ProblemsPage.vue";
import QuizPage from "../pages/sprints/QuizPage.vue";
import ContentPage from "@/pages/sprints/ContentPage.vue";
import DaysPage from "@/pages/sprints/DaysPage.vue";

// View by test
import DayPageTimeLine from '@/pages/sprints/DayPage/DayPage.vue'

export default [
    { path: "/lecciones", component: LessonsPage },
    { path: "/lecciones/dias", component: DaysPage },
    { path: "/lecciones/dias-timeline", component: DayPageTimeLine },
    { path: "/lecciones/dias/contenido", component: ContentPage },
    { path: "/lecciones/dias/contenido/leccionTexto", component: LearnText },
    { path: "/lecciones/dias/contenido/leccionVideo", component: LearnVideo },
    { path: "/lecciones/dias/contenido/problemas", component: ProblemsPage },
    { path: "/lecciones/dias/contenido/cuestionario", component: QuizPage }
];