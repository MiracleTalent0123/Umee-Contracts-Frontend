import React, { useState } from 'react';
import { Box, Text, Layer, Form, FormField, TextInput, Button} from 'grommet';
import bcrypt from 'bcryptjs';

export const BetaAuthModal = ({
  valid,
  passwordHash,
}: {
  valid: (password: string) => void,
  passwordHash: string,
}) => {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const onSubmitPassword = () => {
    const result = bcrypt.compareSync(password, passwordHash);
    
    if (result) {
      valid(password);
      setStatus('');
      return;
    }

    setPassword('');
    setStatus('wrong password');
  };
  
  return (
    <Layer>
      <Box
        direction="column"
        alignContent="center"
        alignSelf="center"
        border={{ color: 'clrInfoPanelBorder', size: 'large' }}
        pad="medium"
        width="medium"
        background="clrDefaultBg"
      >
        <Box justify="center" pad="small">
          <Text size="medium">Please enter password for access</Text>
        </Box>
        <Box justify="center" pad="small">
          <Form onSubmit={onSubmitPassword}>
            <FormField label="Password">
              <TextInput
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" label="Submit" />
            </Box>
          </Form>
        </Box>
        <Box justify="center">
          <Text size="small">{status}</Text>
        </Box>
      </Box>
    </Layer>
  );
};

export default BetaAuthModal;