import type { TravelChecklist } from "@/types";

export const travelChecklists: TravelChecklist[] = [
  {
    id: "domestic",
    title: "Domestic Travel Within Canada",
    description:
      "Essentials for travelling with your pet within Canadian provinces.",
    category: "domestic",
    items: [
      {
        label: "Up-to-date vaccination records",
        description:
          "Ensure rabies and core vaccinations are current and documented.",
        required: true,
      },
      {
        label: "Pet identification",
        description:
          "Collar with ID tag, microchip details, and Idenpet QR tag.",
        required: true,
      },
      {
        label: "Health certificate (airline travel)",
        description:
          "Required by most airlines — typically issued within 10 days of travel.",
        required: false,
      },
      {
        label: "Carrier or crate",
        description:
          "Airline-approved carrier for flights, secured crate for road trips.",
        required: true,
      },
      {
        label: "Food, water, and medications",
        description:
          "Pack enough supplies for the trip plus a few extra days.",
        required: true,
      },
      {
        label: "Emergency vet contacts at destination",
        description:
          "Research 24-hour vet clinics near your destination.",
        required: false,
      },
    ],
  },
  {
    id: "us-border",
    title: "Crossing the US Border",
    description:
      "Key documents and steps for taking your pet from Canada into the United States.",
    category: "us-border",
    items: [
      {
        label: "Proof of rabies vaccination",
        description:
          "Dogs must have a valid rabies certificate. Check USDA/APHIS for the latest requirements.",
        required: true,
      },
      {
        label: "Veterinary health certificate",
        description:
          "Issued by a CFIA-accredited veterinarian, typically within 30 days of travel.",
        required: true,
      },
      {
        label: "Microchip verification",
        description:
          "Microchip number should match all accompanying documents.",
        required: true,
      },
      {
        label: "USDA endorsement (if required)",
        description:
          "Some states may require USDA endorsement of the health certificate.",
        required: false,
      },
      {
        label: "Breed-specific regulations check",
        description:
          "Verify your destination state or city doesn't have breed-specific restrictions.",
        required: false,
      },
      {
        label: "Pet-friendly accommodation confirmation",
        description:
          "Confirm your hotel, rental, or destination allows pets.",
        required: false,
      },
    ],
  },
  {
    id: "international",
    title: "International Travel",
    description:
      "General preparation guide for travelling internationally with your pet.",
    category: "international",
    items: [
      {
        label: "Destination country pet import requirements",
        description:
          "Every country has unique rules — research early and thoroughly.",
        required: true,
      },
      {
        label: "ISO-compliant microchip",
        description:
          "Most countries require an ISO 11784/11785 compliant microchip.",
        required: true,
      },
      {
        label: "Rabies titre test (if required)",
        description:
          "Some countries require a blood test proving rabies antibody levels.",
        required: false,
      },
      {
        label: "Export health certificate",
        description:
          "Issued by CFIA and often endorsed by the destination country's embassy or consulate.",
        required: true,
      },
      {
        label: "Import permit",
        description:
          "Many countries require an advance import permit for pets.",
        required: false,
      },
      {
        label: "Quarantine planning",
        description:
          "Some countries impose quarantine on arrival — plan logistics ahead.",
        required: false,
      },
      {
        label: "Airline pet policy review",
        description:
          "Confirm carrier dimensions, breed restrictions, and booking requirements.",
        required: true,
      },
      {
        label: "Return to Canada requirements",
        description:
          "Ensure you also meet CBSA requirements for bringing your pet back into Canada.",
        required: true,
      },
    ],
  },
];
