import React from "react";
import "devextreme/data/odata/store";
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup,
} from "devextreme-react/data-grid";
import data from "./data";

const cusData = data.getCustomer();

console.log(cusData);
export default () => (
  <React.Fragment>
    {/* <h2 className={'content-block'}>Display Data</h2> */}

    <DataGrid
      key={cusData.Name}
      className={"dx-card wide-card"}
      dataSource={cusData}
      showBorders={false}
      focusedRowEnabled={true}
      defaultFocusedRowIndex={0}
      columnAutoWidth={true}
      columnHidingEnabled={true}
    >
      <Paging defaultPageSize={10} />
      <Pager showPageSizeSelector={true} showInfo={true} />
      <FilterRow visible={true} />

      {/* <Column dataField={"Task_ID"} width={90} hidingPriority={2} /> */}
      <Column
        dataField={"email"}
        width={190}
        caption={"Subject"}
        hidingPriority={3}
      />
      {/* <Column dataField={"Password"} caption={"Status"} hidingPriority={1} /> */}
      <Column dataField={"first_name"} caption={"Priority"} hidingPriority={2}>
        <Lookup
          dataSource={priorities}
          valueExpr={"value"}
          displayExpr={"name"}
        />
      </Column>
      {/* <Column
        dataField={"ResponsibleEmployee.Employee_Full_Name"}
        caption={"Assigned To"}
        allowSorting={false}
        hidingPriority={7}
      /> */}
      {/* <Column
        dataField={"Dob"}
        caption={"Start Date"}
        dataType={"date"}
        hidingPriority={4}
      /> */}
      {/* <Column
        dataField={"Task_Due_Date"}
        caption={"Due Date"}
        dataType={"date"}
        hidingPriority={4}
      /> */}
      {/* <Column dataField={"Phone"} caption={"Priority"} hidingPriority={5} />
      <Column dataField={"Country"} caption={"Completion"} hidingPriority={6} /> */}
    </DataGrid>
  </React.Fragment>
);

const dataSource = {
  store: {
    type: "odata",
    key: "id",
    url: "https://reqres.in/api/users?page=2",
  },
  //   expand: "ResponsibleEmployee",
  select: [
    "email",
    "first_name",
    // "Name",
    // "Dob",
    // "Phone",
    // "Country",
    // "ResponsibleEmployee/Employee_Full_Name",
  ],
};
console.log(dataSource);

const priorities = [
  { name: "High", value: 4 },
  { name: "Urgent", value: 3 },
  { name: "Normal", value: 2 },
  { name: "Low", value: 1 },
];
