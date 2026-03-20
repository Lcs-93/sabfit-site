import { homeSectionIds, type HomeSectionId } from "@/lib/constants";

const pendingHomeSectionKey = "sabfit:pending-home-section";
const extraScrollOffset = 16;

function isHomeSectionId(value: string): value is HomeSectionId {
  return homeSectionIds.includes(value as HomeSectionId);
}

function getHeaderOffset() {
  const header = document.querySelector("header");

  if (!(header instanceof HTMLElement)) {
    return 0;
  }

  return header.getBoundingClientRect().height;
}

export function scrollToHomeSection(
  sectionId: HomeSectionId,
  behavior: ScrollBehavior = "smooth",
) {
  if (typeof window === "undefined") {
    return;
  }

  if (sectionId === "top") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const top = Math.max(
    target.getBoundingClientRect().top + window.scrollY - getHeaderOffset() - extraScrollOffset,
    0,
  );

  window.scrollTo({ top, behavior });
}

export function storePendingHomeSection(sectionId: HomeSectionId) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(pendingHomeSectionKey, sectionId);
}

export function consumePendingHomeSection() {
  if (typeof window === "undefined") {
    return null;
  }

  const storedValue = window.sessionStorage.getItem(pendingHomeSectionKey);

  if (!storedValue) {
    return null;
  }

  window.sessionStorage.removeItem(pendingHomeSectionKey);

  return isHomeSectionId(storedValue) ? storedValue : null;
}
