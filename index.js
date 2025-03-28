//============================ FLOATING NAV
const floatingNavs = document.querySelectorAll('.floatingNav a')
const removeActiveNavs = () => {
    floatingNavs.forEach(nav => {
        nav.classList.remove('active')
    })
}

floatingNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        removeActiveNavs();
        nav.classList.add('active')
    })
})


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//   	const scrollDown = window.scrollY

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.floatingNav a[href*=' + sectionId + ']')

// 		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active')
// 		}else{
// 			sectionsClass.classList.remove('active')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)

















//============================ RESUME
const resumeRight = document.querySelector('.resume__right')
const experienceContent = `<h4>Experience</h4>
                <p>Real-world experience in software development and administrative systems has sharpened my ability to build efficient and user-focused solutions.</p>
                <ul>
                <li>
                        <h6>Feburary 2025 - April 2025</h6>
                        <h5>Software Developer</h5>
                        <p>Ministry of Industry and Commerce</p>
                        <p class="job-description">Developed and maintained projects using C# and SQL Server, ensuring efficient functionality and data management.</p>
                      </li>

                    <li>
                        <h6>June 2023 - August 2024</h6>
                        <h5>Registry Assistant</h5>
                        <p>Bahrain Polytechnic</p> 
                        
                        <p class="job-description">Assisted in managing student records, responded to student inquiries, handled administrative tasks, and supported graduation processes.</p>
                    </li>
                    
                    
                </ul>`

const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = 'resume__right'
    experienceBtn.classList.add('primary')
    // remove classes from other buttons
    aboutBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    certificationsBtn.classList.remove('primary')
})

// set experience content as the default content resume right when the page loads
resumeRight.innerHTML = experienceContent;




const educationContent = `<h4>Education</h4>
                <p>My academic journey has equipped me with essential technical skills and a mindset for continuous learning and innovation.</p>
                <ul>
                    <li>
                    <h6>September 2020 - June 2025</h6>
                       <br> 
                       <h5>Bachelor of Information Communication Technology in Programming</h5>
                        <p>
                            Bahrain Polytechnic 
                        </p>
                    </li>
                    <li>
                        <h6>September 2014 - June 2017</h6>
                        <br> 
                        <h5>High School Diploma in Commercial</h5>
                        <p>
                            Almarifa Secondary Girls School
                        </p>
                    </li>
                    
                </ul>`
const educationBtn = document.querySelector('.education__btn')
educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.className = 'resume__right education'
    educationBtn.classList.add('primary')
    // remove classes from other buttons
    experienceBtn.classList.remove('primary')
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    certificationsBtn.classList.remove('primary')
})

const certificationsContent = `
<h4>Licenses & Certifications</h4>
<p>Here are some of the certifications that showcase my professional development:</p>
<ul>
    <li>
        <h6>Issued: March 2025</h6>
        <h5>Introduction to Data Science </h5>
        <p>Cisco</p>
    </li>
    <li>
        <h6>Issued: October 2024</h6>
        <h5>Galactic Problem Solver</h5>
        <p> NASA International Space Apps Challenge</p>
    </li>
    <li>
        <h6>Issued: May 2024</h6>
        <h5>Microsoft Certified: Power Platform Developer Associate</h5>
        <p>Microsoft</p>
    </li>
     <li>
        <h6>Issued: Feburary 2024</h6>
        <h5>Project Management</h5>
        <p>INJAZ Al-Arab/JA MENA</p>
    </li>
    <li>
        <h6>Issued: Feburary 2024</h6>
        <h5>Ethical Use of AI Applications in Learning</h5>
        <p>Bahrain Polytechnic</p>
    </li>
     <li>
        <h6>Issued: March 2023</h6>
        <h5>Artificial intelligence Foundation: Machine Learning (2018)</h5>
        <p>Linkedin</p>
    </li>

     <li>
        <h6>Issued: March 2023</h6>
        <h5>CompTIA A+ (220-1001) Cert Prep 1: The Basics</h5>
        <p>Linkedin</p>
    </li>
</ul>
`;

const certificationsBtn = document.querySelector('.certifications__btn');
certificationsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = certificationsContent;
    resumeRight.className = "resume__right certifications";
    certificationsBtn.classList.add('primary');
    // remove classes from other buttons
    experienceBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
    aboutBtn.classList.remove('primary');
});



