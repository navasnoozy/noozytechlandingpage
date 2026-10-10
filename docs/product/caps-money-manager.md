# Caps Money Manager

Facts about Caps for this website. Checked on 2026-10-09 against the app's source code, its Google Play listing and caps.noozytech.com.

## Names

- **Caps Money Manager** on its first mention on a page, **Caps** after that.
- **Caps Pro** is the optional paid upgrade inside the app, not a separate app.
- Wherever Caps appears, make clear it's made by NoOzyTech, for example "Caps Money Manager, by NoOzyTech".

## Platforms

| Platform | Status | What to say |
|---|---|---|
| Android | Live on Google Play | "Get it on Google Play" |
| iPhone (iOS) | In development (caps.noozytech.com says so) | Nothing. Don't mention iOS or the App Store, and don't show Caps on an iPhone. |
| Web | In development: caps.noozytech.com/caps-web is a "coming soon" page for a web dashboard | Nothing until it launches |

## Links

| What | URL |
|---|---|
| Website, the main home of Caps online | https://caps.noozytech.com |
| Google Play | https://play.google.com/store/apps/details?id=com.noozy.caps |
| Privacy policy | https://caps.noozytech.com/privacy |
| Delete an account | https://caps.noozytech.com/account/delete |
| Support email | caps@noozytech.com |

## Approved wording

Existing copy written for Caps. Reuse it rather than inventing new claims.

- **Description**, used on caps.noozytech.com: "Caps is a local-first money manager for wallets, bank accounts, credit cards, loans, budgets, and daily transactions. No ads, no data selling, and no bank logins."
- **Main headline:** "A habit worth carrying forward."
- **About line:** "Built for clear, private money tracking."
- **Play Store screenshot headlines**, with their subheadings:
  - "Everyday spending. Every way you pay." Track cash, bank accounts, and credit cards together.
  - "Your credit cards, all accounted for." Balances, bills, and available credit.
  - "A little tracking. A lot of perspective." Understand your income, source by source.
  - "Set your limits. Keep your freedom." Plan your spending with budgets by category.
  - "What you owe. What you're owed." Loans, repayments, and collections.
  - "Different screens. The same good habit." Your wallets and transactions, in sync across devices.
- **In-app welcome slides:** "All accounts, one live portfolio", "Transactions built for real life", "Budgets that show your pace", "Reports that explain the why", "Works offline. Syncs automatically."

## What Caps does

Checked in the app's code. Everything is free unless marked **Pro**.

- **Accounts:** cash, bank accounts, credit cards (**Pro**), and people you lend to or borrow from, with one total balance across all of them.
- **Transactions:** income, expenses and transfers, including between currencies, with categories, subcategories, tags, people, notes and search.
- **Budgets:** weekly, monthly, quarterly or yearly, by category or wallet. Shows a safe amount to spend per day, and alerts at 75%, 90% and 100%.
- **Reports:** summaries, cash flow, and breakdowns by category, wallet, tag and person, with charts you can tap into. Trends and advanced reports are **Pro**.
- **Credit cards (Pro):** statement and due dates, billed and unbilled amounts, available credit, and bill reminders.
- **Loans and debts:** money lent and borrowed, repayments and collections, a record per person, and due-date reminders.
- **Savings goals:** money set aside inside a wallet, with deadlines and reminders.
- **Events:** groups the spending of a trip, wedding or festival automatically.
- **Scheduled payments:** one-off or repeating, with reminders. Each one can be recorded or skipped.
- **Calendar:** daily cash flow, plus credit card statement and due dates.
- **Currencies:** 160, with exchange rates and a single display currency for the total.
- **Import and export:** CSV and Excel files from other apps or banks (the file is read on the phone, not uploaded), export to CSV or Excel, and full backup and restore.
- **Sync (Pro):** secure cloud sync and restore across up to 5 devices. The free version works fully on one device.
- **Personal touches:** light, dark and true-black themes, accent colors, custom wallet card colors (**Pro**), and date, number and financial-year settings.
- **Languages:** English, Malayalam, Arabic, Russian, and Chinese (Simplified and Traditional).
- **Accessibility:** scalable text, screen reader labels and reduced-motion support.

## Free and Pro

- Free is a complete money manager on one device, with unlimited wallets and transactions and no ads.
- Caps Pro adds cloud sync and restore across up to 5 devices, credit card accounts, advanced reports and trends, and custom wallet card colors.
- Pro is a monthly or yearly subscription, or a one-time lifetime purchase.
- **Never state prices.** Google Play sets them per country, and they change.

## Privacy and trust

All checked in the app's code.

- No ads, and no advertising code in the app.
- Personal data is never sold.
- No bank logins.
- Data is stored on the phone first, in an encrypted database.
- Imported files are read on the phone, not uploaded.
- Accounts can be deleted in the app or on the web.

## Never claim

| Claim | Why |
|---|---|
| AI features, receipt scanning or automatic bank sync | Caps has none of them |
| An iPhone app, App Store availability, or "on all platforms" | iOS isn't released |
| Download counts, ratings, reviews, user numbers or "trusted by" | No public numbers worth showing yet, and they must never be invented |
| Prices | Google Play sets them per country |
| Awards, "#1", "the best", "bank-grade security" | Can't be verified |
| The referral offer ("invite 3 friends") | Hidden in the app, not launched |

## Brand assets

These live in the Caps app repository (`myxepnse`). Copy what the site needs into `public/` and note it here.

| Asset | Path in the Caps repo | Notes |
|---|---|---|
| Logo, transparent | `assets/app_icon/caps_splash_logo.png` | 1024×1024. Best for the web. |
| App icon, master | `tool/app_icon/caps_app_icon_1254.png` | 1254×1254, on an off-white tile |
| Logo, one color | `tool/app_icon/caps_launcher_monochrome_1024.png` | 1024×1024 |
| Feature graphic | `assets/play_store/caps_feature_graphic_white_wallets_v4_habit_1024x500.png` | The approved version. Master file: `marketing/play_store/caps_feature_graphic_white_wallets_v4_habit_master.png` |
| Play Store screenshots | `marketing/play_store/phone_screenshots/` | 1080×1920, headlines included in the image |
| Clean screenshots | `marketing/play_store/caps_*_iphone17promax_clean_1320x2868.png` | Home, credit card, income report, budget, loans |

- **The clean screenshots were captured on an iPhone simulator.** They show the iPhone status bar and Dynamic Island. Caps is Android-only, so don't use them as they are. Crop the status bar off, or capture new screenshots on an Android phone or emulator.
- **This site's copies** are in `assets/images/caps/`. They're cropped from the clean screenshots: the top 200 px (iPhone status bar) and the content under the tab bar are removed, and they're resized to 660 px wide. Light theme only. [NEED: dark-theme screenshots, to show in dark mode.]
- Don't use the old teal, red and orange icon in `marketing/play_store/old_icon_design/`, or the dark `caps_feature_graphic_s26_ultra_v1` graphic. Both show retired branding.
- Use Google's official "Get it on Google Play" badge, unchanged, and add this line to the site footer: "Google Play and the Google Play logo are trademarks of Google LLC."

### Logo colors

| Part | Hex |
|---|---|
| Coral (front card) | `#FD5B52` to `#FD7973` |
| Yellow | `#FBC12A` |
| Blue | `#147EFB` |
| Feather | `#F6B6B4` |

## This site and caps.noozytech.com

caps.noozytech.com is the main home of Caps in search results. This site introduces Caps, makes clear that NoOzyTech makes it, and links there. How the two sites divide the work: [decision 0002](../decisions/0002-company-site-and-caps-site.md).
