import { Wrapper } from "../../assets/wrappers/Availability.styles"
import { Checkbox } from "../elements/Input/Input"
import {daysOfWeek, timeSlots} from '../../utils/AvailableTimeData'
import { SelectInput, StyledOption } from "../elements/Input/Input.styles"
import { useState } from "react"
type CheckboxStates = {
  [key: string]: boolean;
};
const Schedule = () => {
  const initialCheckboxStates: CheckboxStates = daysOfWeek.reduce(
    (state, dayOfWeek) => {
      state[dayOfWeek] = false;
      return state;
    },
    {} as CheckboxStates
  );
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>(
    initialCheckboxStates
  );

  const handleScheduleCheck = (dayOfWeek: string) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [dayOfWeek]: !prevStates[dayOfWeek],
    }));
  };

  // const handleScheduleCheck =() =>{
  //   setIsChecked(!isChecked)
  //   setCheckboxStates((prevStates) => ({
  //     ...prevStates,
  //     [dayOfWeek]: !prevStates[dayOfWeek],
  //   }));
  // }
  return (
    <Wrapper>
        <div className='schedule'>

        {daysOfWeek.map((dayOfWeek) => (
          <div key={dayOfWeek} className='schedule-flex'>
            <Checkbox label={dayOfWeek} key={dayOfWeek} checked={checkboxStates[dayOfWeek]} onChange={() => handleScheduleCheck(dayOfWeek)}/>
            <div className='availability'>
                <SelectInput disabled={!checkboxStates[dayOfWeek]} >
                {timeSlots.map((timeSlot, index) => (
                    <StyledOption key={index} value={timeSlot}>
                    {timeSlot}
                    </StyledOption>
                ))}
                </SelectInput>
               <p>to</p>
                <SelectInput disabled={!checkboxStates[dayOfWeek]}>
                {timeSlots.map((timeSlot, index) => (
                    <StyledOption key={index} value={timeSlot}>
                    {timeSlot}
                    </StyledOption>
                ))}
                </SelectInput>
            </div>
          </div>
        ))}
        </div>
    </Wrapper>
  )
}

export default Schedule