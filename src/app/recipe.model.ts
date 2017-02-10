export class Recipe {
  name: string;
  ingredients: Array<string>;
  results: Array<string>;
  skills: Array<string>;
  origin: string;


  constructor(nameParameter: string, ingredientsParameter: Array<string>, resultsParameter: Array<string>, skillsParameter: Array<string>, originParameter: string){
    this.name = nameParameter;
    this.ingredients = ingredientsParameter;
    this.results = resultsParameter;
    this.skills = skillsParameter;
    this.origin = originParameter;
  }

}

