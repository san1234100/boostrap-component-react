import Accordion from "../components/Accordion";
import Card from "../components/Card";

const CardPage = () => {
  return (
    <div className="text-white px-10">
      <h4 className="text-5xl font-semibold">Cards</h4>
      <p className="font-light text-2xl pt-2">
        Bootstrap’s cards provide a flexible and extensible content container
        with multiple variants and options.
      </p>
      <h4 className="mt-10 text-4xl font-semibold text-purple-500">About </h4>
      <p className="text-gray-300 pt-2 text-lg">
        A card is a flexible and extensible content container. It includes
        options for headers and footers, a wide variety of content, contextual
        background colors, and powerful display options. If you’re familiar with
        Bootstrap 3, cards replace our old panels, wells, and thumbnails.
        Similar functionality to those components is available as modifier
        classes for cards.
      </p>
      <h4 className="mt-10 text-4xl font-semibold text-purple-500">Example</h4>
      <p className="text-gray-300 pt-2 text-lg">
        Cards are built with as little markup and styles as possible, but still
        manage to deliver a ton of control and customization. Built with
        flexbox, they offer easy alignment and mix well with other Bootstrap
        components. They have no margin by default, so use spacing utilities as
        needed.{" "}
      </p>
      <div className="border border-gray-500 rounded pt-5 mt-5 max-w-4xl ">
        {/* cards */}
        <div className="px-20 pb-5">
         
           <Card title="Java" img="../src/assets/images/top-web-development.jpg">
           Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization
           </Card>
        </div>
        <div className="bg-gray-500 h-[1px]"></div>
        <p className="p-2 text-gray-400 font-semibold">HTML</p>
        <div className="bg-gray-500 h-[1px]"></div>
        <div className="bg-black p-5 bg-opacity-35">
          <pre>
            <code>
              <div className="text-lg">
                <span className="text-gray-400">&lt;</span>
                <span className="text-cyan-300">Card </span>
                <span className="text-blue-400">title</span>
                <span className="text-gray-400">=</span>
                <span className="text-rose-400">"Java" </span>
                <span className="text-blue-400">size</span>
                <span className="text-gray-400">=</span>
                <span className="text-rose-400">"xs" </span>
                <span className="text-blue-400">img</span>
                <span className="text-gray-400">=</span>
                <span className="text-rose-400">"../src/assets/images/top-web-development.jpg"</span>
                <span className="text-gray-400">&gt;</span>
                <div>
                Cards are built with as little markup and styles as possible, but still manage to <br /> deliver a ton of control and customization
                </div>
                <span className="text-gray-400">&lt;/</span>
                <span className="text-cyan-300">Card </span>
                <span className="text-gray-400">&gt;</span>
              </div>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
