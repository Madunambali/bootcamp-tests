describe ("CountAllFromTown function: ", function() {
    it("The countAllFromTown counts reg no. starts with CL: Which are 3 in the list.", function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
    })

})