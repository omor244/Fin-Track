import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, TrendingUp, PieChart, Target, Bell, Lock, BarChart3, Zap } from 'lucide-react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner';
import WhyChoose from '../WhyChoose';
import HowItWorks from '../HowItWorks';
import Pricing from '../Pricing';
import CTASection from '../CTASection';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">

           
            <Banner></Banner>

           
           <WhyChoose></WhyChoose>

       
         <HowItWorks></HowItWorks>

  

          
            <Pricing></Pricing>

        
           <CTASection></CTASection>

         
        </div>
    );
}