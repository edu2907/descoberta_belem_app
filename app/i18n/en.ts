import { Translations } from "./pt_BR"

const en: Translations = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  mainScreen: {
    head: 'Tourist Spots and Culture',
    about_place: "",
    title: "",
    comentarios_head: "",
    post_comment: ""
  },
  welcomeScreen: {
    postscript: "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle: "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  timeAgo: {
    minutes: "",
    minute: "",
    hours: "",
    hour: "",
    days: "",
    day: "",
    months: "",
    month: "",
    years: "",
    year: "",
    justNow: ""
  }
}

export default en
