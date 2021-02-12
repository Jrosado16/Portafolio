

const btnMenu = document.querySelector('.btn-active')
const menu = document.querySelector('.menu');
const bodyElement = document.getElementsByTagName('body')[0]

const li = document.querySelectorAll('li');

menu.addEventListener('click', () => {
    validateMenu()
})
function validateMenu(){
    menu.classList.toggle('active');
    bodyElement.classList.toggle('has-menu-open');
    if(btnMenu.classList.contains('fa-bars')){
        btnMenu.classList.remove('fa-bars')
        btnMenu.classList.add('fa-times')
        btnMenu.style.transform       = 'rotate(90deg)'; 
        btnMenu.style.transition = 'transform .7s ease'
    }else{
        btnMenu.classList.remove('fa-times')
        btnMenu.classList.add('fa-bars')
        btnMenu.style.transform  = 'rotate(0deg)'; 
        btnMenu.style.transition = 'transform .7s ease'
    
    }
}

btnMenu.addEventListener('click', (e) =>{
    validateMenu()
})

const listSkills = [
    {label: 'JavaScript',   value: 80},
    {label: 'HTML',         value: 85},
    {label: 'CSS' ,         value: 85},
    {label: 'SASS' ,        value: 80},
    {label: 'ReactJs',      value: 75},
    {label: 'VueJs',        value: 70},
    {label: 'Node',         value: 70},
    {label: 'TypeScript',   value: 70},
    {label: 'NestJs',       value: 65},
    {label: 'MongoDB',      value: 65},
    {label: 'Flutter',      value: 70},
]

const skillContainer = document.querySelector('.skill-description');

listSkills.map(sk => {
    skillContainer.innerHTML +=  `    
        <div class="skill">
            <div class="description">
                <p>${sk.label}</p>    
                <p>${sk.value}%</p>    
            </div>
            <div class="percentage">
                <div class="primary-color" style="width: ${sk.value}%;"></div>
            </div>
            
        </div>
    `
})