import LessonsPage from "../pages/LessonsPage.vue";
import LearnText from "../pages/sprints/LearnText.vue";
import LearnVideo from "../pages/sprints/LearnVideo.vue";
import ProblemsPage from "../pages/sprints/ProblemsPage.vue";
import QuizPage from "../pages/sprints/QuizPage.vue";
import SprintsPage from "@/pages/sprints/SprintsPage.vue";
import DaysPage from "@/pages/sprints/DaysPage.vue";

export default [
    { path: "/lecciones", component: LessonsPage },
    { path: "/lecciones/day", component: DaysPage },
    { path: "/lecciones/modulo", component: SprintsPage },
    { path: "/lecciones/modulo/leccionTexto", component: LearnText },
    { path: "/lecciones/modulo/leccionVideo", component: LearnVideo },
    { path: "/lecciones/modulo/problemas", component: ProblemsPage },
    { path: "/lecciones/modulo/cuestionario", component: QuizPage }
];