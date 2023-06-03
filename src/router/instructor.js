import InstructorIndex from '@/modules/Instructor/index.vue'
import ProblemsIndex from '@/modules/Instructor/problems/index.vue'

const pathMain = '/instructor'
const routes = [
    {
        path: `${pathMain}/`,
        component: InstructorIndex,
        name: 'instructor',
        children: [
            { 
                path: `${pathMain}/problemas/`,
                name: 'instructor-problems',
                component: ProblemsIndex
            }
        ]
    }
]

export default routes