const skillsContent = `
<h4>Skills</h4>
                <p>Skilled in both frontend and backend development, with experience across a variety of programming languages, frameworks, and databases.</p>
                <ul>
                    <li><img src="./assets/react.webp" alt="ReactJS logo"></li>
                    <li><img src="./assets/PHP.png" alt="PHP logo"></li>
                    <li><img src="./assets/c_Sharp.png" alt="C# logo"></li>
                    <li><img src="./assets/Java.png" alt="Java logo"></li>
                    <li><img src="./assets/MongoDB.png" alt="MongoDB logo"></li>
                    <li><img src="./assets/my_SQL.png" alt="My SQL logo"></li>
                    <li><img src="./assets/net.png" alt=".Net Core logo"></li>
                    <li><img src="./assets/firebase.png" alt="Firebase logo"></li>
                    <li><img src="./assets/sql_server.png" alt="SQL Server logo"></li>
                    <li><img src="./assets/JS.png" alt="JavaScript logo"></li>
                    <li><img src="./assets/HTML.png" alt="HTML logo"></li>
                    <li><img src="./assets/CSS.png" alt=".CSS logo"></li>
                </ul>`

const skillsBtn = document.querySelector('.skills__btn')
skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className = "resume__right skills"
    skillsBtn.classList.add('primary')
    // remove classes from other buttons
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
    aboutBtn.classList.remove('primary')
    certificationsBtn.classList.remove('primary')
})




const aboutContent = `
<h4>About me</h4>
<p>Passionate programmer with a solid foundation in software development and hands-on experience in data management and communication. I thrive in collaborative environments, enjoy problem-solving, and seek opportunities to grow while contributing meaningful solutions.</p>
<ul>
    <li>
        <h6>Name</h6>
        <h5>Shooq Janahi</h5>
    </li>
    <li>
        <h6>Experience</h6>
        <h5>7+ years</h5>
    </li>
    <li>
        <h6>Email</h6>
        <h5>Shooq.Janahi17@hotmail.com</h5>
    </li>
    <li>
        <h6>Nationality</h6>
        <h5>Bahraini</h5>
    </li>
    <li>
        <h6>Freelance & collabs</h6>
        <h5>Available</h5>
    </li>
    <li>
        <h6>Language</h6>
        <h5>Arabic & English</h5>
    </li>
    <li>
        <h6>Phone</h6>
        <h5>+973 32327445</h5>
    </li>
    <li>
        <h6>LinkedIn</h6>
        <h5><a href="https://www.linkedin.com/in/shooqjanahi" target="_blank">linkedin.com/in/shooqjanahi</a></h5>
    </li>
</ul>
`;



const aboutBtn = document.querySelector('.about__btn')
aboutBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = "resume__right about"
    aboutBtn.classList.add('primary')
    // remove classes from other buttons
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    certificationsBtn.classList.remove('primary')
})




















//============================ MIXITUP (projects section)
const containerEl = document.querySelector('.projects__container');
let mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

mixer.filter('*');


















//============================ SWIPER (testimonials section) 
const swiperEl = document.querySelector('.swiper-wrapper');
const slideCount = swiperEl.querySelectorAll('.swiper-slide').length;

if (slideCount === 1) {
    swiperEl.classList.add('centered-testimonial');
} else {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            600: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
}

















//============================ ACCORDION
const faqs = document.querySelectorAll('.faqs__item');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        const p = faq.querySelector('p');
        const icon = faq.querySelector('.faq__icon')
        if (p.classList.contains('show')) {
            p.classList.remove('show')
            icon.innerHTML = `<i class="uil uil-angle-down"></i>`
        } else {
            p.classList.add('show')
            icon.innerHTML = `<i class="uil uil-angle-up"></i>`
        }
    })
})














// =================================== THEME
const themeToggler = document.querySelector('.nav__theme-btn')
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    if (document.body.className == '') {
        themeToggler.innerHTML = `<i class="uil uil-moon"></i>`
        window.localStorage.setItem('portfolio-theme', '')
    } else {
        themeToggler.innerHTML = `<i class="uil uil-sun"></i>`
        window.localStorage.setItem('portfolio-theme', 'dark-theme-variables')
    }
})

// use theme from local storage on page load
const bodyClass = window.localStorage.getItem('portfolio-theme')
document.body.className = bodyClass
