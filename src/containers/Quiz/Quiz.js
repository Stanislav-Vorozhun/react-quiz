import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                qestion: 'Какого цвета небо?',
                id: 1,
                rightAnswerId: 2,
                answers: [
                    { text: 'Черный', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Красный', id: 3 },
                    { text: 'Зеленый', id: 4 },
                ]
            },

            {
                qestion: 'Какое у вас сейчас настроение?',
                id: 2,
                rightAnswerId: 1,
                answers: [
                    { text: 'Солнечное', id: 1 },
                    { text: 'Великолепное', id: 2 },
                    { text: 'Отличное', id: 3 },
                    { text: 'Замечательное', id: 4 },
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer ID: ', answerId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Выберите ваш ответ:</h1>

                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        qestion={this.state.quiz[this.state.activeQuestion].qestion}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz