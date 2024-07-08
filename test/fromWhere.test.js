describe  ("FromWhere function:", function() {
    it("The fromWhere validates if reg no of CY is Bellville: If true, return Bellville", function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    })

    it("The fromWhere validates if reg no of CJ is Paarl: If true, return Paarl", function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    })

    it("The fromWhere validates if reg no of CA is Cape Town: If true, return Cape Town", function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    })

    it("The fromWhere validates if reg no of ZN is Some other place!: If true, return Some other place!", function() {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })
})