import I18n from "i18n-js"

// Note the syntax of these imports from the date-fns library.
// If you import with the syntax: import { format } from "date-fns" the ENTIRE library
// will be included in your production bundle (even if you only use one function).
// This is because react-native does not support tree-shaking.
import type Locale from "date-fns/locale"
import format from "date-fns/format"
import parseISO from "date-fns/parseISO"
import ar from "date-fns/locale/ar-SA"
import ko from "date-fns/locale/ko"
import en from "date-fns/locale/en-US"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

type Options = Parameters<typeof format>[2]

const getLocale = (): Locale => {
  const locale = I18n.currentLocale().split("-")[0]
  return locale === "ar" ? ar : locale === "ko" ? ko : en
}

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const locale = getLocale()
  const dateOptions = {
    ...options,
    locale,
  }
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions)
}


export const showSinceDate = (date: string) => {
  const parsedDate = new Date(date);
  const distance = formatDistanceToNow(parsedDate);

  // You might want to use your i18n library to translate these strings
  // This is a simplified example, replace with actual translation functions
  console.log(distance)
  if (distance.includes('less')) {
    return I18n.t('timeAgo.justNow');
  }
  else if (distance.includes('minute')) {
    const minute = parseInt(distance.split(' ')[0]);
  
    return I18n.t((minute < 2 ? 'timeAgo.minute' : 'timeAgo.minutes'), { count: minute });
  }
  else if (distance.includes('hour')) {
    const hour = parseInt(distance.split(' ')[1]);
  
    return I18n.t((hour < 2 ? 'timeAgo.hour' : 'timeAgo.hours'), { count: hour });
  }
  else if (distance.includes('day')) {
    const days = parseInt(distance.split(' ')[0]);
  
    return I18n.t((days < 2 ? 'timeAgo.day' : 'timeAgo.days'), { count: days });
  } else if (distance.includes('month')) {
    const months = parseInt(distance.split(' ')[1]);
  
    return I18n.t((months < 2 ? 'timeAgo.month' : 'timeAgo.months'), { count: months });
  } else if (distance.includes('year')) {
    const years = parseInt(distance.split(' ')[1]);
  
    return I18n.t((years < 2 ? 'timeAgo.year' : 'timeAgo.years'), { count: years });
  } else {
    return I18n.t('timeAgo.justNow');
  }
};