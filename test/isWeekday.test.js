describe('isWeekday function', function() {
    it("should return false for 'Saturday'", function() {
        chai.assert.equal(isWeekday('Saturday'), false);
    });

    it("should return false for 'Sunday'", function() {
        chai.assert.equal(isWeekday('Sunday'), false);
    });

    it("should return true for 'Monday'", function() {
        chai.assert.equal(isWeekday('Monday'), true);
    });

    it("should return true for 'Tuesday'", function() {
        chai.assert.equal(isWeekday('Tuesday'), true);
    });

    it("should return true for 'Wednesday'", function() {
        chai.assert.equal(isWeekday('Wednesday'), true);
    });

    it("should return true for 'Thursday'", function() {
        chai.assert.equal(isWeekday('Thursday'), true);
    });

    it("should return true for 'Friday'", function() {
        chai.assert.equal(isWeekday('Friday'), true);
    });
});