import { setupNextSanity } from "next-sanity-extra";
export const {
  sanityClient,
  imageUrlBuilder,
  useSanityQuery,
  sanityStaticProps,
} = setupNextSanity({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});
