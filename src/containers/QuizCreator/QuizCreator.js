import React, { Component } from "react"
import classes from "./QuizCreator.module.css"
import Button from "../../components/ActiveQuiz/UI/Button/Button";
export default class QuizCreator extends Component {

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    creatQuizHandler = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitHandler}>

                        <input type='text'></input>
                        <hr/>
                        <input type='text'></input>
                        <input type='text'></input>
                        <input type='text'></input>
                        <input type='text'></input>


                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >Добавить вопрос</Button>

                        <Button
                            type='success'
                            onClick={this.creatQuizHandler}
                        >Создать тест</Button>

                    </form>
                </div>

            </div>
        )
    }
}