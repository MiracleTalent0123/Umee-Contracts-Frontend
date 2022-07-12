import React, { useCallback, useContext } from 'react';
import Modal from 'components/common/Modals/Modal';
import { Box, Image, ResponsiveContext, Text } from 'grommet';
import CompleteIcon from '../../public/images/success-icon-pink.png';
import { PrimaryBtn } from 'components/common';
import { TxnStatusType } from 'lib/types';
import { Theme, useTheme } from 'lib/hooks/theme/context';

interface Step {
  status: TxnStatusType;
  label: string;
}

interface TransferStatusModalProps {
  onClose: () => void;
  onCancel: () => void;
  status: TxnStatusType;
}

const steps: Step[] = [
  { status: TxnStatusType.initiated, label: 'Initiated' },
  { status: TxnStatusType.inProgress, label: 'In batch' },
  { status: TxnStatusType.complete, label: 'Complete' },
];

const TransferStatusModal: React.FC<TransferStatusModalProps> = ({ onClose, onCancel, status }) => {
  const { themeMode } = useTheme();
  const size = useContext(ResponsiveContext);

  const handleCancelClick = useCallback(() => {
    onClose();
    onCancel();
  }, [onCancel, onClose]);

  return (
    <Modal onClose={onClose}>
      <Box
        round="xsmall"
        background={'clrBackground'}
        width={{ min: size === 'small' ? '100%' : '350px' }}
        pad={{ vertical: size === 'small' ? 'large' : 'medium', horizontal: 'medium' }}
      >
        <Box className="border-gradient-bottom" pad={{ bottom: 'xsmall' }}>
          <Text color="clrTextAndDataListHeader" size="xsmall">
            TRANSFER STATUS
          </Text>
        </Box>
        <Box
          style={{ position: 'relative' }}
          pad={{ vertical: size === 'small' ? 'medium' : 'small' }}
          direction="row"
          justify="between"
        >
          <Box
            style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
            background={'clrButtonBorderGrey'}
            height="2px"
            width={'100%'}
          />
          {steps.map((step, index) => (
            <Box key={index}>
              {step.status === status ? (
                <Box
                  background={'clrBackground'}
                  style={{ zIndex: 1000 }}
                  className={themeMode === Theme.dark ? 'outline-dark' : 'outline'}
                >
                  <Image src={CompleteIcon} alt="completed icon" />
                </Box>
              ) : (
                <Box
                  direction="row"
                  justify="center"
                  align="center"
                  className={themeMode === Theme.dark ? 'outline-dark' : 'outline'}
                  border={{ size: '2px', color: 'clrButtonBorderGrey' }}
                  style={{ width: 36, height: 36, borderRadius: '50%', position: 'relative', zIndex: 1000 }}
                  background="clrBackground"
                >
                  <Text size="medium" color="clrButtonBorderGrey">
                    {index + 1}
                  </Text>
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Box direction="row" justify="between">
          {steps.map((step, index) => (
            <Box style={{ marginLeft: index == 1 ? '12px' : '' }} key={index}>
              <Text color="clrTextAndDataListHeader" size="small">
                {step.label}
              </Text>
            </Box>
          ))}
        </Box>
        {status === TxnStatusType.initiated && false && (
          <Box margin={{ top: 'large' }}>
            <PrimaryBtn onClick={handleCancelClick} text="Cancel" textSize="medium" round="xlarge" pad={'small'} />
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default TransferStatusModal;
