const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 5; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      if (i == 0) {
        const cell = document.createElement("th");
        const cellText = document.createTextNode(tableInfo.tableHeader[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(
          tableInfo.tableContent[i - 1][tableInfo.tableHeader[j]]
        );
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
}

//const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function generateOl() {
  const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
  let res = document.createElement("ol");
  for (let i in list) {
    let anchor = document.createElement("a");
    anchor.href = "#";
    anchor.innerText = list[i];

    let elem = document.createElement("li");
    elem.appendChild(anchor);
    res.appendChild(elem);
  }
  document.body.appendChild(res);
}

function generateUl() {
  const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
  let res = document.createElement("ul");
  for (let i in list) {
    let anchor = document.createElement("a");
    anchor.href = "#";
    anchor.innerText = list[i];

    let elem = document.createElement("li");
    elem.appendChild(anchor);
    res.appendChild(elem);
  }
  document.body.appendChild(res);
}

function generateSelect() {
  //Build an array containing Customer records.
  const dropDownList = [
    { value: "newark", content: "Newark" },
    { value: "santaClara", content: "Santa Clara" },
    { value: "unionCity", content: "Union City" },
    { value: "albany", content: "Albany" },
    { value: "dalyCity", content: "Daly City" },
    { value: "sanJose", content: "San Jose" },
  ];
  //Create a DropDownList element.
  let res = document.createElement("SELECT");

  //Add the Options to the DropDownList.
  for (let i = 0; i < dropDownList.length; i++) {
    let option = document.createElement("OPTION");

    //Set Customer Name in Text part.
    option.innerHTML = dropDownList[i].content;

    //Set CustomerId in Value part.
    option.value = dropDownList[i].value;

    //Add the Option element to DropDownList.
    res.options.add(option);
  }

  //Reference the container DIV.
  let dvContainer = document.getElementById("dvContainer");

  //Add the DropDownList to DIV.
  let div = document.createElement("DIV");
  div.appendChild(res);

  //Add the DIV to the container DIV.
  //dvContainer.appendChild(div);
  document.body.appendChild(div);
}
