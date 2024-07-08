describe ('CountRegNumber function', function () {
    it('The countRegNumber counts the length of the assertion test: Length is 3', function() {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    })

    it('The countRegNumber counts the length of the assertion test: Length is 1', function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    })
})