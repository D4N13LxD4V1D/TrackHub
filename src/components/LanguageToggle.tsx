import React, {useCallback} from 'react';
import {Button} from 'components/Button';
import {useStorage} from 'services/StorageService';
import {useI18n} from '@shopify/react-i18n';

export const LanguageToggle = () => {
  const [i18n] = useI18n();
  const {setLocale} = useStorage();
  const toggle = useCallback(() => {
    setLocale(i18n.locale === 'en' ? 'fil' : 'en');
  }, [i18n.locale, setLocale]);
  const label = i18n.locale === 'en' ? 'LanguageSelect.FilShort' : 'LanguageSelect.EnShort';

  return <Button text={i18n.translate(label)} variant="subduedText" onPress={toggle} />;
};
