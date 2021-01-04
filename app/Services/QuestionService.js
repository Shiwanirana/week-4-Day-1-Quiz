import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { swapi } from "./AxiomService.js"

class QuestionService{
  async getQuestion(){
     let res = await swapi.get('')
     ProxyState.questions = res.data.results.map(q=> new Question(q))
  }
}
export const questionService = new QuestionService()