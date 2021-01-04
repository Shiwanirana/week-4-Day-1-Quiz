
export default class Question{
  constructor(data){
    this.question = data.question
    this.answer = data.answer
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
  }

  get Template(){
    return`
    <div><li><p> Category: ${this.category}</p>
    <p> Question: ${this.question}</p>
    <p> Answer: ${this.answer}</p></li>
    </div
    `
  }
}