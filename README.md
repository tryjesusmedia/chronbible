# ChronBible — premium landing page

This repository contains the standalone **ChronBible marketing landing page**, designed to become **chronbible.com** after the domain is acquired. The actual reading app remains at https://tryjesusmedia.com/chronbible/ and is not moved or modified by this project.

## Current status

- ✅ Complete responsive landing page with the approved long-form copy.
- ✅ Try Jesus Media TJM1 colors: plum #311E33, midnight plum #1C111D, gold #EEBD4A, ivory #F3E8D0.
- ✅ Matching typography: Cormorant Garamond headings and Montserrat body.
- ✅ Accessible hamburger navigation, FAQ accordion and repeated calls-to-action that lead to the first-section signup area.
- ✅ Reserved first-section Omnisend form slot.
- ✅ No framework or build step required.
- ⏳ Omnisend form is **not connected yet**. The placeholder does not collect email or phone numbers.
- ⏳ Cloudflare Pages project must be created in the account owner's Cloudflare dashboard. A pages.dev URL is only real once Cloudflare deploys the project.
- ⏳ chronbible.com is **not** registered or connected by this repository.

## Publish to Cloudflare Pages now (no domain required)

1. Sign in to https://dash.cloudflare.com/ and open **Workers & Pages**.
2. Select **Create application → Pages → Connect to Git** (or **Import an existing Git repository**, depending on dashboard version).
3. Authorize GitHub if needed; select **tryjesusmedia/chronbible**.
4. Set **Project name:** \`chronbible\` if available (otherwise choose another).
5. Select **Production branch:** \`main\`.
6. Select **Framework preset:** None.
7. Set **Build command:** \`exit 0\` (Cloudflare's recommendation for plain HTML Pages sites).
8. Set **Build output directory:** \`.\` (repository root, where \`index.html\` lives).
9. Click **Save and Deploy**. Cloudflare will issue an available \`*.pages.dev\` address. Do **not** assume \`chronbible.pages.dev\` exists until Cloudflare confirms it.

When you later acquire **chronbible.com**:
1. In the same Pages project go to **Custom domains → Set up a domain**.
2. Enter \`chronbible.com\` and complete Cloudflare's DNS/nameserver instructions.
3. Update the page's canonical URL and social sharing image if desired.
4. Keep the Git integration; future pushes deploy automatically.

Docs: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/ and https://developers.cloudflare.com/pages/configuration/custom-domains/

## Connect Omnisend when ready

The **top-right card in the first section** contains a clearly marked placeholder, inside:

\`<div id="omnisend-form-slot" class="omnisend-form-slot"> ... </div>\`

1. In the existing Try Jesus Media Omnisend account, create a new *embedded* signup form for ChronBible (separate form ID makes tracking this landing page easier).
2. Add **Email** and **Phone / Cell** fields as intended.
3. Add **separate, unchecked promotional SMS consent** with the required terms and disclosures. Do not make marketing SMS consent a condition of obtaining the free guide. Configure compliant email consent too.
4. In \`index.html\`, **replace the entire \`div.form-placeholder\` block** with Omnisend's exact embedded form HTML / mount element (and add Omnisend's exact loader script if the provided instructions require it).
5. Do not apply custom typography, form, input, button, or label CSS inside the Omnisend embed. \`#omnisend-form-slot\` is deliberately an isolated boundary.
6. Set the post-submission action to deliver access to https://tryjesusmedia.com/chronbible/ (via a redirect or follow-up email), and send a test signup before using paid traffic.
7. Verify the email and phone arrive in the **correct Omnisend list/segment**, and test opt-in, SMS consent, mobile display and redirects.

**Important:** A placeholder is not a live signup form. This repository intentionally does not save leads, send texts or call an API. No Omnisend API key belongs in static client-side code.

## Website files

- \`index.html\` — content, structure, SEO metadata, and form mounting location
- \`styles.css\` — responsive premium TJM1 brand styling
- \`script.js\` — accessible mobile menu and copyright year
- \`favicon.svg\` — simple Bible/hourglass icon

## Verification before launch

- Visit the Cloudflare \`pages.dev\` URL on phone, tablet and desktop.
- Check every **Get free access** button scrolls to the hero form.
- Replace and test the Omnisend placeholder, verifying actual saved contacts and the separate SMS consent.
- Confirm the privacy policy URL and the success / welcome redirect.
- Test mobile menu, FAQ and all links.
- When the custom domain is live, add canonical metadata and SEO/social preview assets.
