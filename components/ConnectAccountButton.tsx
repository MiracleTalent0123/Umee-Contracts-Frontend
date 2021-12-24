import styled from '@emotion/styled';
import * as React from 'react';
import { Text } from 'grommet';

interface ConnectAccountButtonProps {
	textStyle?: React.CSSProperties;
}

export function ConnectAccountButton(props: React.HTMLAttributes<HTMLButtonElement> & ConnectAccountButtonProps) {

  return (
    <ConnectAccountButtonWrapper {...props}>
      <Text
        style={{
          ...props.textStyle,
        }}>
				Connect Wallet
      </Text>
    </ConnectAccountButtonWrapper>
  );
}

const ConnectAccountButtonWrapper = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 12px 4px;
	border-radius: 0.375rem;
	background-color: white;

	@media (min-width: 768px) {
		padding: 14px 4px;
	}
`;
