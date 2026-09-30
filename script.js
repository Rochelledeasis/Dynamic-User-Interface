let students = [
    {id: 1, name: 'Cook Pu', program: 'Bachelor of Science Major in IT'},
    {id: 2, name: 'Pica Chu', program: 'Bachelor of Science Major in TM'},
    {id: 3, name: 'Xiao Long Bao', program: 'Bachelor of Science Major in HM'},
    {id: 4, name: 'Pick Nick', program: 'Bachelor of Science Major in BA'},
    {id: 5, name: 'Fuchi Ko', program: 'Bachelor of Science Major in IT'},
    {id: 6, name: 'Sinun Dowht', program: 'Bachelor of Science Major in Tulog'}
];

const createListItem = (student) =>{
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    //add value
    h2.innerText = student.name;
    p.innerText = student.program;
    button.innerText = 'Delete';

    button.addEventListener('click', () =>{
        const newStudents = students.filter((s) => s.id !== student.id);
        students = newStudents;
        displayList();
    });

    //add class
    article.classList.add('list-item');
 
    //insert
    article.append(h2);
    article.append(p);
    article.append(button);

    return article;

}

const list = document.querySelector('#studentList');


const displayList = () =>{
    list.replaceChildren();
    const studentList = students.map((s) => createListItem(s)); //map function
    studentList.forEach((s) => list.append(s));

}

displayList();


const form = document.querySelector('#studentform');
const nameField = document.querySelector('#name');
const programField = document.querySelector('#program');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = nameField.value;
    const program = programField.value;
    const newStudent = {
        id: students.length + 1,
        name,
        program
    }
    students.push(newStudent);
    nameField.value = '';
    programField.value = '';
    displayList();

});
