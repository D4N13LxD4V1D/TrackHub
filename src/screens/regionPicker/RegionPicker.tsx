import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Box, Text, Icon, Button} from 'components';
import {StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStorage} from 'services/StorageService';
import {useI18n} from '@shopify/react-i18n';
import AbrFlag from 'assets/flags/abr-flag.png';
import AdnFlag from 'assets/flags/adn-flag.png';
import AdsFlag from 'assets/flags/mb-flag.png';
import AklFlag from 'assets/flags/akl-flag.png';
import AlbFlag from 'assets/flags/alb-flag.png';
import AtqFlag from 'assets/flags/atq-flag.png';
import ApyFlag from 'assets/flags/apy-flag.png';
import AurFlag from 'assets/flags/aur-flag.png';
import BslFlag from 'assets/flags/bsl-flag.png';
import BatFlag from 'assets/flags/bat-flag.png';
import BtnFlag from 'assets/flags/btn-flag.png';
import BtgFlag from 'assets/flags/btg-flag.png';
import BgtFlag from 'assets/flags/bgt-flag.png';
import BlrFlag from 'assets/flags/blr-flag.png';
import BhlFlag from 'assets/flags/bhl-flag.png';
import BkdFlag from 'assets/flags/bkd-flag.png';
import BlcFlag from 'assets/flags/blc-flag.png';
import CgyFlag from 'assets/flags/cgy-flag.png';
import CrnFlag from 'assets/flags/crn-flag.png';
import CrsFlag from 'assets/flags/crs-flag.png';
import CmgFlag from 'assets/flags/cmg-flag.png';
import CpzFlag from 'assets/flags/cpz-flag.png';
import CatFlag from 'assets/flags/cat-flag.png';
import CvtFlag from 'assets/flags/cvt-flag.png';
import CebFlag from 'assets/flags/ceb-flag.png';
import CpvFlag from 'assets/flags/cpv-flag.png';
import CtbFlag from 'assets/flags/ctb-flag.png';
import DdnFlag from 'assets/flags/ddn-flag.png';
import DdsFlag from 'assets/flags/dds-flag.png';
import DocFlag from 'assets/flags/doc-flag.png';
import DorFlag from 'assets/flags/dor-flag.png';
import DgiFlag from 'assets/flags/dgi-flag.png';
import EasFlag from 'assets/flags/eas-flag.png';
import GuiFlag from 'assets/flags/gui-flag.png';
import IfgFlag from 'assets/flags/ifg-flag.png';
import IlnFlag from 'assets/flags/iln-flag.png';
import IlsFlag from 'assets/flags/ils-flag.png';
import IloFlag from 'assets/flags/ilo-flag.png';
import IsaFlag from 'assets/flags/isa-flag.png';
import KlgFlag from 'assets/flags/klg-flag.png';
import LauFlag from 'assets/flags/lau-flag.png';
import LagFlag from 'assets/flags/lag-flag.png';
import LdnFlag from 'assets/flags/ldn-flag.png';
import LdsFlag from 'assets/flags/lds-flag.png';
import LytFlag from 'assets/flags/lyt-flag.png';
import MgdFlag from 'assets/flags/mgd-flag.png';
import MrnFlag from 'assets/flags/mrn-flag.png';
import MasFlag from 'assets/flags/mas-flag.png';
import MsoFlag from 'assets/flags/mso-flag.png';
import MorFlag from 'assets/flags/mor-flag.png';
import MopFlag from 'assets/flags/mop-flag.png';
import NeoFlag from 'assets/flags/neo-flag.png';
import NorFlag from 'assets/flags/nor-flag.png';
import NrsFlag from 'assets/flags/nrs-flag.png';
import NueFlag from 'assets/flags/nue-flag.png';
import NuvFlag from 'assets/flags/nuv-flag.png';
import OcmFlag from 'assets/flags/ocm-flag.png';
import OrmFlag from 'assets/flags/orm-flag.png';
import PlwFlag from 'assets/flags/plw-flag.png';
import PamFlag from 'assets/flags/pam-flag.png';
import PgsFlag from 'assets/flags/pgs-flag.png';
import QznFlag from 'assets/flags/qzn-flag.png';
import QrnFlag from 'assets/flags/qrn-flag.png';
import RzlFlag from 'assets/flags/rzl-flag.png';
import RblFlag from 'assets/flags/rbl-flag.png';
import SmrFlag from 'assets/flags/smr-flag.png';
import SrgFlag from 'assets/flags/srg-flag.png';
import SqrFlag from 'assets/flags/sqr-flag.png';
import SorFlag from 'assets/flags/sor-flag.png';
import StcFlag from 'assets/flags/stc-flag.png';
import StlFlag from 'assets/flags/stl-flag.png';
import SlkFlag from 'assets/flags/slk-flag.png';
import SluFlag from 'assets/flags/slu-flag.png';
import SdnFlag from 'assets/flags/sdn-flag.png';
import SdsFlag from 'assets/flags/sds-flag.png';
import TrlFlag from 'assets/flags/trl-flag.png';
import TwiFlag from 'assets/flags/twi-flag.png';
import ZmbFlag from 'assets/flags/zmb-flag.png';
import ZdnFlag from 'assets/flags/zdn-flag.png';
import ZdsFlag from 'assets/flags/zds-flag.png';
import ZmsFlag from 'assets/flags/zms-flag.png';
import {Region} from 'shared/Region';

