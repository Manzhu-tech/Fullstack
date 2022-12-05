const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function task1(arr) {
  let res = [];
  //console.dir(res);
  for (let i = 0; i < arr.length; i++) {
    objt = {};
    objt.quantity = arr[i].quantity * 2;
    objt.price = arr[i].price * 2;
    res.push(objt);
  }
  return res;
}

function task2(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].quantity > 2 && arr[i].price > 300) {
      res.push(arr[i]);
    }
  }
  return res;
}

function task3(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i].quantity * arr[i].price;
  }
  return res;
}

console.dir(task1(itemsObject));
console.dir(task2(itemsObject));
console.log(task3(itemsObject));

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
function task4(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (/^[a-zA-Z]*$/.test(s[i])) {
      res += s[i].toLowerCase();
    }
  }
  return res;
}

console.log(task4(string));

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function task5(a, b) {
  res = [];
  for (let i = 0; i < a.length; i++) {
    objt = {};
    objt.uuid = a[i].uuid;
    objt.name = a[i].name;
    objt.role = null;
    res.push(objt);
  }
  for (let i = 0; i < b.length; i++) {
    let u = b[i].uuid;
    let find = false;
    for (let i = 0; i < res.length; i++) {
      if (res[i].uuid == u) {
        res[i].role = b[i].role;
        find = true;
      }
    }
    if (!find) {
      objt = {};
      objt.uuid = b[i].uuid;
      objt.name = null;
      objt.role = b[i].role;
      res.push(objt);
    }
  }
  //res.sort(sortBy("uuid"));
  return res;
}

var compare = function (obj1, obj2) {
  var val1 = obj1.uuid;
  var val2 = obj2.uuid;
  if (val1 < val2) {
    return -1;
  } else if (val1 > val2) {
    return 1;
  } else {
    return 0;
  }
};

console.dir(task5(first, second).sort(compare));
