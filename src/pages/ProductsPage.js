// https://js.devexpress.com/Documentation/Guide/Widgets/Common/Templates/
import React from "react";
import DataGrid, {
  Column,
  FormItem,
  Editing,
  Paging,
  Lookup,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";

import { employees, states } from "./empData.js";
const productForm = {
  textAlign: "center",
  marginTop: "50px",
  marginRight: "100px",
  marginLeft: "100px",
};

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div >
        <div id="data-grid-demo">
          <DataGrid dataSource={employees} keyExpr="ID" showBorders={true}>
            <Paging enabled={true} />
            <Editing
            caption="Actions"
              mode="form"
              allowUpdating={true}
              allowAdding={true}
              allowDeleting={true} 
            />
            <Column dataField="Prefix" caption="Title" width={70}  hidingPriority={4}/>
            <Column dataField="FirstName" hidingPriority={7} />
            <Column dataField="LastName" hidingPriority={5}/>
            <Column dataField="Position" width={170} hidingPriority={6}/>
            <Column dataField="StateID" caption="State" width={125} hidingPriority={2}>
              <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
            </Column>
            <Column dataField="BirthDate" dataType="date" hidingPriority={3}/>
            <Column dataField="Notes" visible={true} hidingPriority={1}>
              <FormItem
                colSpan={2}
                editorType="dxTextArea"
                editorOptions={{ height: 100 }}
              />
            </Column>
          </DataGrid>
        </div>
      </div>
    );
  }
}

export default ProductsPage;
