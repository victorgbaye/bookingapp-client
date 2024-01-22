import {CheckboxInput, CheckboxLabel, CheckboxWrapper, DefaultInput, Label, SelectInput, StyledOption} from './Input.styles'
type InputProps = {
    label: string,
    placeholder:string
}
export const Input = (props: InputProps) => {
    return (
        <div className='input-label'>  
        <Label>{props.label}</Label>
        <DefaultInput
        placeholder={props.placeholder}
        />
    </div>
  )
}

 type Checkbpxprop = {
    label: string
    checked: boolean;
    onChange: () => void;
 }
export const Checkbox = (props: Checkbpxprop) => {
    return (
        <CheckboxWrapper>
        <CheckboxInput type='checkbox'  checked={props.checked} onChange={props.onChange}/>
        <CheckboxLabel>{props.label}</CheckboxLabel>
      </CheckboxWrapper>
    );
  };

type SelectProps = {
    value: string
    children: React.ReactNode;
}

export const Select = (props: SelectProps) => {
    return(
        <>
        <SelectInput >
            <StyledOption value={props.value}>{props.children}</StyledOption>
        </SelectInput>
        </>
    )
}

