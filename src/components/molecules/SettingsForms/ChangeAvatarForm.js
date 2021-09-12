import React from 'react';
import Title from 'components/atoms/Title/Title';
import {
  StyledFileName,
  SingleFormWrapper,
  StyledFileInput,
  FormButton,
  StyledInput,
} from './SettingsForms.styles';
import { InsertDriveFile } from '@material-ui/icons';

const ChangeAvatarForm = () => {
  const [file, setFile] = React.useState(null);
  const handleValueChange = (e) => {
    setFile(e.target.value);
  };
  const handleRealInput = () => {
    document.getElementById('avatar').click();
  };
  return (
    <SingleFormWrapper>
      <Title>Change avatar</Title>
      <input
        type="file"
        id="avatar"
        name="avatar"
        style={{ display: 'none' }}
        onChange={handleValueChange}
        disabled
      />
      <StyledFileInput disabled>
        <InsertDriveFile onClick={handleRealInput} />
        {file ? (
          <StyledFileName>{file.replace(/^.*\\/, '')}</StyledFileName>
        ) : (
          <StyledFileName>select file</StyledFileName>
        )}
      </StyledFileInput>
      <StyledInput placeholder="password" disabled />
      <FormButton disabled>Upload</FormButton>
    </SingleFormWrapper>
  );
};
export default ChangeAvatarForm;
