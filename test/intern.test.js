const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should instantiate a new instance of subclass intern", () => {
    // arrange
    let expectedIntern = {
      newName: "connor",
      id: "12",
      email: "connorbeer13@gmail.com",
      school: "harvard",
      role: "Intern",
    };
    // act
    const newInt = new Intern(
      "connor",
      "12",
      "connorbeer13@gmail.com",
      "harvard"
    );
    // assert
    expect(newInt).toEqual(expectedIntern);
  });
});
