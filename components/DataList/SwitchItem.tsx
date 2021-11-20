import * as React from 'react';
import APRTypeSwitch from '../Switches/APRTypeSwitch';
import CollateralSwitch from '../Switches/CollateralSwitch';

export interface SwitchItemProps {
  checked?: boolean;
  handler?(checked: boolean): void;
  type: 'collateral' | 'apr';
  enabled?: boolean;
}

const SwitchItem = ({ checked, handler, type, enabled }: SwitchItemProps) => {
  return (
    <>
      {type === 'collateral' && <CollateralSwitch checked={checked} handler={handler} enabled={enabled} />}
      {type === 'apr' && <APRTypeSwitch checked={checked} handler={handler} />}
    </>
  );
};

export default SwitchItem;
