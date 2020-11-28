import React from 'react'
import './QuestionPallete.css'

export default function QuestionPallette(props) {



    return (
        <div>
            <h1>question {props.questions.questionID}</h1>
            <h4>{props.questions.questionLabel}</h4>
            
                <input type='radio' name='optionA' onChange={props.handleChange} />
                <label>{props.questions.optionA}</label>
                <input type='radio' name='optionB' onChange={props.handleChange} />
                <label>{props.questions.optionB}</label>
                <input type='radio' name='optionC' onChange={props.handleChange} />
                <label>{props.questions.optionC}</label>
                <input type='radio' name='optionD' onChange={props.handleChange} />
                <label>{props.questions.optionD}</label>


        </div>

    )
}
