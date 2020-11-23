//1
function replaceCSSComments(str) {
  return str.replace(/\/\*.*?\*\/\s?/g, '');
  }
console.log(replaceCSSComments('/*Найдите и*/ удалите все комментарии /*CSS.*/'));  
console.log(replaceCSSComments('/*Найдите*/ /*и*/ уд/*CSS*/алите все комментарии /*CSS.*/')); 
console.log(replaceCSSComments('/*Найд*/ /*ите и*/ уда/*CSS*/лите все коммент/*CSS*/ арии /*CSS.*/'));

//2
function replaceHTMLComments(str) {
 return str.replace(/\<\!\-\-*.*?\-\-\>\s*/g, '').trim();
}
console.log(replaceHTMLComments('<!--Найдите и--> удалите <!--все--> комментарии HTML'));
console.log(replaceHTMLComments('<!--Найдите--> <!--и--> удалите <!--все--> комментарии HTML'));
console.log(replaceHTMLComments('удалите <!--все--> комментарии HTML')); 

//3
function validateFileType(str) {
return (/.+(\.jpg|\.jpeg|\.png)$/).test(str);
}
console.log(validateFileType('image.jpg'));
console.log(validateFileType('image.png')); 
console.log(validateFileType('image.jpeg'));
console.log(validateFileType('image.pngjpeg')); 

//4
function checkYear(str) {
return (/^(19\d\d|20\d\d|2100)$/).test(str);
}
console.log(checkYear(2200));
console.log(checkYear(1990)); 
console.log(checkYear(2100));
console.log(checkYear(2101));

//5
function checkEmail(str) {
return (/^[a-zA-z]+\W?[a-zA-z]+@[a-zA-z\.]+\.[a-z]{2,3}$/).test(str);
}
console.log(checkEmail('mymail@mail.ru'));
console.log(checkEmail('my.mail@mail.ua'));
console.log(checkEmail('my-mail@yahoo.com'));
console.log(checkEmail('mail@gmail-com'));

//6
function checkDomainUrl(str) {
return (/^(http:|https:)\/\/(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,5}?$/).test(str);
}
console.log(checkDomainUrl('http://site.ua'));
console.log(checkDomainUrl('https://my-site.com'));
console.log(checkDomainUrl('https://site.com.ua'));
console.log(checkDomainUrl('https://subdomain.site.com.ua'));
console.log(checkDomainUrl('https://site'));
console.log(checkDomainUrl('https://subdomain'));

//7
function createLinksFromDomains(str) {
var reg = new RegExp('(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}', 'g');
str.match(reg).forEach((item) => str = str.replace(item, `<a href="${item}" target="_blank">${item.replace(/^(http:|https:)\/\//gi, '')}</a>`));
return str;
}
console.log(createLinksFromDomains('http://site.ua 1 https://site.com 2'));




