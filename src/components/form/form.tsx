import {StyledForm, Input, TextArea, Label, FormGroup} from './styled';
import Button from '../button/button'
interface FormProps {
    inputs: {label: string,type: string,placeholder: string}[]
    onSubmit: () => void
}

const Form:React.FC<FormProps> = ({inputs, onSubmit}) => {
    return(
        <StyledForm onSubmit={onSubmit}>
            {inputs.map(input=>
                (
                <FormGroup>
                    <Label>{input.label}</Label>
                    {
                        input.type === 'textarea' ?
                            <TextArea placeholder={input.placeholder}/>
                        :   <Input type={input.type} placeholder={input.placeholder} />
                    }
                </FormGroup>
                )
            )}
            <Button styleType="primary" title="submit" />
        </StyledForm>
    )
}

export default Form;