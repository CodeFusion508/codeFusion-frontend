import LessonsPage from "../pages/LessonsPage.vue";
import ModulesPage from "../pages/lessons/ModulesPage.vue";
import LearnPage from "../pages/lessons/LearnPage.vue";
import ProblemsPage from "../pages/lessons/ProblemsPage.vue";
import QuizPage from "../pages/lessons/QuizPage.vue";
import SolutionPage from "../pages/lessons/SolutionPage.vue";

export default [
    { path: "/lecciones", component: LessonsPage },
    { path: "/lecciones/modulo", component: ModulesPage },
    { path: "/lecciones/modulo/leccion", component: LearnPage },
    { path: "/lecciones/modulo/problemas", component: ProblemsPage },
    { path: "/lecciones/modulo/cuestionario", component: QuizPage },
    { path: "/lecciones/modulo/solucion", component: SolutionPage },
];