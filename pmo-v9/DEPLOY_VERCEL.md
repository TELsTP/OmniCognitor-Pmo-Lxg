# TAWASOL PMO Lab Portal — V9 Vercel Deployment Guide

## One-Command Deploy (Vercel CLI)

```bash
# 1. Install Vercel CLI (if not installed)
npm i -g vercel

# 2. From the project root
vercel

# 3. When prompted:
#    - Set up and deploy: Y
#    - Which scope: your account
#    - Link to existing project: N
#    - Project name: tawasol-pmo-portal
#    - Directory: ./
#    - Override settings: N

# 4. Set environment variable in Vercel dashboard:
#    GEMINI_API_KEY = your key from Google AI Studio
```

## Environment Variables Required

| Variable | Value | Where to get |
|----------|-------|-------------|
| GEMINI_API_KEY | AIza... | aistudio.google.com → API Keys |
| SUPABASE_URL | https://xxx.supabase.co | Optional — OmniCog Unity project |
| SUPABASE_KEY | eyJ... | Optional — OmniCog Unity anon key |

## V9 Changes (Claude Rhythm Advisor Core — June 12, 2026)

- ✅ 6 real PMO tasks seeded (Saudi premises, UAE licensing, Cairo network, LIMS, SCIEX procurement, PMO platform)
- ✅ 10 archive documents seeded with real Tawasol data
- ✅ 3 steering meetings seeded (Dr. Amin briefing, UAE sync, PMO WhatsApp)
- ✅ RACI matrices added to key tasks
- ✅ Package renamed to tawasol-pmo-lab-portal-v9
- ✅ Vercel.json optimized for Vite framework
- ✅ .env.local template created

## Steering Register (12 Pre-Vetted Authorities)
- Mohamed Ayoub — System Admin (nakamitshe@gmail.com)
- Dr. Mohamed Ayoub — MENA-REF-LABS Lead (3m.ayoub3@gmail.com)
- Claude Rhythm Advisor Core — AI Co-Pilot (auc.pmo.advisor@gmail.com)
- Dr. Sherif Kamal — CTO
- Dr. Mohamed Amin — Chairman
- Dr. Usamah Khalafallah — Lead Advisor
- Dr. Mustafa AMIN — Deputy Chairman
- Dr. Ola Ghaddar — Project Lead
- Dr. Mostafa AbdelHady — Scientific/Sales KSA
- Dr. Hosam Fouad — UAE Lead / Life DX CEO
- Dr. Anas Amin — Egypt Lead
- Eng. Amr Amin — KSA Lead