//  | 'TWI' | 'ZMB' | 'ZDN' | 'ZDS' | 'ZMS'

interface RegionItemProps {
  code: Region;
  flagIcon: any;
  name: string;
  selected: boolean;
  onPress: (code: Region) => void;
}

const items: Omit<RegionItemProps, 'onPress' | 'selected' | 'name'>[] = [
  {code: 'ABR', flagIcon: AbrFlag},
  {code: 'ADN', flagIcon: AdnFlag},
  {code: 'ADS', flagIcon: AdsFlag},
  {code: 'AKL', flagIcon: AklFlag},
  {code: 'ALB', flagIcon: AlbFlag},
  {code: 'ATQ', flagIcon: AtqFlag},
  {code: 'APY', flagIcon: ApyFlag},
  {code: 'AUR', flagIcon: AurFlag},
  {code: 'BSL', flagIcon: BslFlag},
  {code: 'BAT', flagIcon: BatFlag},
  {code: 'BTN', flagIcon: BtnFlag},
  {code: 'BTG', flagIcon: BtgFlag},
  {code: 'BGT', flagIcon: BgtFlag},
  {code: 'BLR', flagIcon: BlrFlag},
  {code: 'BHL', flagIcon: BhlFlag},
  {code: 'BKD', flagIcon: BkdFlag},
  {code: 'BLC', flagIcon: BlcFlag},
  {code: 'CGY', flagIcon: CgyFlag},
  {code: 'CRN', flagIcon: CrnFlag},
  {code: 'CRS', flagIcon: CrsFlag},
  {code: 'CMG', flagIcon: CmgFlag},
  {code: 'CPZ', flagIcon: CpzFlag},
  {code: 'CAT', flagIcon: CatFlag},
  {code: 'CVT', flagIcon: CvtFlag},
  {code: 'CEB', flagIcon: CebFlag},
  {code: 'CPV', flagIcon: CpvFlag},
  {code: 'CTB', flagIcon: CtbFlag},
  {code: 'DDN', flagIcon: DdnFlag},
  {code: 'DDS', flagIcon: DdsFlag},
  {code: 'DOC', flagIcon: DocFlag},
  {code: 'DOR', flagIcon: DorFlag},
  {code: 'DGI', flagIcon: DgiFlag},
  {code: 'EAS', flagIcon: EasFlag},
  {code: 'GUI', flagIcon: GuiFlag},
  {code: 'IFG', flagIcon: IfgFlag},
  {code: 'ILN', flagIcon: IlnFlag},
  {code: 'ILS', flagIcon: IlsFlag},
  {code: 'ILO', flagIcon: IloFlag},
  {code: 'ISA', flagIcon: IsaFlag},
  {code: 'KLG', flagIcon: KlgFlag},
  {code: 'LAU', flagIcon: LauFlag},
  {code: 'LAG', flagIcon: LagFlag},
  {code: 'LDN', flagIcon: LdnFlag},
  {code: 'LDS', flagIcon: LdsFlag},
  {code: 'LYT', flagIcon: LytFlag},
  {code: 'MGD', flagIcon: MgdFlag},
  {code: 'MRN', flagIcon: MrnFlag},
  {code: 'MAS', flagIcon: MasFlag},
  {code: 'MSO', flagIcon: MsoFlag},
  {code: 'MOR', flagIcon: MorFlag},
  {code: 'MOP', flagIcon: MopFlag},
  {code: 'NEO', flagIcon: NeoFlag},
  {code: 'NOR', flagIcon: NorFlag},
  {code: 'NRS', flagIcon: NrsFlag},
  {code: 'NUE', flagIcon: NueFlag},
  {code: 'NUV', flagIcon: NuvFlag},
  {code: 'OCM', flagIcon: OcmFlag},
  {code: 'ORM', flagIcon: OrmFlag},
  {code: 'PLW', flagIcon: PlwFlag},
  {code: 'PAM', flagIcon: PamFlag},
  {code: 'PGS', flagIcon: PgsFlag},
  {code: 'QZN', flagIcon: QznFlag},
  {code: 'QRN', flagIcon: QrnFlag},
  {code: 'RZL', flagIcon: RzlFlag},
  {code: 'RBL', flagIcon: RblFlag},
  {code: 'SMR', flagIcon: SmrFlag},
  {code: 'SRG', flagIcon: SrgFlag},
  {code: 'SQR', flagIcon: SqrFlag},
  {code: 'SOR', flagIcon: SorFlag},
  {code: 'STC', flagIcon: StcFlag},
  {code: 'STL', flagIcon: StlFlag},
  {code: 'SLK', flagIcon: SlkFlag},
  {code: 'SLU', flagIcon: SluFlag},
  {code: 'SDN', flagIcon: SdnFlag},
  {code: 'SDS', flagIcon: SdsFlag},
  {code: 'TRL', flagIcon: TrlFlag},
  {code: 'TWI', flagIcon: TwiFlag},
  {code: 'ZMB', flagIcon: ZmbFlag},
  {code: 'ZDN', flagIcon: ZdnFlag},
  {code: 'ZDS', flagIcon: ZdsFlag},
  {code: 'ZMS', flagIcon: ZmsFlag}
];

