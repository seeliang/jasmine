describe("demo", function() {

  it("should be able do math", function() {
    function add(x,y) {
      return (x+y);
    }

    expect(add(1,2)).toEqual(3);

  });
});
