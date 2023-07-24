import Navbar from './Navbar'
import React from "react";

const Faqs = () => {
    const faqs = [
        {
            question: "1. Who can enroll in your swimming lessons?",
            answer: "We welcome participants of all ages, from kids as young as 6 years old to adults as 60 years old. Our swimming lessons cater to beginners, intermediate swimmers, and even those with more advanced skills."
        },
        {
            question: "2. Are your instructors certified and experienced?",
            answer: "Absolutely! Our instructors are certified and possess extensive experience in teaching swimming to individuals of all age groups. They are skilled in providing personalized instruction, ensuring a safe and effective learning environment."
        },
        {
            question: "4. How long is each swimming lesson?",
            answer: "The duration of each swimming lesson may vary depending on the age group and skill level. Typically, kids' lessons are around 30 minutes, while teens and adult sessions can range from 45 minutes to an hour."
        },
        {
            question: "6. How often should I attend swimming lessons?",
            answer: "The frequency of attendance depends on your individual goals and availability. For optimal progress, we suggest attending lessons at least twice a week. However, we offer flexible schedules to accommodate different needs."
        },
        {
            question: "8. What safety measures do you have in place?",
            answer: "Safety is our top priority. Our pools are equipped with lifeguards and first aid facilities. Additionally, all participants are required to follow safety rules and guidelines to ensure a secure swimming environment."
        },
        {
            question: "9.Need to contact us? Need help?",
            answer: "You can call us at 6134005753, Email us at swim.services@gmail.com or submit a Contact us Request"
        },
    ]
    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: "column", flexWrap: 'wrap', gap: '24px' }}>
                {faqs.map(singleFaq => (
                    <div>
                        <h3 style={{ color: '#4070f4' }}>{singleFaq.question}</h3>
                        <p>{singleFaq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs