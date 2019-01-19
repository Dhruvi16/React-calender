import React from "react";
import dateFns from "date-fns";

class Calender extends React.Component {
  state = {
    currentMonth: new Date(),
    selectDate: new Date()
  };

  renderHeader() {}

  renderDays() {}

  renderCells() {}

  onDateClick = day => {};

  nextMonth = () => {};

  prevMonth = () => {};


    render() {
      return (
        <div>
          <div> Header </div>
          <div> Days </div>
          <div> Cells </div>
        </div>
      );
    }
}

export default Calender;
