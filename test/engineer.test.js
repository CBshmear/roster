const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

describe('Engineer', () => {
    it('should instantiate a new instance of engineer', () =>{
        // arrange
       
        let expectedEng = {
            newName: 'connor',
            id: '14',
            email: 'connorbeer13@gmail.com',
            github: 'CBshmear'
        };
        // act
        const newEng = new Engineer('connor', '14', 'connorbeer13@gmail.com', 'CBshmear');
        // assert
        expect(newEng).toEqual(expectedEng);
    })
})