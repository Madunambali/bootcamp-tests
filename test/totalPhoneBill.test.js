describe('totalPhoneBill function', function() {
    it("should return 'R7.45' for 'call, sms, call, sms, sms'", function() {
        var totalCost = totalPhoneBill('call, sms, call, sms, sms');
        chai.assert.equal(totalCost, 'R7.45');
    });

    it("should return 'R3.40' for 'call, sms'", function() {
        var totalCost = totalPhoneBill('call, sms');
        chai.assert.equal(totalCost, 'R3.40');
    });

    it("should return 'R1.30' for 'sms, sms'", function() {
        var totalCost = totalPhoneBill('sms, sms');
        chai.assert.equal(totalCost, 'R1.30');
    });
});