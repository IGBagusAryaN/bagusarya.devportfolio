"use client";

import { ScrollFadeIn } from "../../../../components/scroll-page";
import { contactData } from "./_components/contact-data";
import { ContactItem } from "./_components/contact-item";


export const Contact = () => {
  return (
    <div className="w-full max-w-[920px] mx-auto">
      <ScrollFadeIn>
        <div className="text-[28px]">Contact</div>
        <p className="text-[#969191]">
          Feel free to get in touch and let's have a discussion about how we can
          work together.
        </p>
        <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-10" />

        <div className="grid grid-cols-1 md:flex gap-4">
          {contactData.map((item) => (
            <ContactItem
              key={item.id}
              href={item.href}
              label={item.label}
              icon={item.icon}
              bg={item.bg}
            />
          ))}
        </div>
      </ScrollFadeIn>
    </div>
  );
};
