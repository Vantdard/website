import familyCover from "../assets/products/cute-animals/cover.webp";
import hobbiesAnimals from "../assets/products/cute-animals-hobbies/Animals.png";
import hobbiesCover from "../assets/products/cute-animals-hobbies/Cover.png";
import hobbiesImage from "../assets/products/cute-animals-hobbies/Hobbies.png";
import professionsAnimals from "../assets/products/cute-animals-professions/Animals.png";
import professionsCover from "../assets/products/cute-animals-professions/Cover.png";
import professionsImage from "../assets/products/cute-animals-professions/Professions.png";
import animalsImage from "../assets/products/cute-animals-expressions/Animals.png";
import expressionsCover from "../assets/products/cute-animals-expressions/Cover.png";
import expressionsImage from "../assets/products/cute-animals-expressions/Expressions.png";
import type { DigitalCollection, DigitalCollectionDefaults, DigitalProductFamily, ResolvedDigitalCollection } from "../types/content";

export const cuteAnimalsDefaults = {
  animals: ["Capybara", "Cat", "Dog", "Duck", "Fox", "Frog", "Koala", "Panda", "Rabbit"],
  formats: ["PNG", "JPG", "WEBP"], illustrationCount: 45,
  licenseOptions: [
    { use: "personal", name: "Personal Use", price: { amount: 4.99, currency: "USD", paymentModel: "one-time" }, summary: "For personal creative projects and content." },
    { use: "commercial", name: "Commercial Use", price: { amount: 9.99, currency: "USD", paymentModel: "one-time" }, summary: "For creating final products intended for sale." },
  ],
  marketplace: "payhip", support: "Support is limited to problems with the delivered files.",
  updates: "No product updates are promised.", refunds: "Refunds are handled according to Payhip's applicable terms.",
} as const satisfies DigitalCollectionDefaults;

export const digitalFamilies = [{
  slug: "cute-animals", name: "Cute Animals",
  description: "A growing family of coordinated animal illustration collections, each built around nine recurring characters and a distinct theme.",
  audience: "Creators, designers and small businesses that need adorable animal illustrations ready to incorporate into creative projects, content or products.",
  collectionCount: 3, illustrationCount: 135, subjectCount: 9, subjectLabel: "animals",
  cover: { src: familyCover, alt: "Cute Animals family cover featuring Expressions, Hobbies and Professions" },
  collectionSlugs: ["expressions", "hobbies", "professions"],
  seo: { title: "Cute Animals illustration collections | Vantdard", description: "Explore 135 illustrations across Cute Animals — Expressions, Hobbies and Professions, featuring nine coordinated animal characters.", canonicalPath: "/products/digital-products/cute-animals" },
}] as const satisfies readonly DigitalProductFamily[];

export const digitalCollections = [
  { slug: "expressions", familySlug: "cute-animals", name: "Cute Animals — Expressions", shortName: "Expressions",
    description: "Nine adorable animal characters, each illustrated in five expressions for creative projects, content and finished products.",
    variationsLabel: "expressions", variations: ["Happy", "Sad", "Sleeping", "Surprised", "Waving"], status: "available", purchaseUrl: "https://payhip.com/b/lJW7v",
    cover: { src: expressionsCover, alt: "Cute Animals — Expressions collection cover showing illustrated animal characters" },
    gallery: [
      { src: animalsImage, alt: "The nine illustrated animals included in Cute Animals — Expressions", caption: "The complete character lineup included in the collection." },
      { src: expressionsImage, alt: "Examples of the happy, sad, sleeping, surprised and waving expressions", caption: "Each animal is supplied in the same five expressive poses." },
    ],
    seo: { title: "Cute Animals — Expressions | Vantdard", description: "A collection of 45 animal illustrations featuring nine animals and five expressions, delivered in PNG, JPG and WEBP formats.", canonicalPath: "/products/digital-products/cute-animals/expressions", ogType: "product" },
  },
  { slug: "hobbies", familySlug: "cute-animals", name: "Cute Animals — Hobbies", shortName: "Hobbies",
    description: "Nine coordinated animal characters enjoying five familiar hobbies for creative projects, content and finished products.",
    variationsLabel: "hobbies", variations: ["Gaming", "Gardening", "Painting", "Photography", "Reading"], status: "available", purchaseUrl: "https://payhip.com/b/9U5aq",
    cover: { src: hobbiesCover, alt: "Cute Animals — Hobbies collection cover showing illustrated animal characters" },
    gallery: [
      { src: hobbiesAnimals, alt: "The nine illustrated animals included in Cute Animals — Hobbies", caption: "The complete character lineup included in the collection." },
      { src: hobbiesImage, alt: "Examples of the gaming, gardening, painting, photography and reading hobbies", caption: "Each animal is supplied in the same five hobby scenes." },
    ],
    seo: { title: "Cute Animals — Hobbies | Vantdard", description: "A collection of 45 animal illustrations featuring nine animals and five hobbies, delivered in PNG, JPG and WEBP formats.", canonicalPath: "/products/digital-products/cute-animals/hobbies", ogType: "product" },
  },
  { slug: "professions", familySlug: "cute-animals", name: "Cute Animals — Professions", shortName: "Professions",
    description: "Nine coordinated animal characters represented across five professions for creative projects, content and finished products.",
    variationsLabel: "professions", variations: ["Astronaut", "Chef", "DJ", "Doctor", "Police"], status: "available", purchaseUrl: "https://payhip.com/b/mE5qK",
    cover: { src: professionsCover, alt: "Cute Animals — Professions collection cover showing illustrated animal characters" },
    gallery: [
      { src: professionsAnimals, alt: "The nine illustrated animals included in Cute Animals — Professions", caption: "The complete character lineup included in the collection." },
      { src: professionsImage, alt: "Examples of the astronaut, chef, DJ, doctor and police professions", caption: "Each animal is supplied in the same five professional roles." },
    ],
    seo: { title: "Cute Animals — Professions | Vantdard", description: "A collection of 45 animal illustrations featuring nine animals and five professions, delivered in PNG, JPG and WEBP formats.", canonicalPath: "/products/digital-products/cute-animals/professions", ogType: "product" },
  },
] as const satisfies readonly DigitalCollection[];

export function getDigitalFamilyBySlug(slug: string): DigitalProductFamily | undefined { return digitalFamilies.find((family) => family.slug === slug); }
export function getDigitalCollectionsByFamily(familySlug: string): readonly ResolvedDigitalCollection[] { return digitalCollections.filter((collection) => collection.familySlug === familySlug).map(resolveDigitalCollection); }
export function getDigitalCollectionBySlug(familySlug: string, collectionSlug: string): ResolvedDigitalCollection | undefined {
  const collection = digitalCollections.find((item) => item.familySlug === familySlug && item.slug === collectionSlug);
  return collection ? resolveDigitalCollection(collection) : undefined;
}
function resolveDigitalCollection(collection: DigitalCollection): ResolvedDigitalCollection { return { ...cuteAnimalsDefaults, ...collection.overrides, ...collection }; }



