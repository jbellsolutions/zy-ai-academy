# Lead Scraping Playbook - Florida Homeschool Organizations

**Purpose:** Build a verified email list of Florida homeschool organization leaders for cold outreach
**Target List Size:** 200-500 organizational contacts
**Timeline:** 1-2 weeks to build, 2 weeks to warm domains, then launch
**Owner:** Justin Bellware

---

## Overview

```
SCRAPE DIRECTORIES --> FIND EMAILS --> VERIFY --> SEGMENT --> WARM DOMAINS --> LAUNCH
     (Steps 1-4)       (Step 5)      (Step 6)   (Step 7)     (Step 8)      (Step 9)
```

---

## Step 1: Scrape FPEA Groups Directory

**Source:** fpea.com/groups (Florida Parent-Educators Association)
**Why:** The most comprehensive directory of FL homeschool organizations. FPEA is THE state org.

**Using Firecrawl:**
```
Tool: firecrawl_scrape or firecrawl_crawl
URL: https://fpea.com/groups
Format: JSON
Schema: {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "org_name": {"type": "string"},
      "county": {"type": "string"},
      "type": {"type": "string"},
      "website": {"type": "string"},
      "contact_email": {"type": "string"},
      "phone": {"type": "string"},
      "description": {"type": "string"}
    }
  }
}
```

**If FPEA requires login or is paginated:**
- Use firecrawl_crawl with `includePaths: ["/groups/*"]`
- Set `limit: 100` to capture all sub-pages
- If behind a login wall, use firecrawl_browser_create for session-based scraping

**Expected yield:** 100-200 organizations

---

## Step 2: Scrape TheHomeSchoolMom.com FL Listings

**Source:** thehomeschoolmom.com/homeschooling-in-florida/
**Why:** Well-maintained directory with contact info, organized by county.

**Approach:**
```
1. Map the site first:
   firecrawl_map: url = "https://thehomeschoolmom.com/homeschooling-in-florida/"
   
2. Identify all county/region sub-pages from the map results

3. Scrape each county page:
   firecrawl_scrape each URL with JSON format
   Schema: same as Step 1
```

**Pages to hit:**
- Main FL page
- Each county sub-page (Orange, Seminole, Osceola, Lake, Brevard, Polk, Volusia, Hillsborough)
- Also scrape: Duval (Jacksonville), Miami-Dade, Broward, Palm Beach for broader reach

**Expected yield:** 50-100 additional organizations

---

## Step 3: Scrape The Homeschool Hive FL Directory

**Source:** homeschoolhive.com (filter to Florida)
**Why:** Newer directory, sometimes has orgs not listed elsewhere.

**Approach:**
```
firecrawl_map: url = "https://homeschoolhive.com"
search: "Florida"

Then scrape each FL listing page with JSON extraction.
```

**Expected yield:** 20-50 organizations

---

## Step 4: Scrape Florida-Homeschooling.org Support Groups

**Source:** florida-homeschooling.org
**Why:** Community-maintained list with support group contacts.

**Approach:**
```
firecrawl_scrape: url = "https://florida-homeschooling.org"
Look for support group directory pages.
Extract: org name, contact info, county, website
```

**Expected yield:** 30-50 organizations

---

## Step 5: Find Email Addresses

**For each organization that has a website (from Steps 1-4):**

### Primary Tool: Hunter.io
- **What:** Domain-based email finder
- **Cost:** Free tier = 25 searches/month. Starter = $49/mo for 500 searches
- **How:** Input the org's domain, Hunter returns associated email addresses with confidence scores
- **API:** `https://api.hunter.io/v2/domain-search?domain=example.com&api_key=YOUR_KEY`
- **Priority:** Look for roles like "director", "coordinator", "president", "contact"

### Backup Tools:
1. **Apollo.io** - Free tier includes 50 email credits/month. Good for finding people by title.
2. **Snov.io** - Email finder + verification in one tool. 50 free credits/month.
3. **Google dorking** - `site:orgwebsite.com "@gmail.com" OR "@yahoo.com" OR "contact"` (manual but free)

### For orgs WITHOUT websites:
- Check their Facebook group "About" section for email
- Look for FPEA directory listing contact info
- Search: `"org name" + "email" + "florida" + "homeschool"`

### What NOT to do:
- Do NOT scrape personal emails from Facebook profiles
- Do NOT buy email lists from third-party vendors
- Only collect organizational/role-based emails (coordinator@, info@, director@)

---

## Step 6: Verify Emails

**Before sending a single email, verify every address.**

### Tool Options:

| Tool | Cost | Speed | Accuracy |
|---|---|---|---|
| NeverBounce | $0.003-0.008/email | Fast (API) | 99.5%+ |
| ZeroBounce | $0.007/email | Fast (API) | 98%+ |
| Bouncer | $0.005/email | Fast (API) | 99%+ |
| Snov.io (built-in) | Included in plan | Fast | 97%+ |

