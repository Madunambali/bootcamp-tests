describe('yearsAgo function', function() {
    it("should return the difference between current year and 1976", function() {
        var expected = new Date().getFullYear() - 1976;
        chai.assert.equal(yearsAgo(1976), expected);
    });

    it("should return the difference between current year and 2000", function() {
        var expected = new Date().getFullYear() - 2000;
        chai.assert.equal(yearsAgo(2000), expected);
    });
});