import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = {
    about: [
      { title: "Our Mission", href: "#" },
      { title: "Team", href: "#" },
      { title: "Careers", href: "/careers" },
      { title: "Services", href: "/services" },
    ],
    resources: [
      { title: "Blog", href: "/blog" },
      { title: "Research", href: "#" },
      { title: "News/Publications", href: "/news" },
      { title: "Climate Data", href: "#" },
    ],
    // initiatives: [
    //   { title: 'Conservation', href: '#' },
    //   { title: 'Clean Energy', href: '#' },
    //   { title: 'Reforestation', href: '#' },

    // ],
    support: [
      { title: "Contact Us", href: "/contact" },
      { title: "FAQ", href: "/faqs" },
      { title: "Donate", href: "/donate" },
    ],
  };

  const socialLinks = [
    {
      Icon: Facebook,
      href: "http://www.facebook.com/sharer.php?u=https://www.zim.gov.zw/index.php/en/my-government/government-ministries/environment,-climate-and-wildlife",
    },
    {
      Icon: Twitter,
      href: "http://twitter.com/share?url=https://www.zim.gov.zw/index.php/en/my-government/government-ministries/environment,-climate-and-wildlife&text=Environment,%20Climate%20and%20Wildlife",
    },
    // { Icon: Instagram, href: '#' },
    {
      Icon: Linkedin,
      href: "http://www.linkedin.com/shareArticle?mini=true&url=https://www.zim.gov.zw/index.php/en/my-government/government-ministries/environment,-climate-and-wildlife",
    },
    // { Icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-primary"
            >
              Ministry of Environment, Climate & Wildlife
            </motion.h3>
            <p className="text-gray-400 mb-6">
              Dedicated to protecting our planet through education, research,
              and community action.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>info@mecw.gov.zw</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+263 242 701691/2</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>
                  11th Floor, Kaguvi Building Corner S.Muzenda St & Central
                  Avenue Harare, Zimbabwe
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold mb-6 capitalize"
              >
                {category}
              </motion.h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <motion.li key={link.title} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-6 md:mb-0">
              {socialLinks.map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-primary 
                    transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-primary p-3 rounded-full"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Ministry of Environment, Climate and
            Wildlife. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="/copyrights" className="hover:text-primary">
              Copyrights Policy
            </a>
            {/* <span>|</span>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-primary">Cookie Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
