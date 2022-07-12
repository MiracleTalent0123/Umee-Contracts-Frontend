import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Text, Image, ResponsiveContext, BoxProps } from 'grommet'
import Image1 from '../public/images/bottom-bg1.png'
import Image2 from '../public/images/bottom-bg2.png'
import ImageWhite1 from '../public/images/bottom-bg-white-1.png'
import ImageWhite2 from '../public/images/bottom-bg-white-2.png'
import { Theme, useTheme } from 'lib/hooks/theme/context'
import { ToggleSwitch } from 'components'
import { Chain, useChain } from 'lib/hooks/chain/context'
import NavBarOpen from 'components/NavBar/NavBarOpen'
import Logo from '../public/images/Logo.svg'

export interface LayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: React.ReactNode
  toggleChain?: boolean
  element?: React.ReactNode
}

interface ContainerProps extends BoxProps {
  children: React.ReactNode
  size: string
  className?: string
}

const Container = ({ children, size, className, ...props }: ContainerProps) => (
  <Box
    pad={{
      horizontal: size === 'small' ? 'large' : size === 'medium' || size === 'large' ? 'medium' : 'large',
    }}
    className={className}
    {...props}
  >
    {children}
  </Box>
)

const Background1 = ({ size, themeMode }: { size: string; themeMode: Theme }) => {
  return (
    <Box direction="row" justify="center" width="full" style={{ position: 'absolute', bottom: 0, left: 0 }}>
      <Box className="content" pad={{ horizontal: 'xsmall' }}>
        <Image src={themeMode === Theme.light ? Image1 : ImageWhite1} alt="background" width={'230px'} />
      </Box>
    </Box>
  )
}

const Background2 = ({ size, themeMode }: { size: string; themeMode: Theme }) => {
  return (
    <Box direction="row" justify="center" width="full" style={{ position: 'absolute', bottom: 0, right: 0 }}>
      <Box direction="row" justify="end" className="content" pad={{ horizontal: 'xsmall' }}>
        <Image src={themeMode === Theme.light ? Image2 : ImageWhite2} alt="background" width={'230px'} />
      </Box>
    </Box>
  )
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, children, element, toggleChain = true }) => {
  const location = useLocation()
  const size = useContext(ResponsiveContext)
  const { themeMode } = useTheme()
  const { chainMode, setChainMode } = useChain()

  return (
    <>
      <Box pad={{ bottom: '150px' }}>
        {(size === 'small' || size === 'medium') && (
          <Container
            pad={{
              vertical: size === 'small' ? 'large' : 'medium',
              horizontal: size === 'small' ? 'large' : size === 'medium' || size === 'large' ? 'medium' : 'large',
            }}
            direction="row"
            justify="between"
            align="center"
            border={
              size === 'small' || size === 'medium'
                ? { side: 'bottom', size: '1px', color: 'clrBorderGrey' }
                : undefined
            }
            size={size}
            className={size === 'small' || size === 'medium' ? 'fixed-nav' : ''}
            background={'clrBackground'}
          >
            <Box direction="row" align="center">
              <Image src={Logo} alt="umee logo" width={'32px'} />
              <Text
                margin={{ left: 'small', top: '-2px' }}
                style={{ fontFamily: 'Moret' }}
                color="clrTextAndDataListHeader"
                size="32px"
              >
                Umee
              </Text>
            </Box>
            <Box>{(size === 'small' || size === 'medium') && <NavBarOpen />}</Box>
          </Container>
        )}
        <Container
          size={size}
          margin={size === 'medium' ? { top: '90px' } : ''}
          pad={{
            vertical: 'medium',
            horizontal: 'large',
          }}
        >
          {size !== 'small' && (
            <Box direction="row" justify={'between'} align="center" pad={{ bottom: 'medium' }}>
              <Text
                weight={'bold'}
                style={{ fontFamily: 'Moret' }}
                size={size === 'small' || size === 'medium' ? '36px' : 'xlarge'}
                color="clrTextAndDataListHeader"
              >
                {title}
              </Text>
              {/* {subtitle && (
                <Text color="clrTextAndDataListHeader" size={size === 'small' ? 'small' : 'medium'}>
                  {subtitle}
                </Text>
              )} */}
              {toggleChain && (
                <Box direction="row" justify="end">
                  <ToggleSwitch
                    choiceB={Chain.ethereum}
                    choiceA={Chain.cosmos}
                    defaultSelected={chainMode}
                    handler={(chain) => setChainMode(chain)}
                  />
                </Box>
              )}
              {element && element}
            </Box>
          )}
          <Box pad={{ top: size === 'small' ? '90px' : '' }}>{children}</Box>
        </Container>
      </Box>
      {location.pathname === '/dashboard' ? (
        <Background2 themeMode={themeMode} size={size} />
      ) : (
        <Background1 themeMode={themeMode} size={size} />
      )}
    </>
  )
}

export default Layout
