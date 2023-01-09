const Employee = require('../lib/employee');

describe('Employee', () => {
    it('Should instantiate a new employee', () => {
        // arrange
        let expectedEm = {
            newName: 'connor',
            id: '15',
            email: 'connorbeer13@gmail.com'
        };
        // act
        let newEmp = new Employee('connor', '15', 'connorbeer13@gmail.com');

        // assert
        expect(newEmp).toEqual(expectedEm);
    })
})