/**
 * Service pages, sorted for menus and card grids. The content lives in
 * src/content/services/*.md (see src/content.config.ts).
 */
import { getCollection, type CollectionEntry } from "astro:content";

export type Service = CollectionEntry<"services">;

export const getServices = async (): Promise<Service[]> =>
  (await getCollection("services")).sort((a, b) => a.data.order - b.data.order);

/** Absolute path of a service page. */
export const servicePath = (service: Service) => `/${service.id}/`;
