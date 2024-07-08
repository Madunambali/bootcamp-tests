describe('isFromBellville function' , function(){
    it('The isFromBellville validates the reg no. starts with CY: if startsWith CY, return true', function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it("The isFromBellville validates the reg no. starts with CY: if startsWith something else, return false", function() {
        assert.equal(isFromBellville('CJ 123'), false);
    })
});