import LessonsPage from "@/pages/LessonsPage.vue";
import LearnText from "@/pages/sprints/LearnText.vue";
import LearnVideo from "@/pages/sprints/LearnVideo.vue";
import ProblemsPage from "@/pages/sprints/ProblemsPage.vue";
import QuizPage from "@/pages/sprints/QuizPage.vue";
import ContentPage from "@/pages/sprints/ContentPage.vue";
import DaysPage from "@/pages/sprints/days/DayPage.vue";

export default [
    { path: "/lecciones", component: LessonsPage, name: 'leasseans' },
    { path: "/lecciones/dias", component: DaysPage, name: 'leasseans-day' },
    { path: "/lecciones/dias/contenido", component: ContentPage },
    { path: "/lecciones/dias/contenido/leccionTexto", component: LearnText, name: 'content-lesseans-text' },
    { path: "/lecciones/dias/contenido/leccionVideo", component: LearnVideo,name: 'content-lesseans-video' },
    { path: "/lecciones/dias/contenido/problemas", component: ProblemsPage, name: 'content-lesseans-problems' },
    { path: "/lecciones/dias/contenido/cuestionario", component: QuizPage, name: 'cotenten-lesseans-quiz' }
];