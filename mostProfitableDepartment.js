
let departmentSales = {};
    
function mostProfitableDepartment(data) {
    let departmentSales = {};
    
    data.forEach(item => {
        if (departmentSales[item.department]) {
            departmentSales[item.department] += item.sales;
        } else {
            departmentSales[item.department] = item.sales;
        }
    });
    
    let mostProfitable = Object.keys(departmentSales).reduce((a, b) => departmentSales[a] > departmentSales[b] ? a : b);
    
    return mostProfitable;
}

function mostProfitableDay(data) {
    let daySales = {};
    
    data.forEach(item => {
        if (daySales[item.day]) {
            daySales[item.day] += item.sales;
        } else {
            daySales[item.day] = item.sales;
        }
    });
    
    let mostProfitable = Object.keys(daySales).reduce((a, b) => daySales[a] > daySales[b] ? a : b);
    
    return mostProfitable;
}




