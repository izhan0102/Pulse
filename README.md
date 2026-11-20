# Pulse blood donation portal

Run `npm install` and `npm run dev` for a local presentation. Run `npm run build` to create a bundled frontend in `dist`. The interface uses no external fonts, images, or CDNs. Google authentication and shared Firebase data require internet access.

In Firebase Console, enable **Authentication → Google**, add the demo host to **Authorized domains**, and create a **Realtime Database**. Replace `REPLACE_WITH_ADMIN_UID` in `database.rules.json` with your Firebase Authentication UID, then paste the rules into Realtime Database → Rules. Set the same UID as `VITE_ADMIN_UID` in a local `.env` file. The administrator can approve hospital accounts. Stock records are visible only from approved accounts.

The Google sign-in popup requires a permitted origin. Use the localhost URL printed by Vite for a local presentation. The Firebase configuration values are public client identifiers.

The portal is for coordination. Donor self-attestation is not a medical eligibility test. Hospitals and blood banks must confirm screening, compatibility, and availability before transfusion. Registration makes a donor discoverable. Each completed donation earns 100 points when the requester confirms the specific offer in My dashboard. Portal alerts appear in the dashboard while signed in; no SMS or push delivery is configured.
