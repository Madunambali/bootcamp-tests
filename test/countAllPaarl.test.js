describe('countAllPaarl function', function() {
    it("should return an array with 2 Paarl registration numbers", function() {
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        var regNumbersForPaarl = allPaarl(regNumbers);
        chai.assert.equal(regNumbersForPaarl.length, 2, 'There are 2 Paarl reg numbers.');
    });

    it("should return 'CJ 678 543' as the first Paarl registration number", function() {
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        var regNumbersForPaarl = allPaarl(regNumbers);
        chai.assert.equal(regNumbersForPaarl[0], 'CJ 678 543');
    });

    it("should return 'CJ 67890' as the second Paarl registration number", function() {
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        var regNumbersForPaarl = allPaarl(regNumbers);
        chai.assert.equal(regNumbersForPaarl[1], 'CJ 67890');
    });
});