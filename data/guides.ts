import type { Guide } from "@/types";

export const guides: Guide[] = [
  {
    slug: "complete-guide-digital-pet-passport",
    title: "The Complete Guide to Creating a Digital Pet Passport with Idenpet",
    excerpt:
      "Everything you need to know about setting up your pet's digital identity, storing records, and generating a QR safety profile.",
    content: `
## What You'll Learn

This guide walks you through creating a complete digital pet passport using Idenpet — from setting up your pet's profile to generating a QR code and organizing their important documents.

## Step 1: Create Your Pet's Profile

Start by entering your pet's basic information:

- **Name and photo** — helps anyone who finds your pet identify them quickly
- **Breed, age, and weight** — useful for vets and shelters
- **Microchip number** — links your digital profile to their permanent ID
- **Emergency contacts** — your phone number, vet clinic, and a backup contact

## Step 2: Generate Your QR Code

Once your profile is set up, Idenpet generates a unique QR code. You can:

- Print it and attach it to your pet's collar
- Save it as an image to share digitally
- Order a physical Idenpet QR tag (coming soon)

When scanned, the QR code displays your pet's public safety profile — no app needed.

## Step 3: Upload Important Documents

Use the secure document locker to store:

- Vaccination records
- Spay/neuter certificates
- Health certificates for travel
- Registration and licence documents
- Insurance documents (if applicable)

## Step 4: Set Up Reminders

Never miss a vaccination, licence renewal, or vet appointment. Set reminders for:

- Vaccination boosters
- Annual checkups
- Flea, tick, and heartworm treatments
- Licence renewals

## Step 5: Activate Lost Pet Mode (If Needed)

If your pet ever goes missing, activate Lost Pet Mode from your dashboard. This flags the QR profile with a prominent "LOST" banner and displays your preferred contact method.

## Best Practices

- Keep your profile photo up to date
- Update records after every vet visit
- Review your emergency contacts annually
- Share your pet's QR code with dog walkers, pet sitters, and family members

## Start Today

Creating your pet's digital passport is free with Idenpet. It takes less than five minutes and could make all the difference in an emergency.
    `.trim(),
    author: "Idenpet Team",
    date: "2026-03-20",
    readTime: "7 min",
    category: "Getting Started",
    image: "/images/guides/digital-pet-passport-guide.jpg",
  },
  {
    slug: "pet-travel-preparation-guide-canada",
    title: "Pet Travel Preparation Guide for Canadian Pet Owners",
    excerpt:
      "A comprehensive guide to organizing your pet's travel documents, understanding requirements, and using Idenpet to stay travel-ready.",
    content: `
## Why Travel Preparation Matters

Travelling with your pet — whether across the province or across the border — requires documentation. Missing a required document can mean delays, denied boarding, or even quarantine.

Preparation is the key to stress-free pet travel.

## Domestic Travel Essentials

For travel within Canada, keep these organized:

- **Rabies vaccination certificate** — most universally required
- **General health certificate** — airlines typically require one issued within 10 days
- **Pet ID** — collar tag, microchip records, and QR tag
- **Carrier or crate** — airline-approved dimensions if flying

## Crossing the US Border

The US has specific requirements for pets entering from Canada:

- Valid rabies vaccination (with certificate)
- Health certificate from a CFIA-accredited vet
- Microchip matching all documents
- Check CDC requirements — these have been updated recently

## International Travel

Every country is different. General steps:

1. Research your destination country's specific pet import rules
2. Ensure your pet has an ISO-compliant microchip
3. Get any required blood tests (like rabies titre)
4. Obtain an export health certificate from CFIA
5. Check if an import permit is needed
6. Confirm airline pet policies

## How Idenpet Helps

Idenpet's travel readiness features help you:

- **Follow guided checklists** for your travel type
- **Store all travel documents** in one secure place
- **Track document expiry dates** with reminders
- **Access everything on your phone** — even without internet if saved offline

## Disclaimers

Idenpet provides organizational tools and general guidance to help you prepare. Always verify current requirements with:

- Canadian Food Inspection Agency (CFIA)
- US Customs and Border Protection / CDC
- Your destination country's embassy or pet import authority
- Your airline's pet travel policy

Requirements change — preparation is your best protection.
    `.trim(),
    author: "Idenpet Team",
    date: "2026-04-02",
    readTime: "8 min",
    category: "Travel",
    image: "/images/guides/pet-travel-guide.jpg",
  },
  {
    slug: "lost-pet-prevention-recovery-guide",
    title: "Lost Pet Prevention and Recovery: A Canadian Pet Owner's Guide",
    excerpt:
      "Practical strategies to prevent your pet from getting lost and steps to maximize your chances of a fast reunion if they do.",
    content: `
## Prevention Is the Best Strategy

Most lost pet situations are preventable with the right precautions:

### At Home
- Ensure fences and gates are secure
- Check doors and windows for escape routes
- Use baby gates during parties or construction
- Keep garage doors monitored

### During Walks
- Use a properly fitted harness (harder to slip than a collar alone)
- Check leash clips and clasps regularly
- Be extra cautious near busy roads and open areas
- Consider a hands-free leash for active dogs

### During Travel
- Use a secure carrier or crate
- Never leave your pet unattended in a vehicle
- Keep ID on your pet even in the car

## Layered Identification

The best protection combines multiple forms of ID:

1. **Collar with visible ID tag** — name and phone number
2. **Microchip** — permanent internal ID scannable at vet clinics
3. **QR tag** — instant, scannable profile accessible by anyone with a phone

Each layer covers a different scenario. Together, they maximize your chances of a fast reunion.

## What to Do If Your Pet Goes Missing

### Immediately
- Search your immediate area thoroughly
- Ask neighbours to check yards, garages, and sheds
- Activate Lost Pet Mode on Idenpet
- Post on local lost pet social media groups with a clear photo

### Within 24 Hours
- Contact local animal shelters and vet clinics
- Report to your municipal animal services
- Put up posters in the area with a photo and your phone number
- Contact your microchip registry

### Keep Going
- Check shelters in person every 2–3 days
- Expand your social media posts
- Consider hiring a pet tracker if available in your area

## How Idenpet Helps

Idenpet's QR-based system means anyone who encounters your pet can instantly access your contact information. Lost Pet Mode adds a prominent visual alert to the profile, making it unmistakably clear that the pet needs help getting home.

Combined with a physical QR tag, your pet carries their entire safety net on their collar.
    `.trim(),
    author: "Idenpet Team",
    date: "2026-04-06",
    readTime: "6 min",
    category: "Pet Safety",
    image: "/images/guides/lost-pet-prevention.jpg",
  },
];
