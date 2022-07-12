import React from 'react'
import { Box, Image, Text } from 'grommet'
import DefaultValidator from '/public/images/validator.png'
import Spinner from 'components/common/Loading/Spinner'

interface ValidatorLogoProps {
  title: string;
  imgUrl?: string;
  textSize?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  color?: string;
}

const ValidatorLogo: React.FC<ValidatorLogoProps> = ({ title, imgUrl, textSize, fontFamily, width, height, color }) => {
  return (
    <Box direction="row" align="center" justify="start">
      {imgUrl !== undefined ? (
        <Image
          width={width || '36'}
          height={height || '36'}
          src={imgUrl || DefaultValidator}
          alt="validator logo"
          style={{ borderRadius: '50%' }}
        />
      ) : (
        <Spinner margin={{ left: 'xsmall' }} />
      )}

      <Text
        size={textSize || 'small'}
        style={{ fontFamily: fontFamily }}
        color={color || 'clrTextAndDataListHeader'}
        margin={{ left: 'small' }}
      >
        {title}
      </Text>
    </Box>
  )
}

export default ValidatorLogo
