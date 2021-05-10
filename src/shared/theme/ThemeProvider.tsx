import React, {useEffect, useState} from 'react';
import {useStorage} from 'services/StorageService';
import {ThemeProvider as ThemeProviderRS} from '@shopify/restyle';
import {Region} from 'shared/Region';

import defaultTheme, {Theme} from './default';

interface ThemeProviderProps {
  children?: React.ReactElement;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  // Need to also get value for light/dark theme from storage
  const {region} = useStorage();
  const [theme, setTheme] = useState<Theme>(getThemeWithDefault(region));

  useEffect(() => setTheme(getThemeWithDefault(region)), [region]);

  return <ThemeProviderRS theme={theme}>{children}</ThemeProviderRS>;
};

const getThemeWithDefault = (region?: Region, mode: 'light' | 'dark' = 'light'): Theme => {
  return region ? themes[region][mode] : themes.None[mode];
};

// Add different themes into this map
const themes: Record<Region, {light: Theme; dark: Theme}> = {
  None: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ABR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ADN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ADS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  AKL: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ALB: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ATQ: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  APY: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  AUR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BSL: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BAT: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BTN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BTG: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BGT: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BLR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BHL: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BKD: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  BLC: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CGY: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CRN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CRS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CMG: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CPZ: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CAT: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CVT: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CEB: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CPV: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  CTB: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  DDN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  DDS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  DOC: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  DOR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  DGI: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  EAS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  GUI: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  IFG: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ILN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ILO: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ILS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ISA: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  KLG: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  LAU: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  LAG: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  LDN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  LDS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  LYT: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  MGD: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  MRN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  MAS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  MSO: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  MOR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  MOP: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  NEO: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  NOR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  NRS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  NUE: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  NUV: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  OCM: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ORM: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  PLW: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  PAM: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  PGS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  QZN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  QRN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  RZL: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  RBL: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  SMR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  SRG: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  SQR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  SOR: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  STC: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  STL: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  SLK: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  SLU: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  SDN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  SDS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  TRL: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  TWI: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ZMB: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ZDN: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ZDS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
  ZMS: {
    light: defaultTheme,
    dark: defaultTheme,
  },
};
