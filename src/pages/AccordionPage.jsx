import Accordion from "../components/Accordion";
import Alert from "../components/Alert";
import AlertCode from "../components/AlertCode";
const AccordionPage = () => {
  return (
    <div className="text-white px-10">
      <h4 className="text-5xl font-semibold">Accordion</h4>
      <p className="font-light text-2xl pt-2">
        Build vertically collapsing accordions in combination with our Collapse
        JavaScript plugin.
      </p>
      <h4 className="mt-10 text-4xl font-semibold text-purple-500">Example</h4>
      <p className="text-gray-300 pt-2 text-lg">
        Click the accordions below to expand/collapse the accordion content.
      </p>
      <div className="border border-gray-500 rounded pt-5 mt-5 max-w-4xl ">
        {/* alerts */}
        <div className="px-20 pb-5">
          <Accordion title="Accordion Item #1">
            This is the first item's accordion body. It is shown by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can
            modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </Accordion>
          <Accordion title="Accordion Item #2">
            This is the first item's accordion body. It is shown by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can
            modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </Accordion>
          <Accordion title="Accordion Item #3">
            This is the first item's accordion body. It is shown by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can
            modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </Accordion>
        </div>
        <div className="bg-gray-500 h-[1px]"></div>
        <p className="p-2 text-gray-400 font-semibold">HTML</p>
        <div className="bg-gray-500 h-[1px]"></div>
        <div className="bg-black p-5 bg-opacity-35">
          <pre>
            <code>
              <div className="text-lg">
                <span className="text-gray-400">&lt;</span>
                <span className="text-cyan-300">Accordion </span>
                <span className="text-blue-400">title</span>
                <span className="text-gray-400">=</span>
                <span className="text-rose-400">"Accordion Item #1"</span>
                <span className="text-gray-400">&gt;</span>
                <div className="text-sm text-left">
                  This is the first item's accordion body. It is shown by
                  default, until the collapse plugin adds the appropriate <br />
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing <br /> and
                  hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. <br /> It's also
                  worth noting that just about any HTML can go within the
                  .accordion-body, though the transition does <br /> limit overflow.
                </div>
                <span className="text-gray-400">&lt;/</span>
                <span className="text-cyan-300">Accordion </span>
                <span className="text-gray-400">&gt;</span>
              </div>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;
