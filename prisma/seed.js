import { PrismaClient } from '@prisma/client'
import programs from './model.data/program.js'
import courses from './model.data/course.js'
import homeMedia from './model.data/homeMedia.js'
import slideShows from './model.data/slideShow.js'
import courseOverview from './model.data/courseOverview.js'
import courseBenefits from './model.data/courseBenefit.js'
import feedbacks from './model.data/feedback.js'
import certificateBenefits from './model.data/certificateBenefit.js'
import partners from './model.data/partner.js'
import reviews from './model.data/review.js'
import courseContents from './model.data/courseContent.js'
import lessons from './model.data/lesson.js'
import lessonContents from './model.data/lessonContent.js'
import quizzes from './model.data/quiz.js'
import answers from './model.data/answer.js'

const prisma = new PrismaClient()

const users = [
    {
        email: 'pychey@gmail.com',
        password: '$2b$10$qka2M9QyvYM/8d.LH3BCqeSeTSsge1HHPoliEV6BW.6vNHS5w2SLa',
        emailVerified: true,
    },
    {
        email: 'methy@gmail.com',
        password: '$2b$10$qka2M9QyvYM/8d.LH3BCqeSeTSsge1HHPoliEV6BW.6vNHS5w2SLa',
        emailVerified: true,
    },
    {
        email: 'rithea@gmail.com',
        password: '$2b$10$qka2M9QyvYM/8d.LH3BCqeSeTSsge1HHPoliEV6BW.6vNHS5w2SLa',
        emailVerified: true,
    },
    {
        email: 'deny@gmail.com',
        password: '$2b$10$qka2M9QyvYM/8d.LH3BCqeSeTSsge1HHPoliEV6BW.6vNHS5w2SLa',
        emailVerified: true,
    },
    {
        email: 'seyha@gmail.com',
        password: '$2b$10$qka2M9QyvYM/8d.LH3BCqeSeTSsge1HHPoliEV6BW.6vNHS5w2SLa',
        emailVerified: true,
    },
    {
        email: 'bunleap@gmail.com',
        password: '$2b$10$qka2M9QyvYM/8d.LH3BCqeSeTSsge1HHPoliEV6BW.6vNHS5w2SLa',
        emailVerified: true,
    },
]

const enrollments = [
    {
        userId: 1,
        courseId: 3,
    },
    {
        userId: 1,
        courseId: 4,
    },
    {
        userId: 4,
        courseId: 3,
    },
    {
        userId: 4,
        courseId: 4,
    },
    {
        userId: 4,
        courseId: 5,
    },
]

const carts = [
    {
        userId: 1,
        courseId: 1,
    },
    {
        userId: 1,
        courseId: 2,
    },
]

export async function main() {
    for (const program of programs) await prisma.program.create({ data: program })
    for (const course of courses) await prisma.course.create({ data: course })
    for (const courseContent of courseContents) await prisma.courseContent.create({ data: courseContent })
    for (const lesson of lessons) await prisma.lesson.create({ data: lesson })
    for (const lessonContent of lessonContents) await prisma.lessonContent.create({ data: lessonContent })
    for (const media of homeMedia) await prisma.assets.create({ data: media })
    for (const slide of slideShows) await prisma.slideShows.create({ data: slide})
    for (const benefit of courseBenefits) await prisma.siteContents.create({ data: benefit })
    for (const feedback of feedbacks) await prisma.siteContents.create({ data: feedback })
    for (const benefit of certificateBenefits) await prisma.siteContents.create({ data: benefit })
    for (const partner of partners) await prisma.partner.create({ data: partner })
    for (const review of reviews) await prisma.reviews.create({ data: review })
    for (const user of users) await prisma.user.create({ data: user })
    for (const enrollment of enrollments) await prisma.enrollment.create({ data: enrollment })
    for (const cart of carts) await prisma.cart.create({ data: cart })
    for (const quiz of quizzes) await prisma.quiz.create({ data: quiz })
    for (const answer of answers) await prisma.answer.create({ data: answer })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })