import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Menu, MenuButton } from '@headlessui/react'

import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Pricing',
  description: 'Customers around the Bay Area trust DNA Direct',
}

const tiers = [
  {
    name: 'Legal DNA Testing',
    slug: 'dna-test',
    description:
      'Legal DNA paternity testing, also referred to as chain-of-custody testing, offers results that can serve as evidence of a relationship for matters such as child support, custody battles, immigration cases, birth certificate issues, Social Security matters, and other legal purposes. EZ Mobile DNA simplifies the on-site testing requirements to assist you in obtaining precise answers and progressing forward efficiently.',
    priceMonthly: 425,
    href: '#',
  },
  {
    name: 'Gender Reveal',
    slug: 'growth',
    description:
      "Our company specializes in providing accurate gender results for pregnant women through a simple and convenient blood test.  With our advanced technology and expertise, we can determine the gender of your baby with high accuracy, giving you and your family an early glimpse into your little one's gender.  \n\nOur process is non-invasive and can be done as early as 9 weeks into pregnancy, providing you with peace of mind and helping you plan for the exciting journey ahead.  \n\nTrust us to deliver reliable gender results and celebrate this special moment in your pregnancy journey.",
    priceMonthly: 275,
    href: '#',
  }
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Pricing that works for you</Heading>
      {/* <Lead className="mt-6 max-w-3xl">
        Companies all over the world have closed millions of deals with Radiant.
        Sign up today and start selling smarter.
      </Lead> */}
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        {/* <LogoCloud className="mt-24" /> */}
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={'./appointments'}>Go to Booking</Button>
          </div>
          <div className="mt-8">
            {/* <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

export default function Pricing({ searchParams }) {
  let tier =
    typeof searchParams.tier === 'string'
      ? tiers.find(({ slug }) => slug === searchParams.tier)
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <Footer />
    </main>
  )
}
