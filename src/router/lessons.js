import LessonsPage from "../pages/LessonsPage.vue";
import ModulesPage from "../pages/lessons/ModulesPage.vue";
import LearnText from "../pages/lessons/LearnText.vue";
import LearnVideo from "../pages/lessons/LearnVideo.vue";
import ProblemsPage from "../pages/lessons/ProblemsPage.vue";
import QuizPage from "../pages/lessons/QuizPage.vue";

export default [
    { path: "/lecciones", component: LessonsPage },
    { path: "/lecciones/modulo", component: ModulesPage },
    { path: "/lecciones/modulo/leccionTexto", component: LearnText },
    { path: "/lecciones/modulo/leccionVideo", component: LearnVideo },
    { path: "/lecciones/modulo/problemas", component: ProblemsPage },
    { path: "/lecciones/modulo/cuestionario", component: QuizPage }
];