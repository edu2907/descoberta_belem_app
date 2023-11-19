/* eslint-disable camelcase */
const pt_BR = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  mainScreen: {
    head: 'Pontos Turísticos e Cultura',
    about_place: 'Sobre o local',
  },
  timeAgo: {
    days: 'há {{count}} dias',
    day: 'há 1 dia',
    months: "há {{count}} meses",
    month: "há 1 mês",
    years: "há {{count}} anos",
    year: 'há 1 ano',
    justNow: 'agora mesmo',
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
}

export type Translations = typeof pt_BR
export default pt_BR
