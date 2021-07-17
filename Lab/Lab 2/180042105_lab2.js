var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var setText = /** @class */ (function () {
    function setText(inputText) {
        this.inputText = inputText;
    }
    setText.prototype.getText = function () {
        return this.inputText;
    };
    return setText;
}());
var Decorator = /** @class */ (function () {
    function Decorator(inputText) {
        this.inputText = inputText;
    }
    Decorator.prototype.getText = function () {
        return this.inputText.getText();
    };
    return Decorator;
}());
var italicDecorator = /** @class */ (function (_super) {
    __extends(italicDecorator, _super);
    function italicDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //overriding getText method
    italicDecorator.prototype.getText = function () {
        return _super.prototype.getText.call(this).italics();
    };
    return italicDecorator;
}(Decorator));
var boldDecorator = /** @class */ (function (_super) {
    __extends(boldDecorator, _super);
    function boldDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //overriding getText method
    boldDecorator.prototype.getText = function () {
        return _super.prototype.getText.call(this).bold();
    };
    return boldDecorator;
}(Decorator));
var strikeDecorator = /** @class */ (function (_super) {
    __extends(strikeDecorator, _super);
    function strikeDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //overriding getText method
    strikeDecorator.prototype.getText = function () {
        return _super.prototype.getText.call(this).strike();
    };
    return strikeDecorator;
}(Decorator));
function displayText(inputText) {
    console.log("" + inputText.getText());
}
var text1 = new setText("Italic");
var i1 = new italicDecorator(text1);
displayText(i1);
var text2 = new setText("Bold");
var b1 = new boldDecorator(text2);
displayText(b1);
var text3 = new setText("Strike");
var s1 = new strikeDecorator(text3);
displayText(s1);
var text4 = new setText("Design Pattern");
var italic = new italicDecorator(text4);
var bold_italic = new boldDecorator(italic);
var strike_bold_italic = new strikeDecorator(bold_italic);
displayText(strike_bold_italic);
