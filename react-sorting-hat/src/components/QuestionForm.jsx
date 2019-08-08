import React from "react";
import { Formik, Form, Field, withFormik } from "formik";
import { Questions } from "../sortingQuestions";
import { Header } from "semantic-ui-react";

const QuestionForm = ({ values }) => {
  return (
    <div>
      <Header>Questions</Header>

      <Form>
        <div className="ul list" role="list">
          {Questions.map(question => (
            <div
              role="listitem"
              className="item"
              style={{ marginBottom: "15px" }}
              key={question.id}
            >
              <p>{question.questionText}</p>
              {question.answers.map(answer => (
                <div className="field" key={answer.id}>
                  <div className="ui radio checkbox">
                    <Field type="radio" name={question.id} value={answer.id} />
                    <label>{answer.answerText}</label>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

const FormikQuestionForm = withFormik({
  mapPropsToValues({}) {
    return {};
  },
  handleSubmit: values => {
    console.log(values);

    let points = [];

    for (let o in values) {
      points.push(parseInt(values[o]));
    }

    console.log(points);
  }
})(QuestionForm);

export default FormikQuestionForm;
