import {
  BUDGET_OPTIONS,
  BUSINESS_TYPE_OPTIONS,
  MAIN_GOAL_OPTIONS,
  TIMELINE_OPTIONS,
  VISUAL_DIRECTION_OPTIONS,
  WEBSITE_SCOPE_OPTIONS,
  isOptionInList,
  type ProjectLeadSubmission,
} from "./projectRecommendation";

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateSubmission(
  payload: unknown,
):
  | { success: true; data: ProjectLeadSubmission }
  | { success: false; errors: string[] } {
  if (!payload || typeof payload !== "object") {
    return { success: false, errors: ["Invalid request body."] };
  }

  const raw = payload as Record<string, unknown>;
  const businessType = normalizeString(raw.businessType);
  const mainGoal = normalizeString(raw.mainGoal);
  const visualDirection = normalizeString(raw.visualDirection);
  const timeline = normalizeString(raw.timeline);
  const budget = normalizeString(raw.budget);
  const name = normalizeString(raw.name);
  const businessName = normalizeString(raw.businessName);
  const email = normalizeString(raw.email);
  const phone = normalizeString(raw.phone);
  const additionalNotes = normalizeString(raw.additionalNotes);
  const websiteScopeRaw = Array.isArray(raw.websiteScope)
    ? raw.websiteScope
    : [];
  const websiteScope = websiteScopeRaw
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter((value) => isOptionInList(value, WEBSITE_SCOPE_OPTIONS));

  const errors: string[] = [];
  const limits: Record<string, number> = {
    name: 120,
    businessName: 200,
    email: 254,
    phone: 40,
    additionalNotes: 4000,
  };
  for (const [field, limit] of Object.entries(limits)) {
    if (typeof raw[field] !== "string" || (raw[field] as string).length > limit)
      errors.push(`${field} exceeds the allowed length or is invalid.`);
  }
  if (
    !Array.isArray(raw.websiteScope) ||
    websiteScopeRaw.length > WEBSITE_SCOPE_OPTIONS.length ||
    websiteScopeRaw.some(
      (value) =>
        typeof value !== "string" ||
        !isOptionInList(value, WEBSITE_SCOPE_OPTIONS),
    )
  )
    errors.push("Choose valid website scope items.");

  if (!isOptionInList(businessType, BUSINESS_TYPE_OPTIONS)) {
    errors.push("Business type is required.");
  }

  if (!isOptionInList(mainGoal, MAIN_GOAL_OPTIONS)) {
    errors.push("Main goal is required.");
  }

  if (!isOptionInList(visualDirection, VISUAL_DIRECTION_OPTIONS)) {
    errors.push("Visual direction is required.");
  }

  if (!isOptionInList(timeline, TIMELINE_OPTIONS)) {
    errors.push("Timeline is required.");
  }

  if (!isOptionInList(budget, BUDGET_OPTIONS)) {
    errors.push("Budget is required.");
  }

  if (websiteScope.length === 0) {
    errors.push("At least one website scope item is required.");
  }

  if (!name) {
    errors.push("Name is required.");
  }

  if (!email) {
    errors.push("Email is required.");
  } else if (!isValidEmail(email)) {
    errors.push("Email must be valid.");
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      businessType: businessType as ProjectLeadSubmission["businessType"],
      mainGoal: mainGoal as ProjectLeadSubmission["mainGoal"],
      visualDirection:
        visualDirection as ProjectLeadSubmission["visualDirection"],
      websiteScope,
      timeline: timeline as ProjectLeadSubmission["timeline"],
      budget: budget as ProjectLeadSubmission["budget"],
      name,
      businessName,
      email,
      phone,
      additionalNotes,
    },
  };
}
