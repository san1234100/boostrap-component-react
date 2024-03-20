import Badge from "../components/Badge";
import BadgeCode from "../components/BadgeCode";

const BadgePage = () => {
  return (
    <div className="text-white px-10">
      <h4 className="text-5xl font-semibold">Badges</h4>
      <p className="font-light text-2xl pt-2">
        Bootstrap’s cards provide a flexible and extensible content container
        with multiple variants and options.Documentation and examples for
        badges, our small count and labeling component.
      </p>

      <h4 className="mt-10 text-4xl font-semibold text-purple-500">
        Pill badges
      </h4>
      <p className="text-gray-300 pt-2 text-lg">
        Use the rounded-pill component to make badges more rounded with a larger
        border-radius.
      </p>
      <div className="border border-gray-500 rounded pt-5 mt-5 max-w-4xl ">
        {/* cards */}
        <div className="px-20 pb-5 space-x-5">
          <Badge />
          <Badge color="secondary" />
          <Badge color="success" />
          <Badge color="danger" />
          <Badge color="warning" />
          <Badge color="info" />
          <Badge color="light" />
          <Badge color="dark" />
        </div>
        <div className="bg-gray-500 h-[1px]"></div>
        <p className="p-2 text-gray-400 font-semibold">HTML</p>
        <div className="bg-gray-500 h-[1px]"></div>
        <div className="bg-black p-5 bg-opacity-35">
          <pre>
            <code>
              <BadgeCode />
              <BadgeCode color="secondary" />
              <BadgeCode color="success" />
              <BadgeCode color="danger" />
              <BadgeCode color="warning" />
              <BadgeCode color="info" />
              <BadgeCode color="light" />
              <BadgeCode color="dark" />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BadgePage;
