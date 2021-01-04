
export default class Question{
  constructor(data){
    this.question = data.question
    this.answer = data.answer
    this.category = data.category
  }

  get Template(){
    return`
    <p> Category: ${this.category}</p>
    <p> Question: ${this.question}</p>
    <p> Answer: ${this.answer}</p>
    `
  }
}