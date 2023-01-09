const Manager = require('../lib/manager');

describe('intern', () => {
    it('should instantiate a new instance of intern subclass', () => {
         // arrange
        let expected = {
            newName: 'connor',
            id: '10',
            email: 'connorbeer13@gmail.com',
            officeNumber: '2'
        }
         // act
        const newMan = new Manager('connor', '10', 'connorbeer13@gmail.com', '2');
         // assert
        expect(newMan).toEqual(expected);

    })
})