import Features from '@/components/shadcn-studio/blocks/features-section-06/features-section-06'

const featuresData = [
  {
    title: 'Monitor Your Metrics Effortlessly and Accurately.',
    subtitle: 'Create dashboards with shadcn/studio that provide real-time insights.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-2.png',
    imageAlt: 'Monitor Your Metrics Effortlessly and Accurately',
    cursorText: 'Sales',
    description:
      'Create dynamic dashboards with shadcn/studio for real-time insights and metrics. Widgets and live feeds keep your data up-to-date.'
  },
  {
    title: 'Visualize Your Data with Clarity Precision.',
    subtitle: 'shadcn/studio provides customizable charts and graphs for clearer data representation.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-4.png',
    imageAlt: 'Visualize Your Data with Clarity Precision',
    cursorText: 'Activity',
    description:
      'shadcn/studio offers customizable charts and graphs for clear data analysis. Interactive views include bar, pie, and line options.'
  },
  {
    title: 'Boost Productivity & Streamline Tasks Efficiently.',
    subtitle: "Manage workflows effortlessly with shadcn/studio's intuitive UI components.",
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-3.png',
    imageAlt: 'Boost Productivity & Streamline Tasks Efficiently',
    cursorText: 'Earnings',
    description:
      "Manage workflows easily with shadcn/studio's intuitive UI. Streamlined design automates tasks and boosts productivity."
  }
]

const FeaturesPage = () => {
  return <Features featuresData={featuresData} />
}

export default FeaturesPage
