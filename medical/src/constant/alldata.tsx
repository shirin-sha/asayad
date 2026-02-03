import Link from "next/link"
import { IMAGES, SVGICONS } from "./theme"
import Image, { StaticImageData } from "next/image"

// layout 
// header 
export const headerinfo = [
    { image: IMAGES.svgicon1, title: 'Contatc Us', paragraph: <Link href="tel:+96522211900" className="text-secondary">+965 22211900</Link>, },
    { image: IMAGES.svgicon2, title: 'Email Supports', paragraph: <Link href="mailto:info@amckw.com" className="text-secondary">info@amckw.com</Link>, },
    { image: IMAGES.clocksvg, title: 'Opening Hours', paragraph: 'Daily: 8:00 AM – 9:00 PM', },
]



export type HeaderContentItem = {
  title: string;
  to: string;
  image?: string | StaticImageData;
};

export type HeaderItem = {
  title: string;
  to?: string;
  classChange?: string;
  content?: HeaderContentItem[];
};


export const headerdata : HeaderItem[] = [
    { title: "Home", to: "/", },
    {
        title: "About Us",
        classChange: "sub-menu-down",
        content: [
            { title: "Who We Are", to: "/about-us/who-we-are" },
            { title: "Chairman's Message", to: "/about-us/chairman-message" },
            { title: "Our Mission", to: "/about-us/our-mission" },
            { title: "Our Vision", to: "/about-us/our-vision" },
            { title: "Management Team", to: "/about-us/management-team" },
        ],
    },
    {
        title: "Medical Services",
        classChange: "sub-menu-down",
        content: [
            { title: "Radiology & Imaging", to: "/medical-services/radiology-imaging" },
            { title: "IVF Unit", to: "/medical-services/ivf-unit" },
            { title: "Physiotherapy Unit", to: "/medical-services/physiotherapy-unit" },
            { title: "Dental", to: "/medical-services/dental" },
            { title: "OB/ Gynecology & IVF", to: "/medical-services/ob-gynecology-ivf" },
            { title: "All Medical Services", to: "/medical-services" },
        ],
    },
    { title: "Media", to: "/media", },
    { title: "Hospitality", to: "/hospitality", },
    { title: "Patients & Visitors", to: "/patients-visitors", },
    { title: "Insurance", to: "/insurance", },
    { title: "Blog", to: "/blog", },
    { title: "Careers", to: "/careers", },
    { title: "Contact", to: "/contact-us", },
]
// footer 
export const footerdata1 = [
    { delay: '0.4s', icon: <i className="feather icon-phone" />, title: 'Call Us    ', paragraph: <Link href="tel:+96522211900" className="text-body">+965 22211900</Link>, },
    { delay: '0.6s', icon: <i className="feather icon-mail" />, title: 'Send us a Mail', paragraph: <Link href="mailto:info@amckw.com" className="text-body">info@amckw.com</Link>, },
    { delay: '0.8s', icon: <i className="feather icon-clock" />, title: 'Opening Time', paragraph: "Daily: 8:00 AM – 9:00 PM", },
]
export const footerdata2 = [
    {
        title: 'Our Services', span1: 'Radiology & Imaging', span2: 'Laboratory Services', span3: "Women's Health & IVF", span4: 'Dental Care', span5: '',
        link1: '/medical-services/radiology-imaging', link2: '/medical-services', link3: '/medical-services/ob-gynecology-ivf', link4: '/medical-services/dental', link5: '#', delay: '0.4s',
    },
    {
        title: 'Our Services', span1: 'Internal Medicine', span2: 'General Surgery', span3: 'Physiotherapy & Rehabilitation', span4: 'ENT (Ear, Nose & Throat)', span5: '',
        link1: '/medical-services', link2: '/medical-services', link3: '/medical-services/physiotherapy-unit', link4: '/medical-services', link5: '#', delay: '0.5s',
    },
    {
        title: 'Useful Links', span1: 'Privacy Policy', span2: 'Terms & Conditions', span3: 'Insurance', span4: 'Careers', span5: 'Sitemap',
        link1: '#', link2: '#', link3: '/insurance', link4: '/careers', link5: '#', delay: '0.6s',
    },
    {
        title: 'Quick Links', span1: 'About Us', span2: 'Our Services', span3: 'Our Doctors', span4: 'Appointments', span5: 'Contact Us',
        link1: '/about-us', link2: '/services', link3: '/team', link4: '/appointment', link5: '/contact-us', delay: '0.8s',
    },
]
// pages 
// testimonial 
export const testidata = [
    {treat:"Optimal Treatment", delay: '0.2s', title: 'Kenneth Fong', position: 'Patient', image: IMAGES.testimonial2 },
    {treat:"Best Treatment", delay: '0.4s', title: 'Danial Frankie', position: 'Patient', image: IMAGES.testimonial3 },
    {treat:"Recommended Care", delay: '0.6s', title: 'Rihana Roy', position: 'Patient', image: IMAGES.testimonial4 },
    {treat:"First-Class Treatment", delay: '0.8s', title: 'Kenneth Fong', position: 'Patient', image: IMAGES.testimonial5 },
]
export const testiswipeerdata2 = [
    { image: IMAGES.testimonialsmall1 , name:"Danial Frankie"},
    { image: IMAGES.testimonialsmall2 , name:"Esteban Serrano"},
    { image: IMAGES.testimonialsmall3 , name:"Rihana Roy"},
]