const RegionItem_ = ({code, onPress, name, flagIcon, selected}: RegionItemProps) => (
  <>
    <TouchableOpacity onPress={() => onPress(code)} accessibilityRole="radio" accessibilityState={{selected}}>
      <Box paddingVertical="s" flexDirection="row" alignContent="center" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center" paddingVertical="s">
          <Image source={flagIcon} style={styles.flag} />
          <Text variant="bodyText" color="overlayBodyText" marginHorizontal="m">
            {name}
          </Text>
        </Box>
        <Box alignSelf="center">{selected && <Icon size={32} name="icon-check" />}</Box>
      </Box>
    </TouchableOpacity>
    <Box height={1} marginHorizontal="-m" backgroundColor="overlayBackground" />
  </>
);
const RegionItem = React.memo(RegionItem_);

export const RegionPickerScreen = () => {
  const [i18n] = useI18n();
  const {setRegion: persistRegion} = useStorage();
  const [selectedRegion, setSelectedRegion] = useState<Region>('None');
  const {navigate} = useNavigation();

  return (
    <Box flex={1} backgroundColor="overlayBackground">
      <SafeAreaView style={styles.flex}>
        <ScrollView style={styles.flex}>
          <Box flex={1} paddingHorizontal="m" paddingTop="m" paddingBottom="m">
            <Text variant="bodySubTitle" color="overlayBodyText" textAlign="center" accessibilityRole="header">
              {i18n.translate('RegionPicker.Title')}
            </Text>
            <Text marginVertical="m" variant="bodyText" color="overlayBodyText" textAlign="center">
              {i18n.translate('RegionPicker.Body')}
            </Text>
            <Box
              paddingHorizontal="m"
              borderRadius={10}
              backgroundColor="infoBlockNeutralBackground"
              accessibilityRole="radiogroup"
            >
              {items.map(item => {
                return (
                  <RegionItem
                    key={item.code}
                    selected={selectedRegion === item.code}
                    onPress={setSelectedRegion}
                    name={i18n.translate(`RegionPicker.${item.code}`)}
                    {...item}
                  />
                );
              })}
            </Box>
          </Box>
        </ScrollView>
        <Box
          backgroundColor="overlayBackground"
          padding="m"
          shadowColor="infoBlockNeutralBackground"
          shadowOffset={{width: 0, height: 2}}
          shadowOpacity={0.5}
          shadowRadius={2}
          elevation={10}
        >
          <Button
            text={i18n.translate(`RegionPicker.${selectedRegion === 'None' ? 'Skip' : 'GetStarted'}`)}
            variant={selectedRegion === 'None' ? 'bigHollow' : 'bigFlat'}
            onPress={async () => {
              await persistRegion(selectedRegion);
              navigate('OnboardingTutorial');
            }}
          />
        </Box>
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flag: {
    width: 40,
    height: 22,
    resizeMode: 'stretch',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
