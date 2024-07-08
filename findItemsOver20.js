function findItemsOver20(itemList) {
    return itemList.filter(item => item.qty > 20);
}

function findItemsOver(itemList, threshold) {
    return itemList.filter(item => item.qty > threshold);
}

var itemList = [
    {name: 'apples', qty: 10},
    {name: 'pears', qty: 37},
    {name: 'bananas', qty: 27},
    {name: 'apples', qty: 3},
];

var results = [
    {name: 'pears', qty: 37},
    {name: 'bananas', qty: 27},
];

var itemList2 = [
    {name: 'apples', qty: 10},
    {name: 'pears', qty: 19},
    {name: 'bananas', qty: 17},
    {name: 'apples', qty: 3},
];

var results2 = [];

var itemList3 = [
    {name: 'apples', qty: 40},
    {name: 'pears', qty: 20},
    {name: 'bananas', qty: 23},
    {name: 'apples', qty: 37}
];

var results3 = [
    {name: 'apples', qty: 40},
    {name: 'bananas', qty: 23},
    {name: 'apples', qty: 37}
];

