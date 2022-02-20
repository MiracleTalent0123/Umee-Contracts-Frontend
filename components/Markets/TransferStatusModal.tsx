import React, { useContext } from 'react';
import Modal from 'components/common/Modal';
import { Box, Image, ResponsiveContext, Text } from 'grommet';
import CompleteIcon from '../../public/images/success-icon-pink.png';
import { PrimaryBtn } from 'components/common';

interface Step {
  status: string;
  label: string;
}

const TransferStatusModal = ({ onClose, status }: { onClose: () => void; status: string }) => {
  const steps: Step[] = [
    { status: 'pending', label: 'Initiated' },
    { status: 'batch', label: 'In batch' },
    { status: 'complete', label: 'Complete' },
  ];
  const size = useContext(ResponsiveContext);

  return (
    <Modal onClose={onClose}>
      <Box
        round="xsmall"
        background={'white'}
        width={{ min: size === 'small' ? '100%' : '350px' }}
        pad={{ vertical: size === 'small' ? 'large' : 'medium', horizontal: 'medium' }}
      >
        <Box className="border-gradient-bottom" pad={{ bottom: 'xsmall' }}>
          <Text size="xsmall">TRANSFER STATUS</Text>
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
                <Box background={'white'} style={{ zIndex: 1000 }} className="outline">
                  <Image src={CompleteIcon} alt="completed icon" />
                </Box>
              ) : (
                <Box
                  direction="row"
                  justify="center"
                  align="center"
                  className="outline"
                  border={{ size: '2px', color: 'clrButtonBorderGrey' }}
                  style={{ width: 36, height: 36, borderRadius: '50%', position: 'relative', zIndex: 1000 }}
                  background="white"
                >
                  <Text size="medium" color="clrButtonBorderGrey">
                    {index + 1}
                  </Text>
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Box direction="row" justify="between" margin={{ bottom: 'large' }}>
          {steps.map((step, index) => (
            <Box style={{ marginLeft: index == 1 ? '12px' : '' }} key={index}>
              <Text size="small">{step.label}</Text>
            </Box>
          ))}
        </Box>
        <PrimaryBtn onClick={() => onClose()} text="Cancel" textSize="medium" round="xlarge" pad={'small'} />
      </Box>
    </Modal>
  );
};

export default TransferStatusModal;
