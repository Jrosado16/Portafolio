

const btnMenu = document.querySelector('.btn-active')
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () =>{
    console.log('menu')
    menu.classList.toggle('active');
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
})

const listSkills = [
    {label: 'JavaScript',   value: 80},
    {label: 'HTML',         value: 85},
    {label: 'CSS' ,         value: 85},
    {label: 'SASS' ,         value: 85},
    {label: 'ReactJs',      value: 80},
    {label: 'VueJs',        value: 80},
    {label: 'Node',         value: 80},
    {label: 'TypeScript',   value: 80},
    {label: 'NestJs',       value: 80},
    {label: 'MongoDB',      value: 70},
    {label: 'Flutter',      value: 80},
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