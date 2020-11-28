import React, { Component } from 'react'
import QuestionPallette from './QuestionPallette'

// {
    //     questionID: int,
    //     questionLabel: string,
    //     optionA: string,
    //     optionB: string,
    //     optionC: string,
    //     optionD: string,
    //     correctOption: enum[A,B,C,D]
    // }

let questions = [{
    questionID: 1,
    questionLabel: 'React is' ,
    optionA: 'fronend',
    optionB: 'backend',
    optionC: 'tool',
    optionD: 'framework',
    correctOption: 'optionA'
},{
    questionID: 2,
    questionLabel: 'Angular is' ,
    optionA: 'fronend',
    optionB: 'backend',
    optionC: 'tool',
    optionD: 'framework',
    correctOption: 'optionA'
},{
    questionID: 3,
    questionLabel: 'vue is' ,
    optionA: 'fronend',
    optionB: 'backend',
    optionC: 'tool',
    optionD: 'framework',
    correctOption: 'optionA'
},{
    questionID: 4,
    questionLabel: 'jupyter notebook is' ,
    optionA: 'fronend',
    optionB: 'backend',
    optionC: 'tool',
    optionD: 'framework',
    correctOption: 'optionC'
},{
    questionID: 5,
    questionLabel: 'vsCode is' ,
    optionA: 'fronend',
    optionB: 'backend',
    optionC: 'tool',
    optionD: 'framework',
    correctOption: 'optionC'
}]

export default class Question extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             question: questions,
             answer: '',
             validatedAnswer: ''
        }
    }
    handleClick = () => {
        this.setState(prevState => ({
            count: this.state.count+1
        }))
    }

    handleChange = (e) => {
        if(e.target.name === questions[this.state.count].correctOption){
            this.setState({
                answer: 'Correct Answer'
            })
        }
        else{

            this.setState({
                answer: 'wrong Answer'
            })
        }

        
        
    }

    validate = () => {
        this.setState({
            validatedAnswer: this.state.answer
        })
    }
    render() {
        // const {correctOption} = this.state
        console.log(questions[0])

        return (
            <div>
                <QuestionPallette questions={questions[this.state.count]} handleChange={this.handleChange}/>
                <button onClick={this.handleClick}>next</button>
                <button onClick={this.validate}>validate</button>
                {this.state.answer ? this.state.validatedAnswer : ''}
            </div>
        )
    }
}
