import { ProxyState } from "../AppState.js";
import { questionService} from "../Services/QuestionService.js"

function _draw(){
  let questions = ProxyState.questions
  let template='<ol>'
  questions.forEach(q=>(template += q.Template))
  document.getElementById("show").innerHTML= template +'</ol>'
}

export default class QuestionController{
  constructor(){
    ProxyState.on("questions",_draw)
    _draw()
    questionService.getQuestion()
  }
}