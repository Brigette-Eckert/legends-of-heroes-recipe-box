export class Recipe {
  public isActive: boolean = false;
  constructor(
    public name: string,
    public ingredients: Array<string>,
    public results: Array<string>,
    public skills: Array<string>,
    public origin: string
  ){ }

}

