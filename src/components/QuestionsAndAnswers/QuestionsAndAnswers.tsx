import React from "react";
import d from './QuestionsAndAnswers.module.css';


const FAQ = [
    {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
        id: 2,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
        id: 3,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
        id: 4,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    }
]

const QuestionsAndAnswers:React.FC = () => {

    return (
        <div className={d.sectionFAQ}>
            <h2 className="titleText">Questions and answers</h2>
            <div className={d.FAQ}>
                {FAQ.map(el => <div key={el.id}>
                        <button className={d.btn}>+</button>
                        <p>{el.question}</p>
                        <p style={{display: 'none'}}>{el.answer} </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuestionsAndAnswers;