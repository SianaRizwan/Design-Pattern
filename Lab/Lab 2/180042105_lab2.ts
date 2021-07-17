interface inputString{
    getText():string
}


class setText implements inputString{
    inputText : string
    constructor(inputText: string) {
        this.inputText = inputText
    }
    getText(): string {
       return this.inputText
    }

}


class Decorator implements inputString{
    //wrapping using composition
    inputText: inputString;
    constructor(inputText:inputString){
        this.inputText = inputText
    }
    getText(): string {
       return this.inputText.getText()
    }
}

class italicDecorator extends Decorator{
   //overriding getText method
   getText(): string{
        return super.getText().italics()
    }
}

class boldDecorator extends Decorator{
      //overriding getText method
    getText(): string{
         return super.getText().bold()
     }
}
class strikeDecorator extends Decorator{
      //overriding getText method
    getText(): string{
        return super.getText().strike()
    }
}



function displayText(inputText:inputString){
   console.log(`${inputText.getText()}`)
}

let text1 = new setText("Italic")
let i1 = new italicDecorator(text1)
displayText(i1)


let text2 = new setText("Bold")
let b1 = new boldDecorator(text2)
displayText(b1)

let text3 = new setText("Strike")
let s1 = new strikeDecorator(text3)
displayText(s1)


let text4 = new setText("Design Pattern")
let italic = new italicDecorator(text4)
let bold_italic = new boldDecorator(italic)
let strike_bold_italic = new strikeDecorator(bold_italic)
displayText(strike_bold_italic)