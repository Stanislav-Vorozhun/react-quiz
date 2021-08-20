import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null,
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
            },

            {
                qestion: 'Сколько приложение было в App store на момент запуска?',
                id: 3,
                rightAnswerId: 2,
                answers: [
                    { text: '500', id: 1 },
                    { text: '666', id: 2 },
                    { text: '1551', id: 3 },
                    { text: '1000', id: 4 },
                ]
            },

            {
                qestion: 'Сколько Apple платит в год за рекламу в фильмах и сериалах?',
                id: 4,
                rightAnswerId: 4,
                answers: [
                    { text: '500 тыс. евро', id: 1 },
                    { text: '1 млн долларов', id: 2 },
                    { text: '2 млн евро', id: 3 },
                    { text: '0', id: 4 },
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        // фикс бага с двоим кликом по правильному ответу (пропуск вопроса)
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: { [answerId]: 'success' }
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)



        } else {

            this.setState({
                answerState: { [answerId]: 'error' }
            })

        }


    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Выберите ваш ответ:</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz

                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                qestion={this.state.quiz[this.state.activeQuestion].qestion}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz