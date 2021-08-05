import styled from "styled-components";

export default function Select (props) {

	const { setValue, options } = props;
	return (

		<StyledSelect {...props} disabled={props.disabled} multiple={false} onChange={(e) => setValue(e.target.value)}>
			{options.map((option, index) => (
				<option key={index} value={index ? option.id : undefined}>
					{index ? option.name : option}
				</option>
			))}
		</StyledSelect>
	);
};

const StyledSelect = styled.select`
    width: 100%;
    background: #fff;
    margin-top: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    line-height: 40px;
    height: 40px;
    color: #9F9F9F; 
    padding-left: 13px;
`
