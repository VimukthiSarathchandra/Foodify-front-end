import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Question() {
  return (
    <div className="bg-[#26120C] py-4">
      <div className="flex flex-col space-y-3 mt-10 mb-15 px-4 md:px-10 lg:px-30 ">
        <h3 className="text-white tracking-widest text-center">FAQ</h3>
        <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold text-center">
          Got Question?
        </h1>
        <p className="text-white text-sm text-center mb-10">
          Perfect,We’ve got the answers!
        </p>

        <div className="flex md:flex-row flex-col md:gap-10">
          <div className="flex flex-col md:w-1/2 gap-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How long does delivery usually take?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Most of our orders are delivered within 30–45 minutes depending on your location.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I customize my bundle meals?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Yes, you can swap side dishes or request vegetarian
                    alternatives when placing your order.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What payment methods do you support?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We accept credit/debit cards, PayPal, and cash on delivery
                    in selected areas.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex flex-col md:w-1/2 gap-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Do you provide catering for events?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Absolutely! We offer catering services for birthdays, office
                    meetings, and small events. Please book in advance.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is there a minimum order amount?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>Yes, the minimum order for delivery is $10.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Are your ingredients fresh and locally sourced?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We use daily fresh produce and locally sourced ingredients
                    to ensure quality.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
