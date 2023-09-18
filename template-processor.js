function TemplateProcessor(template) {
    this.template = template;
  }

  TemplateProcessor.prototype.fillIn = function (dictionary) {
    var space = /{{(.*?)}}/g;

    var filledTemplate = this.template.replace(space, function (same, property) {
      return dictionary[property] !== undefined ? dictionary[property] : '';
    });

    return filledTemplate;
  };





var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = {month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);

assert(str === 'My favorite month is July but not the day 1 or the year 2016');

var dictionary2 = {day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary2);

assert(str === 'My favorite month is  but not the day 1 or the year 2016');