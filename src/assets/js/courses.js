
const listCourses = [
    {
        tema: 'Todos',
        courses: []
    },
    {
        tema: 'React', 
        courses: [
            {label: 'React',    value: './src/assets/img/reactjs.jpeg'},

        ]
    },
    {
        tema: 'Js', 
        courses: [
            {label: 'Es6',      value: './src/assets/img/es6.jpeg'},
        ]
    },
    {
        tema: 'Ingles', 
        courses: [
            {label: 'Beginners',        value: './src/assets/img/ibeginners.jpeg'},
            {label: 'English Online',   value: './src/assets/img/iestrategias.jpeg'},
            {label: 'Fundamentals',     value: './src/assets/img/ifundamentos.jpeg'},
            {label: 'Grammar',          value: './src/assets/img/igrammar.jpeg'},
            {label: 'For Beginners',    value: './src/assets/img/italler.jpeg'},

        ]
    },
    {
        tema: 'Otros',
        courses: [
            {label: 'GitHub',           value: './src/assets/img/github.jpeg'},
            {label: 'Portafolio y CV',  value: './src/assets/img/portafolio.jpeg'}
        ]
    }
]

const CourseContainer = document.querySelector('.carousel');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

// CourseContainer.addEventListener('scroll', (e) => {
//     console.log(e)
// })

btnRight.addEventListener('click', () => {
    CourseContainer.scrollLeft += 300;
}) 
btnLeft.addEventListener('click', () => {
    CourseContainer.scrollLeft -= 300; 
}) 

const tema = document.querySelector('.tema');
showTema();


function showTema(){

    listCourses.map(courses => {
        tema.innerHTML += `
            <button class="btn btn-course">${courses.tema}</button>
        `
    })

}

function showCourses(cor){
    let newCourse = [];
    cor[0].tema !== 'Todos' ? newCourse = cor :  newCourse = listCourses;
    CourseContainer.innerHTML = '';
    newCourse.map(courses => {
        courses.courses.map(course => {
            CourseContainer.innerHTML +=  `    
            <div class="course">
                <p>${course.label}</p>
                <img class="course-img" src=${course.value} alt="">
            </div>
            `
        })
    })
}

showCourses(listCourses);

const btnCourse = document.querySelectorAll('.btn-course');

tema.addEventListener('click', (e) => {
    if(e.path[0].classList[0] !== 'tema'){
        let value = e.target.innerHTML;
        addClass(e);
        let myCourses = listCourses;
        let course = myCourses.filter(filterCourse);
        showCourses(course);
        function filterCourse(course){
            if(course.tema) return course.tema === value;
            return course;
        }
    }
})

addClass(null)

function addClass(button){
    Array.prototype.forEach.call(btnCourse, (t,i) => {
        if(button === null){
            btnCourse[0].classList.add('select')
        }else{
            btnCourse[i].classList.remove('select')
            if(t.innerHTML === button.target.innerHTML){
                btnCourse[i].classList.add('select')
            }
            
        }
    })
}