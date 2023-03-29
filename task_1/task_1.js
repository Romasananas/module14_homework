const parser = new DOMParser();

const XmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(XmlString, "text/xml");

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');


let result = {
  list: []
};

studentNode.forEach(student => {
  let name = student.querySelector('name');
  const firstName = name.querySelector('first').textContent;
  const secondName = name.querySelector('second').textContent;
  const age = student.querySelector('age').textContent;
  const prof = student.querySelector('prof').textContent;
  const lang = name.getAttribute('lang');

  name = `${firstName} ${secondName}`;

  result.list.push({name, age, prof, lang});
});

console.log(result.list);

