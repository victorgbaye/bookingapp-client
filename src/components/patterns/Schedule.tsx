import { Wrapper } from "../../assets/wrappers/Availability.styles"
import { Checkbox } from "../elements/Input/Input"
import {daysOfWeek, timeSlots} from '../../utils/AvailableTimeData'
import { SelectInput, StyledOption } from "../elements/Input/Input.styles"

const Schedule = () => {
  return (
    <Wrapper>
        <div className='schedule'>

        {daysOfWeek.map((dayOfWeek) => (
          <div key={dayOfWeek} className='schedule-flex'>
            <Checkbox label={dayOfWeek} key={dayOfWeek} />
            <div className='availability'>
                <SelectInput disabled>
                {timeSlots.map((timeSlot, index) => (
                    <StyledOption key={index} value={timeSlot}>
                    {timeSlot}
                    </StyledOption>
                ))}
                </SelectInput>
               <p>to</p>
                <SelectInput>
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