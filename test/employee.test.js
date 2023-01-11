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

    it('should return name when called', () => {
        // arrange
        // make new Employee
        let e = new Employee('a', '111', 'a@b.com')
        
        // act 
        // call getName

        // assert
        // make sure you got out what you put in
        expect(e.getName()).toBe('a')
    })
})