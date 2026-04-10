export const BUSINESS_TYPE_OPTIONS = [
  'Local business',
  'Service business',
  'Ecommerce brand',
  'Personal brand',
  'Other',
] as const;

export const MAIN_GOAL_OPTIONS = [
  'Get more leads',
  'Sell products online',
  'Refresh an existing site',
  'Launch a first professional site',
  'Book appointments',
] as const;

export const VISUAL_DIRECTION_OPTIONS = [
  'Clean and modern',
  'Warm and lifestyle-focused',
  'Premium and minimal',
  'Bold and edgy',
  'Not sure yet',
] as const;

export const WEBSITE_SCOPE_OPTIONS = [
  'Home page only',
  '3-5 page website',
  '5+ page website',
  'Ecommerce',
  'Contact form',
  'Booking functionality',
  'Portfolio / gallery',
  'Ongoing maintenance',
] as const;

export const TIMELINE_OPTIONS = ['ASAP', '2-4 weeks', 'Flexible'] as const;

export const BUDGET_OPTIONS = [
  'Under $2.5k',
  '$2.5k-$5k',
  '$5k-$10k',
  '$10k+',
] as const;

export const RECOMMENDED_PACKAGES = [
  'Starter',
  'Growth',
  'Premium',
] as const;

export type BusinessType = (typeof BUSINESS_TYPE_OPTIONS)[number];
export type MainGoal = (typeof MAIN_GOAL_OPTIONS)[number];
export type VisualDirection = (typeof VISUAL_DIRECTION_OPTIONS)[number];
export type WebsiteScopeFeature = (typeof WEBSITE_SCOPE_OPTIONS)[number];
export type Timeline = (typeof TIMELINE_OPTIONS)[number];
export type BudgetRange = (typeof BUDGET_OPTIONS)[number];
export type RecommendedPackage = (typeof RECOMMENDED_PACKAGES)[number];

export type ProjectRecommendation = {
  recommendedPackage: RecommendedPackage;
  recommendedReason: string;
};

export type ProjectLeadSubmission = {
  businessType: BusinessType | '';
  mainGoal: MainGoal | '';
  visualDirection: VisualDirection | '';
  websiteScope: WebsiteScopeFeature[];
  timeline: Timeline | '';
  budget: BudgetRange | '';
  name: string;
  businessName: string;
  email: string;
  phone: string;
  additionalNotes: string;
};

const premiumFeatures = new Set<WebsiteScopeFeature>([
  'Ecommerce',
  '5+ page website',
  'Booking functionality',
  'Ongoing maintenance',
]);

const growthFeatures = new Set<WebsiteScopeFeature>([
  '3-5 page website',
  '5+ page website',
  'Contact form',
  'Booking functionality',
  'Portfolio / gallery',
  'Ongoing maintenance',
]);

export function getProjectRecommendation(
  submission: Pick<
    ProjectLeadSubmission,
    'mainGoal' | 'websiteScope' | 'budget' | 'timeline'
  >,
): ProjectRecommendation {
  const { mainGoal, websiteScope, budget, timeline } = submission;

  const hasPremiumFeature = websiteScope.some((feature) =>
    premiumFeatures.has(feature),
  );
  const hasGrowthFeature = websiteScope.some((feature) =>
    growthFeatures.has(feature),
  );
  const hasSimpleScope =
    websiteScope.length > 0 &&
    websiteScope.every(
      (feature) =>
        feature === 'Home page only' ||
        feature === '3-5 page website' ||
        feature === 'Contact form',
    );

  if (
    budget === '$10k+' ||
    websiteScope.includes('Ecommerce') ||
    (websiteScope.includes('5+ page website') &&
      (websiteScope.includes('Booking functionality') ||
        websiteScope.includes('Ongoing maintenance'))) ||
    (budget === '$5k-$10k' && hasPremiumFeature)
  ) {
    return {
      recommendedPackage: 'Premium',
      recommendedReason:
        'Premium is the best starting point for this lead because the requested scope points to a more tailored build with deeper strategy, custom functionality, or a higher-end investment range.',
    };
  }

  if (
    budget === '$5k-$10k' ||
    budget === '$2.5k-$5k' ||
    mainGoal === 'Get more leads' ||
    mainGoal === 'Book appointments' ||
    mainGoal === 'Refresh an existing site' ||
    hasGrowthFeature
  ) {
    return {
      recommendedPackage: 'Growth',
      recommendedReason:
        'Growth is the strongest starting package here because the project calls for a multi-page, conversion-focused website with room for stronger lead generation and business growth.',
    };
  }

  if (
    budget === 'Under $2.5k' &&
    hasSimpleScope &&
    (mainGoal === 'Launch a first professional site' || !mainGoal) &&
    timeline !== 'ASAP'
  ) {
    return {
      recommendedPackage: 'Starter',
      recommendedReason:
        'Starter is a smart fit for this lead because the scope is focused, the investment is lighter, and the project looks well-suited to a polished brochure-style website.',
    };
  }

  return {
    recommendedPackage: hasSimpleScope ? 'Starter' : 'Growth',
    recommendedReason: hasSimpleScope
      ? 'Starter is the best first step for a simpler website with a focused scope and a clear need for a polished online presence.'
      : 'Growth is the best place to begin because the scope suggests a more robust business website with stronger conversion paths and flexibility to expand.',
  };
}

export function isOptionInList<T extends readonly string[]>(
  value: string,
  options: T,
): value is T[number] {
  return options.includes(value as T[number]);
}