export interface BlogItem {
  image: any;
  dealy: string;
  title: string;
}

// bloggrid 
export const blogdata : BlogItem[]= [
    { image: IMAGES.blogoverlaylarge1, dealy: '0.1s', title: 'The Art of Managing Business and Patient Care.', }, 
    { image: IMAGES.blogoverlaylarge2, dealy: '0.2s', title: 'Successful Transitional Rehab: More Than Just Exercise', },
    { image: IMAGES.blogoverlaylarge3, dealy: '0.3s', title: 'What is Respite Care and Why is it Important?', },
    { image: IMAGES.blogoverlaylarge4, dealy: '0.4s', title: 'The Art of Managing Business and Patient Care', },
    { image: IMAGES.blogoverlaylarge5, dealy: '0.5s', title: 'Three Years Post Injury: Persistence and Progress', },
    { image: IMAGES.blogoverlaylarge6, dealy: '0.6s', title: 'How Transitional Rehabilitation Aids in Stroke Recovery', },
]
export const blogdata2 = [
    { image: IMAGES.bloggrid1, dealy: '0.1s', title: 'The Art of Managing Business and Patient Care.', }, 
    { image: IMAGES.bloggrid2, dealy: '0.2s', title: 'Successful Transitional Rehab: More Than Just Exercise', },
    { image: IMAGES.bloggrid3, dealy: '0.3s', title: 'What is Respite Care and Why is it Important?', },
    { image: IMAGES.bloggrid4, dealy: '0.4s', title: 'The Art of Managing Business and Patient Care', },
    { image: IMAGES.bloggrid5, dealy: '0.5s', title: 'Three Years Post Injury: Persistence and Progress', },
    { image: IMAGES.bloggrid6, dealy: '0.6s', title: 'How Transitional Rehabilitation Aids in Stroke Recovery', },
]
// servicedetails 
export const servicedetails = [
    { columnstand: 'active', title: 'Angioplasty', },
    { title: 'Cardiology', },
    { title: 'Dental', },
    { title: 'Endocrinology', },
    { title: 'Eye Care', },
    { title: 'Neurology', },
    { title: 'Orthopedics', },
    { title: 'RMI', },
]
// teamdetail
export const empolydata = [
    { id: 1, delay: '0.2s', image: IMAGES.team1, title: "Prof. Ahmad Nabil", position: "Consultant of Gastroenterology & G.I. Endoscopy " },
    { id: 2, delay: '0.4s', image: IMAGES.team2, title: "Prof. Abdelghany Eissa", position: "Consultant of General Surgery" },
    { id: 3, delay: '0.6s', image: IMAGES.team3, title: "Mohamed Abdel Aal", position: "Consultant and Head of Plastic Surgery Department" },
    { id: 4, delay: '0.8s', image: IMAGES.team4, title: "Dr. Tarek Hamza", position: "	E.N.T" },
    { id: 5, delay: '1.0s', image: IMAGES.team5, title: "Dr. Muhammad Mustafa", position: "General Surgery Registrar" },
    { id: 6, delay: '1.2s', image: IMAGES.team6, title: "Dr. Mohamed Hassan", position: "Physiotherapist & Rehabilitation Specialist" },
    { id: 7, delay: '1.4s', image: IMAGES.team7, title: "Dr. Mohamed Abdel Aziz", position: "Registrar Anesthesiologist" },
    { id: 8, delay: '1.6s', image: IMAGES.team8, title: "Dr. Kamilia Salaheldin", position: "Consultant Anesthesiologist" },
    { id: 9, delay: '1.8s', image: IMAGES.team9, title: "Dr. Hossam Haroun", position: "MD Urology & Andrology" },
    { id: 10, delay: '2.0s', image: IMAGES.team10, title: "Dr. Dina Ibrahim", position: "Lab Doctor" },
    { id: 11, delay: '2.2s', image: IMAGES.team11, title: "Dr. Aya Ayman", position: "General physician" },
    { id: 12, delay: '2.4s', image: IMAGES.team12, title: "Dr. Amr Asayad", position: "Consultant Ob/Gyn& IVF" },
    { id: 13, delay: '2.6s', image: IMAGES.team13, title: "Dr. Alaa Yousef Qashaamy", position: "General Practitioner Dentist" },
    { id: 14, delay: '2.8s', image: IMAGES.team14, title: "Dr. Adel Al-malah", position: "Radiology & Imaging Consultant" },
    { id: 15, delay: '3.0s', image: IMAGES.team15, title: "Dr. Abeer Abdulmaqsood", position: "Ob/ Gynecology & IVF" },
    { id: 16, delay: '3.2s', image: IMAGES.team16, title: "Dr. Abdel Rashid Al-Kandari", position: "Consultant ENT, Plastic & Reconstructive Surgery Specialist" },
    { id: 17, delay: '3.4s', image: IMAGES.team17, title: "Dr Shereen Marei", position: " Doctor of Pediatrics and Neonatology" },
]
// component 
// alllocation
export const locationdata = [
    { delay: '0.2s', title: 'United State', },
    { delay: '0.4s', title: 'Canada', },
];
// awards 
export const awardswiperdata = [
    { image: IMAGES.logo1, title: 'Quality Management Practices – 2024' },
    { image: IMAGES.logo2, title: 'Patient Safety & Clinical Protocols – 2023' },
    { image: IMAGES.logo3, title: 'Laboratory Quality Controls – 2022' },
    { image: IMAGES.logo1, title: 'Diagnostic Imaging Standards – 2021' },
    { image: IMAGES.logo2, title: 'Infection Control & Hygiene Standards – 2020' },
    { image: IMAGES.logo3, title: 'Staff Training & Service Excellence – 2019' },
]
export const awarddata = [
    { delay: '0.5s', title: '2024', },
    { delay: '0.6s', title: '2023', },
    { delay: '0.7s', title: '2022', },
    { delay: '0.8s', title: '2021', },
    { delay: '0.9s', title: '2020', },
    { delay: '1.0s', title: '2019', },
    { delay: '1.1s', title: 'View All', },
]
// clientswiper1 
export const clientswiperdata1 = [
    { image: IMAGES.logomiddle1, delay: '0.1s', },
    { image: IMAGES.logomiddle2, delay: '0.2s', },
    { image: IMAGES.logomiddle3, delay: '0.3s', },
    { image: IMAGES.logomiddle4, delay: '0.4s', },
    { image: IMAGES.logomiddle1, delay: '0.5s', },
    { image: IMAGES.logomiddle2, delay: '0.6s', },
    { image: IMAGES.logomiddle3, delay: '0.7s', },
    { image: IMAGES.logomiddle4, delay: '0.8s', },
]
// clientswiper2 
export const clientswiperdata2 = [
    { image: IMAGES.logosmall1, delay: '0.1s', },
    { image: IMAGES.logosmall2, delay: '0.2s', },
    { image: IMAGES.logosmall3, delay: '0.3s', },
    { image: IMAGES.logosmall4, delay: '0.4s', },
    { image: IMAGES.logosmall5, delay: '0.5s', },
    { image: IMAGES.logosmall6, delay: '0.6s', },
    { image: IMAGES.logosmall1, delay: '0.7s', },
    { image: IMAGES.logosmall2, delay: '0.8s', },
    { image: IMAGES.logosmall3, delay: '0.9s', },
    { image: IMAGES.logosmall4, delay: '1.0s', },
    { image: IMAGES.logosmall5, delay: '1.1s', },
    { image: IMAGES.logosmall6, delay: '1.2s', },
]
// counter 
export const countupdata = [
    { title: 'Specialty Services', delay: '0.4s', countup: 15, span: '+', },
    { title: 'Daily Working Hours', delay: '0.6s', timeText: '8 AM - 9 PM', },
    { title: 'Insurance Partners', delay: '0.8s', text: 'Multi', },
]
// frequently 
export const accordiondata = [
    { delay: '0.5s', key: "0", title: 'How do I book an appointment?', answer: 'You can request an appointment through our website form, or call +965 22211900. Our team will confirm your booking and guide you to the right department.' },
    { delay: '0.6s', key: "1", title: 'What medical services do you offer?', answer: 'AMC is a multi-specialty center offering key services such as Radiology & Imaging, Laboratory, Women\'s Health & IVF, Dental, Internal Medicine, General Surgery, Physiotherapy & Rehabilitation, ENT, Pediatrics, Urology, and more.' },
    { delay: '0.7s', key: "2", title: 'What are your working hours?', answer: 'We are open daily from 8:00 AM to 9:00 PM. For urgent cases, contact our team immediately.' },
    { delay: '0.8s', key: "3", title: 'Do you accept medical insurance?', answer: 'Yes. We work with multiple insurance providers. Please share your insurance details during booking so we can assist with approvals and coverage guidance.' },
    { delay: '0.9s', key: "4", title: 'Can I reschedule or cancel my appointment?', answer: 'Yes. Please inform us in advance by phone or email, and we will help you reschedule to a convenient time.' },
]
// howitwork 
export const howitworkdata = [
    { delay: '0.2s', icon: <i className="feather icon-clock" />, title: 'Book an Appointment', },
    { delay: '0.4s', icon: <i className="flaticon-list" />, title: 'Conduct Checkup', },
    { delay: '0.6s', icon: <i className="flaticon-stethoscope" />, title: 'Perform Treatment', },
    { delay: '0.8s', icon: <i className="flaticon-hand-holding-usd" />, title: 'Prescription & Follow-Up', },
]
// inspirational 
export const inspirationaldata = [
    { columnstand: 'm-r25', delay: '0.2s', title: 'Mission', svg: SVGICONS.mission },
    { columnstand: 'm-l25', delay: '0.4s', title: 'Vision', svg: SVGICONS.vision },
    { columnstand: 'm-r25', delay: '0.6s', title: 'Values', svg: SVGICONS.values },
]
// mapwraper
export const mapdata = [
    { id: 1, delay: '0.2s', icon: <i className="feather icon-map-pin" />, title: "Address", para: <p>Asayad Medical Center, Salmiya – Block 6, Bahrain Street, Kuwait</p>, },
    { id: 2, delay: '0.4s', icon: <i className="feather icon-phone" />, title: "Call Us", para: <p><Link href="tel:+96522211900">+965 22211900</Link></p>, },
    { id: 3, delay: '0.6s', icon: <i className="feather icon-mail" />, title: "Send us a Mail", para: <p><Link href="mailto:info@amckw.com">info@amckw.com</Link></p>, },
    { id: 4, delay: '0.8s', icon: <i className="feather icon-clock" />, title: "Opening Time", para: <p>Daily: 8:00 AM – 9:00 PM</p>, },
]
// meetdr 
export const meetdrdata1 = [
    { title: 'Radiant Skin Dermatology', },
    { title: 'Laser Resurfacing', },
    { title: 'Flawless Dermatology', },
    { title: 'Refined Skin Dermatology', },
    { title: 'Luminous Dermatology', },
    { title: 'Anti Aging', },
]
export const meetdrdata2 = [
    { image: IMAGES.logo1 },
    { image: IMAGES.logo2 },
]
// pricing 
export const pricingdata1 = [
    { title: 'Cardiovascular Services', },
    { title: 'Weight Management', },
    { title: 'Dental Services', },
    { title: 'Women\'s Health', },
    { title: 'Emergency Medicine', },
    { title: 'Family Medicine', },
    { title: '24/7 customer support', },
    { title: 'Video Call Support', },
]
export const pricingdata2 = [
    {
        delay: '0.4s', title: <h2 className="pricingtable-bx">Free<small>/ Lifetime</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
    {
        delay: '0.6s', coloumnstand: 'active', title: <h2 className="pricingtable-bx">$25<small>/ Month</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
    {
        delay: '0.8s', title: <h2 className="pricingtable-bx">$40<small>/ Month</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
]
// raelpatient 
export const testiswipeerdata = [
    { image: IMAGES.testimonial1, name: "Faisal Darwish", title: "Trusted Care & Clear Guidance", description: "Everything was smooth—from registration to consultation. The doctor explained clearly, and I felt confident with the treatment plan." },
    { image: IMAGES.testimonial2, name: "Sara Alhajri", title: "Quick Appointment & Friendly Staff", description: "My appointment was confirmed quickly. The team was welcoming, organized, and guided me step-by-step." },
    { image: IMAGES.testimonial3, name: "Ahmed Khaled", title: "Professional Care & Clear Follow-Up", description: "The diagnosis was explained well and the follow-up instructions were clear. Very professional and caring experience." },
]
// servicebox
export const serviceboxdata = [    
    { id: 1, delay: '0.1s', title: 'Radiology & Imaging', description: 'Advanced diagnostic imaging to support accurate, timely treatment decisions.', svg1: SVGICONS.iconcell1, svg2: SVGICONS.iconbg1, },
    { id: 2, delay: '0.2s', title: 'Laboratory Services', description: 'Reliable medical tests with clear reporting for faster diagnosis and follow-up.', svg1: SVGICONS.iconcell2, svg2: SVGICONS.iconbg2, },
    { id: 3, delay: '0.3s', title: "Women's Health & IVF", description: "Complete women's care with fertility support, monitoring, and specialist consultations.", svg1: SVGICONS.iconcell3, svg2: SVGICONS.iconbg3, },
    { id: 4, delay: '0.4s', title: 'Dental Care', description: 'General and cosmetic dentistry—including restorative and preventive treatments.', svg1: SVGICONS.iconcell4, svg2: SVGICONS.iconbg4, },
    { id: 5, delay: '0.5s', title: 'Internal Medicine', description: 'Comprehensive care for diabetes, blood pressure, cholesterol, and chronic conditions.', svg1: SVGICONS.iconcell5, svg2: SVGICONS.iconbg5, },
    { id: 6, delay: '0.6s', title: 'General Surgery', description: 'Surgical consultations and day procedures with patient safety as priority.', svg1: SVGICONS.iconcell6, svg2: SVGICONS.iconbg6, },
    { id: 7, delay: '0.7s', title: 'Physiotherapy & Rehab', description: 'Recovery-focused therapy programs to improve mobility, strength, and comfort.', svg1: SVGICONS.iconcell7, svg2: SVGICONS.iconbg7, },
    { id: 8, delay: '0.8s', title: 'ENT / Ear, Nose & Throat', description: 'Diagnosis and treatment for ENT conditions with modern clinical support.', svg1: SVGICONS.iconcell8, svg2: SVGICONS.iconbg8, },
]
// sidebar 
export const tagdata = [
    { title: 'Acupressure', num: '(10)', },
    { title: 'Allgemein', num: '(5)', },
    { title: 'Blood', num: '(17)', },
    { title: 'Food', num: '(13)', },
    { title: 'Health', num: '(06)', },
    { title: 'Mental Health', num: '(17)', },
    { title: 'Therapy', num: '(13)', },
    { title: 'Walking', num: '(06)', },
]
export const sidebarpostdata = [
    { date:"10 June 2025", image: IMAGES.blogsmall1, title:"The Art of Managing Business and Patient Care"},
    { date:"13 June 2025", image: IMAGES.blogsmall2, title:"The New Face of Care Blending Empathy with Expertise"},
    { date:"17 June 2025", image: IMAGES.blogsmall3, title:"Here Care Expertise Elevating the Patient Experience"},
]
// whychoose 
export const whychoosedata = [
    { delay: '0.4s', title: 'Experienced Specialists', description: 'A multi-specialty team focused on safe, reliable care and better outcomes.', },
    { delay: '0.6s', title: 'Seamless Patient Journey', description: 'Easy appointments, clear guidance, and smooth follow-ups—without stress.', },
    { delay: '0.8s', title: 'Accurate Diagnosis', description: 'Modern imaging and lab services that support quick, informed treatment decisions.', },
    { delay: '1.0s', title: 'Patient-First Approach', description: 'Privacy, comfort, and respectful communication at every stage of your visit', },
]
// worldclass
export const worldclasslistdata = [
    { title: 'Multi-Specialty Clinics Under One Roof', },
    { title: 'Advanced Radiology & Diagnostic Imaging', },
    { title: 'Fully Equipped Laboratory Services', },
    { title: "Women's Health & IVF Support Services", },
    { title: 'Dental Care – General & Cosmetic Treatments', },
    { title: 'Day Procedures & Surgical Consultation Support', },
    { title: 'Physiotherapy & Rehabilitation Programs', },
    { title: 'Pharmacy Support & Patient Guidance', },
]

