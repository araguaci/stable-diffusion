import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import IAICollapse from 'common/components/IAICollapse';
import ParamInfillMethod from './ParamInfillMethod';
import ParamInfillTilesize from './ParamInfillTilesize';
import ParamScaleBeforeProcessing from './ParamScaleBeforeProcessing';
import ParamScaledHeight from './ParamScaledHeight';
import ParamScaledWidth from './ParamScaledWidth';

const ParamInfillCollapse = () => {
  const { t } = useTranslation();

  return (
    <IAICollapse label={t('parameters.infillScalingHeader')}>
      <Flex sx={{ gap: 2, flexDirection: 'column' }}>
        <ParamInfillMethod />
        <ParamInfillTilesize />
        <ParamScaleBeforeProcessing />
        <ParamScaledWidth />
        <ParamScaledHeight />
      </Flex>
    </IAICollapse>
  );
};

export default memo(ParamInfillCollapse);