**Recommended:** NeverBounce or ZeroBounce. For 500 emails, total cost is $2-4.

**Process:**
1. Export all emails to CSV
2. Upload to verification tool
3. Remove all "invalid" and "disposable" results
4. Keep "valid" and "catch-all" (send to catch-all with caution)
5. Target: 60-70% valid rate is normal for scraped lists

**Expected result:** 200-350 verified organizational emails from 500 scraped

---

## Step 7: Segment the List

Create three segments based on organization type:

### Segment A: Co-ops (Curriculum-Focused)
- These orgs choose curricula for their members
- **Pitch angle:** "Add AI tutoring as a supplemental tool for your co-op families"
- **Best emails:** 1, 2, 3 (focus on results + free demo for the group)

### Segment B: Support Groups (Community-Focused)
- These orgs host meetups, field trips, social events
- **Pitch angle:** "Free workshop for your families on using AI for learning"
- **Best emails:** 1, 3, 5 (focus on free resources + offer to present)

### Segment C: Umbrella Schools (Enrollment-Focused)
- These orgs handle compliance, record-keeping for homeschool families
- **Pitch angle:** "AI tools that help your enrolled families with actual learning outcomes"
- **Best emails:** 1, 2, 4 (focus on measurable results + parent time savings)

**Tag each contact in your CRM/email tool with their segment.**

---

## Step 8: Domain Warmup

**Do NOT send cold email from gmail.com or your primary domain.**

### Setup:
1. **Buy a sending domain:** e.g., `zyaiacademy.com` or `getzyai.com` ($12/year on Namecheap)
2. **Set up email:** Google Workspace ($6/mo) or Zoho Mail (free tier)
3. **Configure DNS:** SPF, DKIM, DMARC records (critical for deliverability)
4. **Connect to Instantly.ai:** $30/mo starter plan

### Warmup Process (Instantly.ai handles this automatically):
- Day 1-7: Send 5-10 warmup emails/day (Instantly sends to its own network)
- Day 8-14: Ramp to 15-20 warmup emails/day
- Day 14+: Domain is ready to send real campaigns
- **Keep warmup running even after launching campaigns**

### Alternative Warmup Tools:
- Lemwarm (built into Lemlist)
- Warmbox.ai ($15/mo)
- Mailivery (free tier available)

**Total warmup time: 14 days minimum. 21 days is safer.**

---

## Step 9: Launch Campaign

### Platform: Instantly.ai ($30/mo)

**Week 1 (Soft Launch):**
- Send 10 emails/day
- Monitor open rates (target: 40%+) and reply rates (target: 5%+)
- Check spam folder placement
- If open rate < 30%, check subject lines and sending reputation

**Week 2 (Ramp Up):**
- Increase to 20 emails/day
- A/B test Email 1 subject lines
- Remove bounces immediately

**Week 3+ (Cruise):**
- Send up to 30 emails/day maximum
- Never exceed 50/day from a single domain
- Add a second sending domain if you need more volume

### Campaign Settings in Instantly.ai:
- Sending window: 9am-11am ET (Tue-Thu)
- Time between emails: 3-8 minutes (randomized)
- Daily limit: Start at 10, ramp to 30
- Stop on reply: Yes
- Track opens: Yes
- Track clicks: Yes (but note this can affect deliverability)

---

## Budget Summary

| Item | Cost | Frequency |
|---|---|---|
| Sending domain | $12 | One-time (annual) |
| Google Workspace email | $6 | Monthly |
| Instantly.ai | $30 | Monthly |
| Hunter.io Starter | $49 | Monthly (cancel after list is built) |
| NeverBounce verification | $2-4 | One-time |
| **Total startup cost** | **~$100** | |
| **Monthly ongoing** | **~$36** | |

---

## Compliance Notes

### CAN-SPAM Requirements (you MUST follow all):
1. Don't use false or misleading header information
2. Don't use deceptive subject lines
3. Identify the message as an ad (if it is one)
4. Include your physical postal address or PO Box
5. Tell recipients how to opt out
6. Honor opt-out requests within 10 business days
7. Monitor what others are doing on your behalf

### Additional Best Practices:
- Only email organizational contacts, never personal addresses scraped from social media
- Include one-click unsubscribe in every email
- If someone says "not interested" or "remove me" -- do it immediately
- Keep a suppression list and never re-email removed contacts
- Document your lead source for every contact (which directory it came from)

### What's Legal vs. What's Smart:
- Cold email to business/org contacts is legal under CAN-SPAM
- But being respectful matters more than being legal
- If a co-op leader asks you to stop, stop permanently
- Your reputation in the FL homeschool community is worth more than any email campaign
