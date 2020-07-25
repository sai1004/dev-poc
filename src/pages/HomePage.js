import React from "react";

import Form, {
  ButtonItem,
  GroupItem,
  SimpleItem,
  PatternRule,
  Label,
  RangeRule,
  EmailRule,
  RequiredRule,
} from "devextreme-react/form";
import notify from "devextreme/ui/notify";
import "devextreme-react/autocomplete";
import service from "./data.js";

const customers = [];

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      customer: service.getCustomer(),
      emptyArr: [],
    };

    this.passwordOptions = {
      mode: "password",
    };

    // button
    this.buttonOptions = {
      text: "Add Details",
      type: "success",
      useSubmitBehavior: true,
    };

    // this.checkBoxOptions = {
    //   text: "I agree to the Terms and Conditions",
    //   value: false,
    // };

    this.phoneEditorOptions = {
      mask: "+1 (X00) 000-0000",
      maskRules: {
        X: /[02-9]/,
      },
      useMaskedValue: true,
      maskInvalidMessage: "The phone must have a correct USA phone format",
    };

    this.maxDate = new Date().setYear(new Date().getYear() - 21);
    this.dateBoxOptions = {
      invalidDateMessage: "The date must have the following format: MM/dd/yyyy",
    };

    this.cityEditorOptions = {
      dataSource: service.getCities(),
      minSearchLength: 2,
    };

    this.countryEditorOptions = {
      dataSource: service.getCountries(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { customer } = this.state;
    return (
      <React.Fragment>
        <div className="max-width">
          <form action="your-action" onSubmit={this.handleSubmit}>
            <Form
              formData={customer}
              readOnly={false}
              showColonAfterLabel={true}
              showValidationSummary={true}
              validationGroup="customerData"
            >
              <GroupItem caption="ADD Details">
                <SimpleItem dataField="Email" editorType="dxTextBox">
                  <RequiredRule message="Email is required" />
                  <EmailRule message="Email is invalid" />
                </SimpleItem>

                <SimpleItem
                  dataField="Password"
                  editorType="dxTextBox"
                  editorOptions={this.passwordOptions}
                >
                  <RequiredRule message="Password is required" />
                </SimpleItem>

                <SimpleItem dataField="Name">
                  <RequiredRule message="Name is required" />
                  <PatternRule
                    message="Do not use digits in the Name"
                    pattern={/^[^0-9]+$/}
                  />
                </SimpleItem>

                <SimpleItem
                  dataField="Dob"
                  editorType="dxDateBox"
                  editorOptions={this.dateBoxOptions}
                >
                  <Label text="Date of birth" />
                  <RequiredRule message="Date of birth is required" />
                  <RangeRule
                    max={this.maxDate}
                    message="You must be at least 21 years old"
                  />
                </SimpleItem>

                <SimpleItem
                  dataField="Phone"
                  helpText="Enter the phone number in USA phone format"
                  editorOptions={this.phoneEditorOptions}
                >
                  <PatternRule
                    message="The phone must have a correct USA phone format"
                    pattern={
                      /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/
                    }
                  />
                </SimpleItem>
              </GroupItem>

              <ButtonItem
                horizontalAlignment="left"
                buttonOptions={this.buttonOptions}
              />
            </Form>
          </form>

          <div> {this.state.emptyArr} </div>
        </div>
      </React.Fragment>
    );
  }

  handleSubmit(e) {
    notify(
      {
        message: "You have submitted the form",
        position: {
          my: "center top",
          at: "center top",
        },
      },
      "success",
      3000
    );
    e.preventDefault();

    this.state.emptyArr.push({ ...this.state.customer });
    console.log("customers", customers);
  }
}

export default HomePage;
