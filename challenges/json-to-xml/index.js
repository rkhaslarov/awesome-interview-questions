const people = [
    {
        name: 'John',
        age: 18,
    },
    {
        name: 'Marie',
        age: 18,
    },
    {
        name: 'Adam',
        age: 18,
    },
];

const result = ['<people>'];

for (let i = 0; i < people.length; i++) {
    result.push(`<person name="${people[i].name}" age="${people[i].age}" />`);
}

result.push('</people>');

console.log(result.join(''));