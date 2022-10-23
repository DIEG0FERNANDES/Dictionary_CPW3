export default class Word {
    word: string
    meanings: string
    definitions: string
  
    constructor(obj: any) {
      const {
        word,
        meanings,
        definitions,
      } = obj
  
      this.word = word
      this.meanings = meanings
      this.definitions = definitions
    }
}