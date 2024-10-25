'use client'
import Banner from '@/components/Banner';
import ContactUs from '@/components/ContactUs';
import Frequently from '@/components/Frequently';
import HealthBenefits from '@/components/HealthBenefits';
import Products from '@/components/Products';
import Subscription from '@/components/Subscription';
import Testonomials from '@/components/testonomials';
import WhyChooseUs from '@/components/WhyChooseUs';
import 'react-loading-skeleton/dist/skeleton.css';

const Page = () => {
    return (
        <div>
            <Banner route="/products" name="Products" breadcrumb="Products" image="/images/product-banner.png" />
            <Products />
            <Subscription />
            <WhyChooseUs />
            <HealthBenefits />
            <Frequently />
            <Testonomials/>
            <ContactUs />
        </div>
    )
}

export default Page
