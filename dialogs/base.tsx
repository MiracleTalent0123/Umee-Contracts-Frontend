import React, { FunctionComponent, MouseEvent } from 'react';
import { Dialog } from '@headlessui/react';
import { Box, Image } from 'grommet';
import { useTheme } from 'lib/hooks/theme/context';

export interface BaseDialogProps {
  dialogStyle?: Record<string, string>;
  isOpen: boolean;
  close?: () => void;
  isHideCloseButton?: boolean;
  initialFocus?: React.MutableRefObject<HTMLElement | null>;
}

export const BaseDialog: FunctionComponent<BaseDialogProps> = ({
  isOpen,
  close = () => {},
  children,
  dialogStyle,
  isHideCloseButton,
  initialFocus,
}) => {
  const { themeMode } = useTheme();

  return (
    <React.Fragment>
      {isOpen ? (
        <Dialog as="div" className="base-dialog" open={isOpen} onClose={close}>
          <Box width={'100%'} height="100%" direction="row" justify="center" align="center">
            <Dialog.Overlay
              onClick={(e: MouseEvent) => e.stopPropagation()}
              className={`base-dialog-overlay base-dialog-overlay-${themeMode}`}
            />
            <div className="base-dialog-content">
              {children}
              {!isHideCloseButton && (
                <Image
                  onClick={() => close()}
                  className="absolute cursor-pointer top-3 md:top-5 right-3 md:right-5 w-8 md:w-10"
                  src="/public/images/Close.svg"
                  alt=""
                />
              )}
            </div>
          </Box>
        </Dialog>
      ) : null}
    </React.Fragment>
  );
};

export function wrapBaseDialog<C extends React.ElementType>(
  element: C
): React.ElementType<BaseDialogProps & React.ComponentProps<C>> {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <BaseDialog
        isOpen={props.isOpen}
        dialogStyle={props.dialogStyle}
        close={props.close}
        isHideCloseButton={props.isHideCloseButton}
        initialFocus={props.initialFocus}
      >
        {props.isOpen ? React.createElement(element, props) : null}
      </BaseDialog>
    );
  };
}
