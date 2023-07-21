import styled from "@emotion/styled";

export const FormNameField = styled.div`
  margin-top: 48px;
  margin-bottom: 16px;
`;

export const FormDescriptionField = styled.div`
  margin-bottom: 48px;
`;

export const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
  line-height: 35px;
  color: #fff;
`;

export const FormInput = styled.input`
  all: unset;
  width: 98%;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 10px 0px 10px 12px;
  margin-top: 8px;
  margin-bottom: 10px;

  font-size: 15px;
  color: white;
  background-color: #0f0f0f;
  box-shadow: 0 0 0 1px #fff;
`;

export const FormTextArea = styled.textarea`
  all: unset;
  width: 98%;
  height: 50px;
  padding-left: 10px;
  padding-top: 10px;
  resize: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 8px;

  font-size: 15px;
  color: #fff;
  background-color: #0f0f0f;
  box-shadow: 0 0 0 1px #fff;
`;

export const FormErrorText = styled.small`
  color: red;
  font-weight: 600;
`;

export const CancelButton = styled.button`
  color: #b1b1b1;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  color: #fff;
  cursor: pointer;
`;

export const EditButton = styled.button`
  color: #fff;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  color: #fff;
  cursor: pointer;
`;
